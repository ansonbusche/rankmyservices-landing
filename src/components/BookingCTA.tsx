"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { CALENDLY_URL } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

export function BookingCTA() {
  const [website, setWebsite] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [calendarLoaded, setCalendarLoaded] = useState(false);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (typeof event.data !== "object" || !event.data?.event) return;
      if (String(event.data.event).indexOf("calendly") !== 0) return;
      if (event.data.event === "calendly.event_scheduled") {
        trackEvent("call_booked");
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!website.trim()) return;
    trackEvent("website_submitted", { website });
    setSubmitted(true);
  };

  return (
    <section id="book" className="relative overflow-hidden border-t border-night-soft bg-night py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="beacon-sweep opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_100%,rgba(255,77,46,0.2),transparent_70%)]" />
      </div>

      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-display text-[2.1rem] font-bold leading-[1.06] tracking-tight text-cream-on-dark sm:text-[2.9rem]">
              The question isn&rsquo;t whether people will ask AI who to
              hire.
              <br />
              It&rsquo;s whether AI will know to{" "}
              <span className="font-accent">recommend you.</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mx-auto mt-5 max-w-lg text-[1.02rem] leading-relaxed text-cream-on-dark-soft">
              Your competitors are already building digital authority. Find
              out where you stand before AI search becomes even more
              competitive.
            </p>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-border-on-dark bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                <label htmlFor="website-check" className="sr-only">
                  What&rsquo;s your website?
                </label>
                <input
                  id="website-check"
                  type="text"
                  placeholder="companywebsite.com"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-full rounded-full border border-border-on-dark bg-white/[0.06] px-5 py-3.5 text-[0.95rem] text-cream-on-dark placeholder:text-cream-on-dark-soft/60 outline-none focus:border-signal"
                />
                <button
                  type="submit"
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-signal px-6 py-3.5 text-[0.9rem] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(255,77,46,0.65)] transition-colors hover:bg-signal-dim"
                >
                  Check My AI Visibility
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-3 rounded-full border border-good/50 bg-good/10 px-5 py-3.5 text-[0.92rem] text-cream-on-dark">
                <CheckCircle2 className="size-[18px] shrink-0 text-good" />
                Got it — we&rsquo;ll take a look at {website} on your call.
                Pick a time below.
              </div>
            )}

            <div className="mt-6 overflow-hidden rounded-2xl border border-border-on-dark bg-night-soft">
              {!calendarLoaded && (
                <div className="flex h-[600px] w-full animate-pulse items-center justify-center text-[0.85rem] text-cream-on-dark-soft">
                  Loading scheduler&hellip;
                </div>
              )}
              <iframe
                title="Book your AI Visibility Call"
                src={CALENDLY_URL}
                onLoad={() => {
                  setCalendarLoaded(true);
                  trackEvent("calendar_opened");
                }}
                className="h-[600px] w-full"
                style={{ display: calendarLoaded ? "block" : "none" }}
              />
            </div>

            <p className="mt-5 text-center text-[0.85rem] text-cream-on-dark-soft">
              No generic marketing audit. We&rsquo;ll look specifically at
              your company, your market, and your AI-search visibility.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
