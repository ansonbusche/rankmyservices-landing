import { CtaLink } from "@/components/ui/CtaLink";
import { LinkButton } from "@/components/ui/Button";
import { VideoPanel } from "@/components/VideoPanel";
import { Reveal } from "@/components/ui/Reveal";
import { Phone } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-night pb-24 pt-40 sm:pb-32 sm:pt-48"
    >
      {/* Signature motion: one beacon sweep, the page's only rotating element */}
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
              SEO + GEO — search engines and AI search, covered
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.02] tracking-tight text-cream-on-dark sm:text-[3.6rem] lg:text-[4rem]">
              When customers Google you &mdash; or ask ChatGPT{" "}
              <span className="font-bold text-signal">who to hire</span> &mdash; does
              your business show up?
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-[1.1rem] leading-relaxed text-cream-on-dark-soft">
              We run both sides of the search battlefield: SEO to keep you
              ranking in Google, and GEO to get you recommended by ChatGPT,
              Claude, Gemini, and Perplexity.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <CtaLink event="hero_cta_clicked" variant="primary" className="w-full sm:w-auto">
                See How You Rank in AI Search
              </CtaLink>
              <LinkButton
                href="#video"
                variant="outline-on-dark"
                showArrow={false}
                className="w-full sm:w-auto"
              >
                ▶ Watch the overview
              </LinkButton>
            </div>
            <a
              href="tel:+13855033839"
              className="mt-4 inline-flex items-center gap-2 text-[0.88rem] text-cream-on-dark-soft/70 transition-colors hover:text-cream-on-dark"
            >
              <Phone className="size-3.5" />
              Call us: 385-503-3839
            </a>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:pl-4">
          <div id="video">
            <VideoPanel />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
