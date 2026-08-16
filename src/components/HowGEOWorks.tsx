import { ArrowDown, X } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const SIGNALS = [
  "Authority content",
  "Article & FAQ schema",
  "Author credentials",
  "Citations",
  "Reviews",
  "Structured data",
];

const OUTCOMES = ["Discovered", "Cited", "Recommended"];

const NOT_LIST = [
  "Paying ChatGPT",
  "Buying sponsored rankings",
  "Guaranteeing placement",
];

export function HowGEOWorks() {
  return (
    <section id="how-it-works" className="border-t border-border bg-paper-alt py-24 sm:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="font-display text-[2.1rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-[2.85rem]">
              You don&rsquo;t buy a ranking on ChatGPT.
              <br />
              You become easier for AI to{" "}
              <span className="font-accent">trust and recommend.</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap gap-3">
            {NOT_LIST.map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 rounded-full border border-border-strong bg-paper px-4 py-2 text-[0.85rem] text-ink-soft"
              >
                <X className="size-3.5 text-bad" />
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-5 max-w-2xl text-[1rem] leading-relaxed text-ink-soft">
            Instead, we strengthen the digital signals AI systems can use
            when researching your business and your market.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col items-center">
          <Reveal delay={200}>
            <div className="rounded-full border-2 border-signal bg-white px-7 py-3 text-[1rem] font-semibold tracking-tight text-ink shadow-[0_15px_35px_-20px_rgba(255,77,46,0.55)]">
              Your Business
            </div>
          </Reveal>

          <ArrowDown className="my-5 size-5 text-ink-faint" />

          <Reveal delay={260}>
            <div className="flex max-w-3xl flex-wrap justify-center gap-2.5">
              {SIGNALS.map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-border-strong bg-paper px-4 py-2 text-[0.82rem] text-ink-soft"
                >
                  {signal}
                </span>
              ))}
            </div>
          </Reveal>

          <ArrowDown className="my-5 size-5 text-ink-faint" />

          <Reveal delay={320}>
            <div className="flex flex-wrap justify-center gap-3">
              {OUTCOMES.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-signal px-5 py-2.5 text-[0.9rem] font-semibold text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
