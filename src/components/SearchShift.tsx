import { ArrowDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const BEFORE = ["Search Google", "Scroll results", "Visit five websites", "Compare businesses", "Choose one"];
const NOW = ["Ask AI", "Receive a shortlist", "Compare 2–3 recommendations", "Call one"];

function Flow({ steps, lit }: { steps: string[]; lit?: boolean }) {
  return (
    <div className="flex flex-col items-stretch">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-col items-center">
          <div
            className={cn(
              "w-full rounded-xl border px-5 py-3.5 text-center text-[0.95rem] font-medium transition-colors",
              lit
                ? "border-signal/30 bg-white text-ink shadow-[0_10px_30px_-16px_rgba(255,77,46,0.5)]"
                : "border-border bg-transparent text-ink-faint"
            )}
          >
            {step}
          </div>
          {i < steps.length - 1 && (
            <ArrowDown className={cn("my-2 size-4", lit ? "text-signal" : "text-ink-faint/50")} />
          )}
        </div>
      ))}
    </div>
  );
}

export function SearchShift() {
  return (
    <section className="border-t border-border bg-paper-alt py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          title={
            <>
              Ten blue links
              <br />
              became <span className="font-accent">one answer.</span>
            </>
          }
        />

        <div className="mt-16 grid gap-10 rounded-[2rem] border border-border bg-paper p-6 sm:grid-cols-2 sm:gap-6 sm:p-10 lg:gap-10">
          <Reveal>
            <p className="mb-5 text-center text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-ink-faint sm:text-left">
              Before
            </p>
            <Flow steps={BEFORE} />
          </Reveal>
          <Reveal delay={120}>
            <p className="mb-5 text-center text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-signal sm:text-left">
              Now
            </p>
            <Flow steps={NOW} lit />
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mx-auto mt-16 max-w-2xl text-center">
            <p className="text-[1.3rem] font-medium leading-snug text-ink sm:text-[1.5rem]">
              The businesses inside the answer get considered.
              <br />
              The businesses outside it may never be seen.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
