import { Quote, ShieldCheck, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";
import { BRAND_NAME } from "@/lib/config";

const PLACEHOLDERS = [1, 2, 3];

export function Testimonials() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          title="Real results, coming soon."
          description={`We're onboarding our first ${BRAND_NAME} clients now. Case studies and AI-visibility results will show up here as soon as they land — not before.`}
        />

        <Reveal delay={120}>
          <div className="mt-8 flex max-w-2xl items-start gap-3 rounded-xl border border-border bg-paper-alt p-5">
            <ShieldCheck className="mt-0.5 size-5 shrink-0 text-signal" />
            <p className="text-[0.92rem] leading-relaxed text-ink-soft">
              The GEO team behind {BRAND_NAME} has already helped businesses
              across web design, SEO, and healthcare marketing grow &mdash;
              before we opened it up to home service companies.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {PLACEHOLDERS.map((n, i) => (
            <Reveal key={n} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-dashed border-border-strong bg-paper-alt p-6">
                <Quote className="size-5 text-ink-faint" />
                <div className="mt-4 flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="size-3.5 text-ink-faint" />
                  ))}
                </div>
                <p className="mt-3 flex-1 text-[0.92rem] italic leading-snug text-ink-faint">
                  A client story will go here.
                </p>
                <p className="mt-5 border-t border-border pt-3 text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-ink-faint">
                  Coming soon
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={260}>
          <div className="mx-auto mt-12 flex flex-col items-center gap-4 text-center">
            <p className="text-[1.05rem] font-medium leading-snug text-ink">
              Want to be featured here first?
            </p>
            <CtaLink event="audit_cta_clicked" variant="outline">
              Book Your AI Visibility Call
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
