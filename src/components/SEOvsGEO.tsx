import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const SEO_ITEMS = ["Keywords", "Search rankings", "Organic clicks", "Blue links"];
const GEO_ITEMS = [
  "AI recommendations",
  "Brand mentions",
  "Citations",
  "Entity authority",
  "AI share of voice",
];

export function SEOvsGEO() {
  return (
    <section id="what-is-geo" className="border-t border-border bg-paper-alt py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          title="Same customer. A completely different game."
          description="ChatGPT, Claude, Gemini, and Perplexity don't hand back ten links — they hand back an answer."
          align="center"
          className="mx-auto"
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-paper p-8">
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                Traditional SEO
              </p>
              <p className="mt-2 text-[1.15rem] font-semibold text-ink">
                Goal: rank a webpage.
              </p>
              <ul className="mt-6 space-y-3">
                {SEO_ITEMS.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[0.95rem] text-ink-soft">
                    <Check className="size-4 shrink-0 text-ink-faint" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-2xl border-2 border-signal bg-white p-8 shadow-[0_25px_55px_-30px_rgba(255,77,46,0.55)]">
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-signal">
                GEO / AI Search Visibility
              </p>
              <p className="mt-2 text-[1.15rem] font-semibold text-ink">
                Goal: become part of the answer.
              </p>
              <ul className="mt-6 space-y-3">
                {GEO_ITEMS.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[0.95rem] text-ink">
                    <Check className="size-4 shrink-0 text-signal" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <p className="mx-auto mt-14 max-w-xl text-center text-[1.15rem] font-medium leading-snug text-ink">
            SEO gets search engines to find your page.
            <br />
            GEO gets AI to explain why you belong in the answer.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
