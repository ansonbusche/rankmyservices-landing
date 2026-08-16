"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, Radio, Volume2, VolumeX } from "lucide-react";
import { BRAND_NAME, CALENDLY_URL } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";
import { Reveal } from "@/components/ui/Reveal";

const GEO_POINTS = [
  {
    title: "AI doesn't hand back ten links — it hands back an answer.",
    body: "ChatGPT, Claude, Gemini, and Perplexity give a shortlist, not a search results page. If you're not in the answer, you're not in the consideration set.",
  },
  {
    title: "GEO builds the authority AI systems look for.",
    body: "Expert content, schema markup, and citations — a steady monthly cycle, not a one-time trick.",
  },
  {
    title: "We show you the problem before you hire us.",
    body: "We test the questions your customers ask AI before hiring, and show you which competitors currently get recommended instead of you.",
  },
];

export function PreCallView() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(true);
  const [calendarLoaded, setCalendarLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onPlay = () => setIsPaused(false);
    const onPause = () => setIsPaused(true);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

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

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (video.paused) {
      video.play().catch(() => {});
    }
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  return (
    <>
      <header className="border-b border-night-soft bg-night py-5">
        <div className="container-page flex items-center justify-center">
          <span className="flex items-center gap-2.5 text-cream-on-dark">
            <span className="flex size-8 items-center justify-center rounded-full bg-signal text-white">
              <Radio className="size-4" strokeWidth={2.5} />
            </span>
            <span className="font-display text-[1.05rem] font-bold tracking-tight">
              {BRAND_NAME}
            </span>
          </span>
        </div>
      </header>

      <main className="bg-night">
        <section className="pb-6 pt-14 text-center">
          <div className="container-page mx-auto max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border-on-dark bg-white/[0.04] px-3.5 py-1.5 text-[0.78rem] font-semibold tracking-tight text-cream-on-dark-soft">
                <span className="size-1.5 animate-pulse-slow rounded-full bg-signal" />
                The next search war has already started
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-[2.1rem] font-bold leading-[1.06] tracking-tight text-cream-on-dark sm:text-[2.9rem]">
                When customers ask ChatGPT{" "}
                <span className="font-accent">who to hire</span>&hellip; does
                your business show up?
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-5 max-w-lg text-[1.02rem] leading-relaxed text-cream-on-dark-soft">
                Watch this 60-second breakdown, then grab a spot on our
                calendar &mdash; we&rsquo;ll show you exactly where you
                stand.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="pb-2 pt-4">
          <div className="container-page mx-auto max-w-2xl">
            <Reveal delay={200}>
              <div className="relative aspect-video overflow-hidden rounded-[20px] border border-border-on-dark bg-black shadow-[0_30px_70px_-30px_rgba(255,77,46,0.35),0_10px_40px_-15px_rgba(0,0,0,0.6)]">
                <video
                  ref={videoRef}
                  src="/videos/pre-call-hero.mp4"
                  className="size-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPaused ? "Play video" : "Pause video"}
                  className="absolute inset-0 flex items-center justify-center bg-night/0 transition-colors hover:bg-night/20"
                >
                  {isPaused && (
                    <span className="flex size-16 items-center justify-center rounded-full bg-signal shadow-[0_10px_30px_-6px_rgba(255,77,46,0.6)]">
                      <Play className="ml-0.5 size-6 fill-white text-white" />
                    </span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={toggleSound}
                  aria-label={muted ? "Unmute video" : "Mute video"}
                  className="absolute bottom-4 right-4 flex items-center gap-[7px] rounded-full border border-cream-on-dark/25 bg-night/75 px-4 py-2 text-[0.82rem] font-semibold text-cream-on-dark backdrop-blur-md transition-colors hover:bg-night/90"
                >
                  {muted ? (
                    <VolumeX className="size-[15px]" />
                  ) : (
                    <Volume2 className="size-[15px]" />
                  )}
                  {muted ? "Tap for sound" : "Mute"}
                </button>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-7 text-center">
                <a
                  href="#book"
                  onClick={() => trackEvent("hero_cta_clicked")}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-signal px-7 py-[15px] text-[0.98rem] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(255,77,46,0.65)] transition-all hover:bg-signal-dim"
                >
                  Book Your AI Visibility Call
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <p className="mt-3.5 text-[0.85rem] text-cream-on-dark-soft/70">
                  Free 30-minute call &middot; No obligation
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <section id="what-is-geo" className="bg-paper py-16 sm:py-20">
        <div className="container-page mx-auto max-w-2xl">
          <Reveal>
            <h2 className="text-center font-display text-[1.6rem] font-bold tracking-tight text-ink sm:text-[1.9rem]">
              What is <span className="font-accent">GEO</span>, in plain
              terms?
            </h2>
          </Reveal>
          <div className="mt-9 border-t border-border">
            {GEO_POINTS.map((point, i) => (
              <Reveal key={point.title} delay={i * 80}>
                <div className="flex gap-4 border-b border-border py-[22px]">
                  <span className="w-7 shrink-0 font-display text-[0.95rem] font-bold text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <strong className="block text-[1rem] text-ink">
                      {point.title}
                    </strong>
                    <span className="mt-[3px] block text-[0.92rem] text-ink-soft">
                      {point.body}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="book"
        className="relative overflow-hidden border-t border-night-soft bg-night py-16 sm:py-20"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_100%,rgba(255,77,46,0.2),transparent_70%)]" />
        </div>
        <div className="container-page mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-display text-[1.7rem] font-bold tracking-tight text-cream-on-dark sm:text-[2.1rem]">
              See where you stand.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[1rem] text-cream-on-dark-soft">
              Book a short strategy call and we&rsquo;ll walk through your AI
              visibility snapshot together.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 overflow-hidden rounded-2xl border border-border-on-dark bg-night-soft">
              {!calendarLoaded && (
                <div className="flex h-[700px] w-full animate-pulse items-center justify-center text-[0.85rem] text-cream-on-dark-soft">
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
                className="h-[700px] w-full"
                style={{ display: calendarLoaded ? "block" : "none" }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-night-soft bg-night py-10 text-center">
        <p className="text-[0.82rem] text-cream-on-dark-soft/70">
          &copy; {new Date().getFullYear()} {BRAND_NAME} &middot;{" "}
          <a href="/" className="hover:text-cream-on-dark">
            rankmyservices.io
          </a>
        </p>
      </footer>
    </>
  );
}
