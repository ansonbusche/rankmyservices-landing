"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { FAQS } from "@/lib/faq-data";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (i: number) => {
    const next = open === i ? null : i;
    setOpen(next);
    if (next !== null) trackEvent("faq_opened", { question: FAQS[i].q });
  };

  return (
    <section id="faq" className="border-t border-border py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading title="Your skepticism, handled." />

        <div className="mt-12 divide-y divide-border border-y border-border">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={Math.min(i, 4) * 60}>
                <div>
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-[1.02rem] font-medium text-ink">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={cn(
                        "size-5 shrink-0 text-ink-faint transition-transform duration-300",
                        isOpen && "rotate-180 text-signal"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-10 text-[0.95rem] leading-relaxed text-ink-soft">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
