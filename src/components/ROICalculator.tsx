"use client";

import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { trackEvent } from "@/lib/analytics";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function ROICalculator() {
  const [value, setValue] = useState(10000);
  const [touched, setTouched] = useState(false);

  const monthly = useMemo(() => Math.max(value, 0), [value]);
  const yearly = monthly * 12;

  const handleChange = (raw: string) => {
    const num = Number(raw.replace(/[^0-9]/g, ""));
    setValue(Number.isFinite(num) ? num : 0);
    if (!touched) {
      setTouched(true);
      trackEvent("roi_calculated", { value: num });
    }
  };

  return (
    <section className="border-t border-border bg-paper-alt py-24 sm:py-32">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            title="You don't need thousands of AI leads for this to matter."
            description="When one job is worth thousands, visibility doesn't need to win you hundreds of customers to pay for itself."
          />
        </div>

        <Reveal delay={120}>
          <div className="rounded-2xl border border-border-strong bg-white p-7 sm:p-8">
            <label htmlFor="customer-value" className="text-[0.85rem] font-medium text-ink-soft">
              What&rsquo;s one new customer worth to you?
            </label>
            <div className="mt-2.5 flex items-center gap-2 rounded-xl border border-border bg-paper-alt px-4 py-3 focus-within:border-signal">
              <span className="text-[1.2rem] font-semibold text-ink-faint">$</span>
              <input
                id="customer-value"
                type="text"
                inputMode="numeric"
                value={value.toLocaleString("en-US")}
                onChange={(e) => handleChange(e.target.value)}
                className="w-full bg-transparent text-[1.2rem] font-semibold text-ink outline-none"
              />
            </div>

            <div className="relative mt-6 overflow-hidden rounded-xl bg-night p-5">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_100%_0%,rgba(255,77,46,0.2),transparent_70%)]"
              />
              <p className="relative text-[0.8rem] font-medium text-cream-on-dark-soft">
                If stronger AI visibility contributed just 1 additional
                customer this month:
              </p>
              <p className="relative mt-1.5 text-[1.9rem] font-bold tabular-nums text-cream-on-dark">
                {formatter.format(monthly)}
              </p>
              <p className="relative mt-1 text-[0.8rem] text-cream-on-dark-soft">
                {formatter.format(yearly)} over 12 months at that same pace
              </p>
            </div>

            <p className="mt-4 text-[0.78rem] leading-relaxed text-ink-faint">
              Illustrative example only. Results are not guaranteed and will
              vary by market, competition, and starting visibility.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
