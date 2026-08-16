import { Check, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const FOR_YOU = [
  "You're an established business",
  "One new customer is worth meaningful revenue",
  "You compete in a crowded market",
  "Customers research before hiring",
  "You already have real-world credibility",
  "You want to build authority before AI search gets even more competitive",
  "You understand this is a visibility strategy, not an overnight hack",
];

const NOT_FOR_YOU = [
  "You want guaranteed #1 placement",
  "You expect ChatGPT to be “hacked”",
  "You want fake reviews or fabricated authority",
  "Your company has no legitimate operating history",
  "You're looking for overnight results",
  "You won't make recommended website or reputation improvements",
];

export function FitSection() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          title="GEO works best when there's already a real business worth discovering."
          align="center"
          className="mx-auto"
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-good/40 bg-good/[0.05] p-7 sm:p-8">
              <p className="text-[0.95rem] font-semibold text-ink">
                This is for you if:
              </p>
              <ul className="mt-5 space-y-3.5">
                {FOR_YOU.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.92rem] leading-snug text-ink-soft">
                    <Check className="mt-0.5 size-4 shrink-0 text-good" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-2xl border border-bad/35 bg-bad/[0.04] p-7 sm:p-8">
              <p className="text-[0.95rem] font-semibold text-ink">
                This is not for you if:
              </p>
              <ul className="mt-5 space-y-3.5">
                {NOT_FOR_YOU.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.92rem] leading-snug text-ink-soft">
                    <X className="mt-0.5 size-4 shrink-0 text-bad" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
