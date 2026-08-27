import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";
import { Check } from "lucide-react";

const STARTING_POINTS = [
  "Already running SEO, nothing for AI search",
  "Already doing some GEO, no real SEO foundation",
  "Starting from zero on both",
];

export function SEOHero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-night pb-24 pt-40 sm:pb-32 sm:pt-48"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="beacon-sweep" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_45%_at_18%_0%,rgba(255,77,46,0.16),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,var(--color-night)_100%)]" />
      </div>

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border-on-dark bg-white/[0.04] px-3.5 py-1.5 text-[0.78rem] font-semibold tracking-tight text-cream-on-dark-soft">
              <span className="size-1.5 animate-pulse-slow rounded-full bg-signal" />
              SEO Services
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.02] tracking-tight text-cream-on-dark sm:text-[3.6rem] lg:text-[3.9rem]">
              Ranked in Google.{" "}
              <span className="font-accent">Recommended by AI.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-[1.1rem] leading-relaxed text-cream-on-dark-soft">
              Full SEO — technical, on-page, local, content, and citations —
              fulfilled through our white-label SEO partner, layered with the
              GEO work we already do. One team, one monthly cycle, both
              sides of search covered.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <CtaLink event="hero_cta_clicked" variant="primary" className="w-full sm:w-auto">
                See How You Rank in Search & AI
              </CtaLink>
            </div>
            <p className="mt-4 text-[0.88rem] text-cream-on-dark-soft/70">
              We scope around what you already have &mdash; no need to buy
              SEO and GEO together.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:pl-4">
          <div className="rounded-2xl border border-border-on-dark bg-white/[0.04] p-7 sm:p-8">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-cream-on-dark-soft">
              Wherever you&rsquo;re starting from
            </p>
            <ul className="mt-5 space-y-4">
              {STARTING_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-signal" />
                  <span className="text-[0.98rem] leading-snug text-cream-on-dark">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[0.88rem] leading-relaxed text-cream-on-dark-soft">
              We audit what&rsquo;s already in place, then build a plan
              around the gap &mdash; not a one-size package.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
