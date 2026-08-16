"use client";

import { useEffect, useState } from "react";
import { Check, Sparkles, X } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useTypewriter } from "@/hooks/useTypewriter";
import { cn } from "@/lib/utils";

const QUESTION =
  "Who are the best roofing companies in Austin for a full roof replacement?";

const COMPETITORS = ["Summit Roofing Co.", "Bluepeak Exteriors", "Ironclad Roofing Group"];

export function AIAnswerMockup() {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const typed = useTypewriter(QUESTION, inView, 18);
  const questionDone = typed.length === QUESTION.length;

  const [stage, setStage] = useState(0);
  // stage 0: typing question, 1: thinking, 2: answer intro, 3..5: competitors, 6: your company

  useEffect(() => {
    if (!questionDone) return;
    const timers: number[] = [];
    timers.push(window.setTimeout(() => setStage(1), 250));
    timers.push(window.setTimeout(() => setStage(2), 1100));
    timers.push(window.setTimeout(() => setStage(3), 1500));
    timers.push(window.setTimeout(() => setStage(4), 1900));
    timers.push(window.setTimeout(() => setStage(5), 2300));
    timers.push(window.setTimeout(() => setStage(6), 2900));
    return () => timers.forEach((t) => clearTimeout(t));
  }, [questionDone]);

  return (
    <div ref={ref} className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(60%_60%_at_50%_40%,rgba(255,77,46,0.35),transparent_70%)] blur-2xl"
      />
      <div className="overflow-hidden rounded-2xl border border-border-strong bg-white shadow-[0_40px_90px_-25px_rgba(0,0,0,0.55)]">
        <div className="flex items-center gap-2 border-b border-border bg-paper-alt px-4 py-3">
          <span className="size-2.5 rounded-full bg-ink/15" />
          <span className="size-2.5 rounded-full bg-ink/15" />
          <span className="size-2.5 rounded-full bg-ink/15" />
          <span className="ml-2 flex items-center gap-1.5 text-[0.78rem] font-medium text-ink-soft">
            <Sparkles className="size-3.5 text-signal" />
            AI Search
          </span>
        </div>

        <div className="space-y-4 p-5 sm:p-6">
          <div className="flex justify-end">
            <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-ink px-4 py-3 text-[0.9rem] leading-snug text-cream-on-dark">
              {typed}
              {!questionDone && <span className="ml-0.5 animate-pulse">|</span>}
            </div>
          </div>

          {stage >= 1 && (
            <div className="flex items-start gap-2.5">
              <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-signal-soft text-signal">
                <Sparkles className="size-3.5" />
              </span>
              <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-paper-alt px-4 py-3">
                {stage === 1 ? (
                  <span className="flex gap-1">
                    <span className="size-1.5 animate-bounce rounded-full bg-ink-faint [animation-delay:0ms]" />
                    <span className="size-1.5 animate-bounce rounded-full bg-ink-faint [animation-delay:120ms]" />
                    <span className="size-1.5 animate-bounce rounded-full bg-ink-faint [animation-delay:240ms]" />
                  </span>
                ) : (
                  <p className="text-[0.9rem] leading-snug text-ink">
                    Here are a few well-reviewed roofing companies worth
                    considering for a full replacement:
                  </p>
                )}
              </div>
            </div>
          )}

          {stage >= 3 && (
            <ul className="space-y-2 pl-8">
              {COMPETITORS.map((name, i) => (
                <li
                  key={name}
                  className={cn(
                    "flex items-center justify-between gap-3 rounded-xl border border-border bg-white px-3.5 py-2.5 transition-opacity duration-500",
                    stage >= 3 + i ? "opacity-100" : "opacity-0"
                  )}
                >
                  <span className="text-[0.88rem] font-medium text-ink">
                    {i + 1}. {name}
                  </span>
                  <span className="flex items-center gap-1 rounded-full bg-good px-2.5 py-1 text-[0.7rem] font-semibold text-white">
                    <Check className="size-3" />
                    Recommended
                  </span>
                </li>
              ))}
            </ul>
          )}

          {stage >= 6 && (
            <div className="pl-8">
              <div className="flex items-center justify-between gap-3 rounded-xl border border-dashed border-bad bg-bad/10 px-3.5 py-2.5">
                <span className="text-[0.88rem] font-medium text-ink">
                  Your Company
                </span>
                <span className="flex items-center gap-1 rounded-full bg-bad px-2.5 py-1 text-[0.7rem] font-semibold text-white">
                  <X className="size-3" />
                  Not mentioned
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      <p
        className={cn(
          "mt-4 text-center text-[0.85rem] italic text-ink-faint transition-opacity duration-700 sm:text-left",
          stage >= 6 ? "opacity-100" : "opacity-0"
        )}
      >
        If you&rsquo;re not in the answer, you&rsquo;re not in the consideration set.
      </p>
    </div>
  );
}
