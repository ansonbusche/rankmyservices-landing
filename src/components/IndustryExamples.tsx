import { CornerDownLeft } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const EXAMPLES = [
  {
    industry: "Roofing",
    prompt: "Who are the best roof replacement companies in Denver?",
  },
  {
    industry: "HVAC",
    prompt: "What HVAC company should I use for a heat pump installation in Phoenix?",
  },
  {
    industry: "Flooring",
    prompt: "Who are the best LVP installers near Salt Lake City?",
  },
  {
    industry: "Remodeling",
    prompt: "Which kitchen remodeling contractors in Austin have the best reputation?",
  },
  {
    industry: "Plumbing",
    prompt: "Who's the best company for replacing a sewer line near me?",
  },
];

export function IndustryExamples() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading title="Every market has its own AI search battlefield." />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {EXAMPLES.map((ex, i) => (
            <Reveal key={ex.industry} delay={i * 70}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border-strong bg-white p-5 shadow-[0_20px_45px_-32px_rgba(20,18,15,0.4)]">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-signal">
                  {ex.industry}
                </p>
                <p className="mt-3 flex-1 text-[0.92rem] italic leading-snug text-ink">
                  &ldquo;{ex.prompt}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-1.5 self-end text-ink-faint">
                  <CornerDownLeft className="size-3.5" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mx-auto mt-12 max-w-xl text-center text-[1.05rem] font-medium leading-snug text-ink">
            These aren&rsquo;t just keywords. They&rsquo;re buying decisions.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
