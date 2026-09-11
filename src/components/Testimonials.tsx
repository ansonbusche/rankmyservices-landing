import { ShieldCheck, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";
import { BRAND_NAME } from "@/lib/config";

const SAMPLE_REVIEWS = [
  {
    quote:
      "We stopped guessing whether AI even knew we existed. Now we show up when people ask ChatGPT who to hire.",
    attribution: "[Client Name] · [Industry], [City]",
  },
  {
    quote:
      "The monthly report actually makes sense. No vanity metrics — just where we rank and where we're still invisible.",
    attribution: "[Client Name] · [Industry], [City]",
  },
  {
    quote:
      "Our nearest competitor was getting recommended by AI and we had no idea. Six months later, that's flipped.",
    attribution: "[Client Name] · [Industry], [City]",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-night-soft bg-night py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          title="Built to earn five stars, not just rankings."
          description={`${BRAND_NAME} is still onboarding its first cohort — so treat these three cards as the layout real quotes will drop into once results land, not live reviews.`}
          dark
        />

        <Reveal delay={100}>
          <div className="mt-8 flex max-w-2xl items-start gap-3 rounded-xl border border-border-on-dark bg-white/[0.04] p-5">
            <ShieldCheck className="mt-0.5 size-5 shrink-0 text-signal" />
            <p className="text-[0.92rem] leading-relaxed text-cream-on-dark-soft">
              The GEO team behind {BRAND_NAME} has already helped businesses
              across web design, SEO, and healthcare marketing grow &mdash;
              before we opened it up to home service companies.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {SAMPLE_REVIEWS.map((review, i) => (
            <Reveal key={review.attribution + i} delay={140 + i * 80}>
              <div className="flex h-full flex-col gap-3.5 rounded-2xl border border-border-on-dark bg-white/[0.04] p-6">
                <span className="self-start rounded border border-dashed border-border-on-dark px-2 py-0.5 font-mono text-[0.62rem] tracking-[0.08em] text-cream-on-dark-soft">
                  SAMPLE LAYOUT
                </span>
                <div className="flex gap-0.5 text-signal">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="size-3.5" fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="flex-1 text-[0.96rem] leading-relaxed text-cream-on-dark">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className="text-[0.8rem] text-cream-on-dark-soft">{review.attribution}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mx-auto mt-12 flex flex-col items-center gap-4 text-center">
            <p className="text-[1.05rem] font-medium leading-snug text-cream-on-dark">
              Want to be featured here first?
            </p>
            <CtaLink event="audit_cta_clicked" variant="outline-on-dark">
              Book Your AI Visibility Call
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
