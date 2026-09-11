import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";
import { CaseStudyRail } from "@/components/services/CaseStudyRail";
import type { ServiceCategory } from "@/lib/servicesData";

export function ServiceDetail({ service }: { service: ServiceCategory }) {

  return (
    <>
      <section className="border-b border-night-soft bg-night pb-14 pt-14 sm:pt-16">
        <div className="container-page">
          <Link
            href="/services"
            className="mb-6 inline-flex items-center gap-2 text-[0.88rem] font-medium text-cream-on-dark-soft hover:text-cream-on-dark"
          >
            <ArrowLeft className="size-4" />
            All services
          </Link>

          <Reveal>
            <span className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-signal sm:text-[0.72rem]">
              {service.label}
            </span>
            <h1 className="mt-3 font-display text-[2.1rem] font-bold leading-[1.06] tracking-tight text-cream-on-dark sm:text-[2.9rem]">
              {service.name} <span className="text-signal">{service.accent}</span>
            </h1>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-cream-on-dark-soft">
              {service.description}
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {service.highlights.map((h) => (
                <span
                  key={h}
                  className="inline-flex items-center gap-2 rounded-full border border-border-on-dark bg-white/[0.04] px-3.5 py-2 text-[0.82rem] text-cream-on-dark"
                >
                  <Check className="size-3.5 text-signal" strokeWidth={3} />
                  {h}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-night-soft bg-night-soft py-12">
        <div className="container-page">
          <div className="mb-6 max-w-2xl">
            <h2 className="font-display text-[1.4rem] font-bold text-cream-on-dark sm:text-[1.7rem]">
              Real-world results
            </h2>
            <p className="mt-2 text-[0.9rem] leading-relaxed text-cream-on-dark-soft">
              Reported performance from live {service.label} campaigns. Results
              vary by account, audience, and industry &mdash; past performance
              doesn&rsquo;t guarantee future results.
            </p>
          </div>
        </div>

        <CaseStudyRail studies={service.caseStudies} />
      </section>

      <section className="border-b border-border bg-paper py-20 sm:py-24">
        <div className="container-page">
          <div className="mb-10 max-w-2xl">
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-signal-dim">
              Pricing &amp; coverage
            </span>
            <h2 className="mt-3 font-display text-[1.7rem] font-bold tracking-tight text-ink sm:text-[2.1rem]">
              Straightforward plans, no surprises.
            </h2>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-soft">
              Current {service.label} plans and what each one covers.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 gap-5 ${
              service.tiers.length === 1
                ? "max-w-md"
                : service.tiers.length >= 4
                  ? "sm:grid-cols-2 xl:grid-cols-4"
                  : "sm:grid-cols-3"
            }`}
          >
            {service.tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border bg-white p-6 ${
                  tier.popular ? "border-2 border-signal" : "border-border"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-6 rounded-full bg-signal px-2.5 py-1 font-mono text-[0.6rem] tracking-wide text-white">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="font-display text-[1.15rem] font-bold text-ink">{tier.name}</h3>
                {tier.sub && <p className="mt-1 text-[0.8rem] text-ink-soft">{tier.sub}</p>}
                {tier.goal && <p className="mt-2 text-[0.82rem] font-semibold text-signal-dim">{tier.goal}</p>}

                <ul className="mt-4 flex flex-1 flex-col gap-2">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2 text-[0.85rem] leading-snug text-ink-soft">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-signal" strokeWidth={3} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 border-t border-border pt-4">
                  <p className="font-display text-[1.7rem] font-bold text-ink">
                    ${tier.price} <span className="font-sans text-[0.8rem] font-normal text-ink-soft">/{tier.per}</span>
                  </p>
                  {tier.setupFee && <p className="mt-1 text-[0.76rem] font-semibold text-signal-dim">{tier.setupFee}</p>}
                </div>

                {tier.stripeUrl ? (
                  <LinkButton
                    href={tier.stripeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    className="mt-4 w-full"
                  >
                    Purchase
                  </LinkButton>
                ) : (
                  <CtaLink event="hero_cta_clicked" href="#book" variant="primary" className="mt-4 w-full">
                    Book a Call
                  </CtaLink>
                )}
              </div>
            ))}
          </div>

          {service.pricingNote && (
            <p className="mt-6 text-[0.86rem] text-ink-soft">
              {service.pricingNote.replace("sales@rankmyservices.io", "")}
              <a href="mailto:sales@rankmyservices.io" className="text-signal-dim underline">
                sales@rankmyservices.io
              </a>
              .
            </p>
          )}
        </div>
      </section>
    </>
  );
}
