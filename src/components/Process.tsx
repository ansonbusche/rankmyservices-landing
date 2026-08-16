import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    title: "Onboard & get access",
    description: "A short kickoff call, then we get the website access we need to start implementing — usually within a few days.",
  },
  {
    title: "Map the searches",
    description: "We identify the informational buying questions AI answers in your category and establish your baseline.",
  },
  {
    title: "Build every month",
    description: "New content, schema markup, authority signals, and citations added on a steady monthly cycle — not a one-time push.",
  },
  {
    title: "Report & review",
    description: "A plain-English visibility report and a review call at the end of each monthly cycle.",
  },
  {
    title: "Compound over time",
    description: "Early movement typically shows in 3–6 months, with campaigns reaching full maturity around 6–12 months.",
  },
];

export function Process() {
  return (
    <section className="border-t border-border bg-paper-alt py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading title="From invisible to measurable." />

        <div className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 90}>
              <div className="relative pl-0">
                <div className="flex items-center gap-3">
                  <span className="font-display flex size-10 shrink-0 items-center justify-center rounded-full bg-signal text-[0.95rem] font-bold text-white">
                    {i + 1}
                  </span>
                  {i < STEPS.length - 1 && (
                    <span className="hidden h-px flex-1 bg-border-strong lg:block" />
                  )}
                </div>
                <p className="mt-4 text-[1.05rem] font-semibold text-ink">
                  {step.title}
                </p>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
