export const FAQS = [
  {
    q: "Do you only do GEO, or regular SEO too?",
    a: "Both. We run full SEO — technical audits, on-page optimization, local SEO and Google Business Profile management, citations, and content — through our fulfillment partner, layered with GEO so you show up in classic Google results and AI answers.",
  },
  {
    q: "Do I have to buy SEO and GEO together?",
    a: "No. We scope the engagement around what you already have. If you already run solid SEO, we can focus purely on GEO. If you're starting from zero on both, we build the full program. Most clients run both because the two compound over time.",
  },
  {
    q: "What is GEO, in plain terms?",
    a: "GEO — Generative Engine Optimization — is the practice of making your content easy for AI to reference, summarize, and cite in answers from ChatGPT, Claude, and Google AI Overviews, so you show up as a trusted option.",
  },
  {
    q: "How is GEO different from SEO?",
    a: "SEO gets a page ranked in a list of links. GEO gets your business named inside the answer itself — often before anyone sees a list of links at all. The two overlap, and strong SEO helps GEO, which is why we run them together instead of picking one.",
  },
  {
    q: "Can you guarantee I'll rank #1 on ChatGPT?",
    a: "No — and anyone who promises that should raise a flag. AI answers shift by prompt, platform, and personalization. We optimize what's actually within our control and track visibility over time.",
  },
  {
    q: "Are you paying ChatGPT to list us?",
    a: "No. This isn't paid placement. We build the authority and content signals AI systems draw on when they research your business.",
  },
  {
    q: "How quickly does this work?",
    a: "Early movement typically shows in 3–6 months, with most campaigns reaching full maturity in 6–12 months as content and authority compound. We won't promise a faster timeline just to close the call.",
  },
  {
    q: "What do you need from us to get started?",
    a: "Website access and sign-off on new content before it publishes. We work with the photos and video you already have.",
  },
] as const;

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};
