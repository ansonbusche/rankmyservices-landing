"use client";

import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";

const STATS = [
  { value: 4, suffix: "", label: "AI platforms tracked monthly" },
  { value: 50, suffix: "", label: "High-intent prompts per audit" },
  { value: 12, suffix: "mo", label: "To full campaign maturity" },
  { value: 2, suffix: "-in-1", label: "SEO and GEO, same cycle" },
];

function Stat({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const count = useCountUp(value, inView);

  // 2-col grid on mobile, 4-col on desktop — right/bottom borders differ
  // per breakpoint, so each index has its own explicit border recipe
  // rather than one formula trying to cover both layouts.
  const BORDER_RECIPES = [
    "border-r border-b sm:border-b-0", // index 0
    "border-r-0 border-b sm:border-r sm:border-b-0", // index 1
    "border-r", // index 2
    "border-r-0", // index 3
  ];

  return (
    <div
      ref={ref}
      className={cn("border-border p-7 text-left sm:p-8", BORDER_RECIPES[index])}
    >
      <div className="font-display text-[2rem] font-black tabular-nums text-ink sm:text-[2.4rem]">
        {count}
        {suffix}
      </div>
      <p className="mt-1.5 text-[0.86rem] text-ink-soft">{label}</p>
    </div>
  );
}

export function StatsRow() {
  return (
    <section className="border-b border-border bg-paper">
      <div className="container-page grid grid-cols-2 sm:grid-cols-4">
        {STATS.map((s, i) => (
          <Stat key={s.label} {...s} index={i} />
        ))}
      </div>
    </section>
  );
}
