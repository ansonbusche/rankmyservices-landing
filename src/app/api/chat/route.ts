import { NextResponse } from "next/server";
import { FAQS } from "@/lib/faq-data";
import { BRAND_NAME, PRIMARY_CTA, SITE_URL } from "@/lib/config";

export const runtime = "nodejs";

const MODEL = "claude-haiku-4-5-20251001";
const MAX_HISTORY = 12;
const MAX_MESSAGE_LENGTH = 1500;

const faqContext = FAQS.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n");

const SYSTEM_PROMPT = `You are the on-site AI assistant for ${BRAND_NAME} (${SITE_URL}), an SEO and GEO (Generative Engine Optimization) service.

What ${BRAND_NAME} does: helps established, owner-led home-service businesses (roofing, HVAC, plumbing, flooring, remodeling, and similar trades) rank higher on Google AND get discovered, cited, and recommended by AI platforms like ChatGPT, Claude, Gemini, and Perplexity. SEO work covers technical audits, on-page optimization, local SEO and Google Business Profile management, citation building, and content — fulfilled through our white-label SEO partner. GEO work is done through a recurring monthly cycle: keyword/topic mapping, expert authority content, schema and structured data, entity/authority signals, AI visibility tracking, and monthly reporting. Clients can start with just SEO, just GEO, or both, depending on what they already have in place. It is NOT paid placement — nobody can pay ChatGPT for a mention — and results are never guaranteed since AI answers shift by prompt, platform, and personalization. Early movement typically shows in 3–6 months, full maturity in 6–12 months.

The site's FAQ, for grounding your answers:
${faqContext}

How to behave:
- Be concise, direct, and genuinely helpful — a couple of short paragraphs at most, not a wall of text.
- Only answer questions related to ${BRAND_NAME}, SEO, GEO, AI search visibility, or how the service works. For anything unrelated (general chit-chat, other companies, unrelated technical support, etc.), politely say that's outside what you can help with here.
- Never invent client names, case studies, specific pricing, or guaranteed results — the site is explicit that there are no real case studies yet and no guarantees.
- For pricing, contracts, or anything that needs a real answer specific to someone's business, point them to "${PRIMARY_CTA}" (the booking flow on this page) rather than guessing.
- Never claim to be human. If asked, you're an AI assistant for this site.`;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "The assistant isn't configured yet. Please try the booking form instead." },
      { status: 503 }
    );
  }

  let body: { messages?: ChatMessage[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const incoming = Array.isArray(body.messages) ? body.messages : [];
  const messages: ChatMessage[] = incoming
    .filter(
      (m): m is ChatMessage =>
        !!m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0
    )
    .slice(-MAX_HISTORY)
    .map((m) => ({
      role: m.role,
      content: m.content.slice(0, MAX_MESSAGE_LENGTH),
    }));

  if (messages.length === 0 || messages[messages.length - 1].role !== "user") {
    return NextResponse.json({ error: "No message provided." }, { status: 400 });
  }

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 400,
        system: SYSTEM_PROMPT,
        messages,
      }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error("Anthropic API error", res.status, errBody);
      return NextResponse.json(
        { error: "The assistant is having trouble right now. Try again in a moment." },
        { status: 502 }
      );
    }

    const data = await res.json();
    const reply = data?.content?.[0]?.text?.trim();

    if (!reply) {
      return NextResponse.json(
        { error: "The assistant didn't return a response. Try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat route failure", err);
    return NextResponse.json(
      { error: "Something went wrong reaching the assistant." },
      { status: 500 }
    );
  }
}
