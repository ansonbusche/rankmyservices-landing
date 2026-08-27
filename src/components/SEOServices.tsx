import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const SERVICES = [
  {
    n: "01",
    title: "Technical & On-Page SEO",
    description:
      "A full technical audit and on-page optimization so search engines can crawl, index, and rank your site the way they're supposed to.",
  },
  {
    n: "02",
    title: "Local SEO & Google Business Profile",
    description:
      "Google Business Profile management and regular posting, tuned to win the map pack in the specific towns and cities you serve.",
  },
  {
    n: "03",
    title: "Citation Building",
    description:
      "Ongoing citation submissions across relevant directories — the local trust signals both Google and AI systems look for.",
  },
  {
    n: "04",
    title: "Content & Internal Linking",
    description:
      "New content pages built around your services and service areas every month, tied together with a deliberate internal linking strategy.",
  },
  {
    n: "05",
    title: "Conversion & Custom Strategy",
    description:
      "Conversion rate evaluation and a strategy built around your specific niche and market — not a generic template applied to every client.",
  },
  {
    n: "06",
    title: "Monthly Reporting & Review",
    description:
      "A plain-English report and a review call every cycle — with AI-answer visibility tracked alongside it, so you can see both sides moving.",
  },
];

export function SEOServices() {
  return (
    <section id="seo-services" className="border-t border-border py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          title="The SEO Engine: what we actually do, every month."
          description="Fulfilled through our white-label SEO partner and folded into the same monthly cycle as your GEO work — not a separate, disconnected line item."
        />

        <div className="mt-14 divide-y divide-border border-y border-border">
          {SERVICES.map((service, i) => (
            <Reveal key={service.n} delay={Math.min(i, 4) * 60}>
              <div className="group grid gap-2 py-8 sm:grid-cols-[6rem_1fr] sm:gap-8 sm:py-10 lg:grid-cols-[8rem_18rem_1fr] lg:items-baseline">
                <span className="font-display text-[2rem] font-bold leading-none text-signal/70 transition-colors group-hover:text-signal sm:text-[2.5rem]">
                  {service.n}
                </span>
                <p className="font-display text-[1.3rem] font-bold leading-tight text-ink lg:text-[1.4rem]">
                  {service.title}
                </p>
                <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-ink-soft sm:col-span-2 sm:mt-2 lg:col-span-1 lg:mt-0">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
