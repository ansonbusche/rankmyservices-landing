"use client";

import { AlertTriangle } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const ROWS = [
  { name: "Competitor A", value: 31, tone: "good" },
  { name: "Competitor B", value: 24, tone: "warn" },
  { name: "Competitor C", value: 19, tone: "warn" },
  { name: "Your Company", value: 7, tone: "bad" },
] as const;

const MAX = 31;

const TONE_TEXT = {
  good: "text-good",
  warn: "text-warn",
  bad: "text-bad",
} as const;

const TONE_BAR = {
  good: "bg-good",
  warn: "bg-warn",
  bad: "bg-bad",
} as const;

function Bar({
  name,
  value,
  tone,
  active,
}: {
  name: string;
  value: number;
  tone: "good" | "warn" | "bad";
  active: boolean;
}) {
  const count = useCountUp(value, active, 1100);
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between">
        <span className={cn("text-[0.9rem] font-medium", tone === "bad" ? TONE_TEXT[tone] : "text-cream-on-dark")}>
          {name}
        </span>
        <span className={cn("text-[0.9rem] font-semibold tabular-nums", TONE_TEXT[tone])}>
          {count} mentions
        </span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className={cn("h-full rounded-full transition-all duration-[1100ms] ease-out", TONE_BAR[tone])}
          style={{ width: active ? `${(value / MAX) * 100}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export function VisibilityProblem() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const share = useCountUp(8, inView, 1100);

  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <h2 className="font-display text-[2.1rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-[2.6rem]">
              Your competitors may already be getting recommended &mdash;
              without you knowing it.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
              You probably track Google rankings, ad spend, website traffic,
              leads, and reviews. But when someone asks ChatGPT, Claude,
              Gemini, or Perplexity for businesses in your category, you
              likely have no idea what they&rsquo;re told.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-8 flex items-start gap-3 rounded-xl border border-border bg-paper-alt p-5">
              <AlertTriangle className="mt-0.5 size-5 shrink-0 text-signal" />
              <p className="text-[0.92rem] leading-relaxed text-ink-soft">
                Most business owners can name their top 3 Google competitors.
                Almost none can name who AI is recommending instead of them.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div
            ref={ref}
            className="relative overflow-hidden rounded-2xl border border-night-soft bg-night p-7 shadow-[0_35px_80px_-35px_rgba(0,0,0,0.55)] sm:p-8"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_100%_0%,rgba(255,77,46,0.14),transparent_65%)]"
            />
            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-cream-on-dark-soft">
                  AI Visibility Audit
                </p>
                <p className="mt-1 text-[0.95rem] font-medium text-cream-on-dark">
                  50 high-intent prompts tested
                </p>
              </div>
            </div>

            <div className="relative mt-7 space-y-5">
              {ROWS.map((row) => (
                <Bar key={row.name} {...row} active={inView} />
              ))}
            </div>

            <div className="relative mt-7 flex items-center justify-between rounded-xl bg-white/[0.06] px-5 py-4">
              <span className="text-[0.9rem] font-medium text-cream-on-dark-soft">
                AI Share of Voice
              </span>
              <span className="text-[1.4rem] font-bold tabular-nums text-signal">
                {share}%
              </span>
            </div>

            <p className="relative mt-4 text-center text-[0.75rem] text-cream-on-dark-soft/70">
              Sample visualization for illustration &mdash; not actual client
              data.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
