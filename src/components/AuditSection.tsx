import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";

const ITEMS = [
  "High-intent customer prompts",
  "Current ChatGPT visibility",
  "Claude visibility",
  "Gemini visibility",
  "Perplexity visibility",
  "Competitor recommendations",
  "AI share-of-voice snapshot",
  "Authority gaps",
  "Your biggest opportunities",
];

export function AuditSection() {
  return (
    <section className="border-t border-border bg-paper-alt py-24 sm:py-32">
      <div className="container-page">
        <div className="relative mx-auto max-w-2xl overflow-hidden rounded-[2rem] border border-night-soft bg-night p-8 text-center shadow-[0_40px_90px_-40px_rgba(0,0,0,0.6)] sm:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,77,46,0.18),transparent_70%)]"
          />
          <Reveal>
            <h2 className="relative font-display text-[2rem] font-bold leading-[1.05] tracking-tight text-cream-on-dark sm:text-[2.5rem]">
              Before you hire us, we&rsquo;ll show you the problem.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="relative mx-auto mt-5 max-w-md text-[1.02rem] leading-relaxed text-cream-on-dark-soft">
              We&rsquo;ll test the questions customers ask before hiring
              businesses like yours and show you which companies AI
              currently recommends.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="relative mt-9 rounded-2xl border border-border-on-dark bg-white/[0.04] p-6 text-left sm:p-7">
              <p className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-cream-on-dark-soft">
                Your AI Visibility Snapshot
              </p>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {ITEMS.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[0.9rem] text-cream-on-dark">
                    <Check className="size-4 shrink-0 text-signal" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="relative mt-9 flex flex-col items-center gap-3">
              <CtaLink event="audit_cta_clicked" variant="primary">
                See How You Rank in AI Search
              </CtaLink>
              <p className="text-[0.85rem] text-cream-on-dark-soft/70">
                Book a short strategy call and we&rsquo;ll walk through what
                we find.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
