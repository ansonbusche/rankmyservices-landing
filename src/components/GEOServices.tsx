import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const SERVICES = [
  {
    n: "01",
    title: "Keyword & Topic Mapping",
    description:
      "We map the informational questions your customers ask AI before hiring, and build your content plan around the ones that matter.",
  },
  {
    n: "02",
    title: "Expert Authority Content",
    description:
      "In-depth pages built to be cited, not skimmed — grounded in real expertise, not generic blog filler.",
  },
  {
    n: "03",
    title: "Schema & Structured Data",
    description:
      "Article, author, and FAQ schema so AI systems can parse who wrote it and why it's credible.",
  },
  {
    n: "04",
    title: "Entity & Authority Signals",
    description:
      "Consistent business information, credentials, and third-party citations that make you easier to trust.",
  },
  {
    n: "05",
    title: "AI Visibility Tracking",
    description:
      "We monitor your presence across Google AI Overviews, ChatGPT, Claude, and Perplexity every month.",
  },
  {
    n: "06",
    title: "Monthly Reporting",
    description:
      "A plain-English report and a review call at the end of every cycle — no vanity metrics.",
  },
];

export function GEOServices() {
  return (
    <section id="services" className="border-t border-border py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          title="The GEO Engine: what we actually do, every month."
          description="Not a one-time trick — a steady monthly cycle that builds the authority AI looks for."
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
