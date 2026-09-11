import { ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";
import { BRAND_NAME } from "@/lib/config";

export function Testimonials() {
  return (
    <section className="border-t border-night-soft bg-night py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          title="Built to earn five stars, not just rankings."
          description="Written client reviews are still coming in. The measured results, though, are already real — every service page carries case studies from live campaigns."
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
