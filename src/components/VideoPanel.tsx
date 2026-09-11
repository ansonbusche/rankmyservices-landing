"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Volume2 } from "lucide-react";

// Hero explainer.
//
// Preferred state is muted autoplay on loop, with a prompt to turn sound on.
// But autoplay is not guaranteed: mobile user agents, Android Data Saver and
// iOS Low Power Mode all refuse it even when muted, and prefers-reduced-motion
// is a reason not to move on our own. Verified refused under a mobile UA.
//
// So we ASK to play and react to the answer rather than assuming. If playback
// is refused we fall back to a proper play button — a frozen frame offering
// only "Tap for sound" would be misleading, since nothing is playing.
export function VideoPanel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      return;
    }
    void video.play().catch(() => {
      // Autoplay refused — the play button below takes over.
    });
  }, []);

  // Tapping the fallback button is a user gesture, so sound is allowed.
  function playWithSound() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    void video.play();
  }

  function unmute() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    if (video.paused) void video.play();
  }

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl border border-border-on-dark bg-night-soft shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
      <video
        ref={videoRef}
        className="size-full"
        src="/video/rms-hero.mp4"
        poster="/video/rms-hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
      />

      {!playing && (
        <button
          type="button"
          onClick={playWithSound}
          aria-label="Play the RankMyServices explainer"
          className="group absolute inset-0 flex items-center justify-center bg-night/25 transition-colors hover:bg-night/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
        >
          <span
            aria-hidden
            className="absolute size-16 animate-ping rounded-full bg-signal opacity-40"
          />
          <span className="relative flex size-16 items-center justify-center rounded-full bg-signal text-white shadow-[0_10px_30px_-10px_rgba(255,75,46,0.7)] transition-transform group-hover:scale-105">
            <Play className="ml-1 size-5" fill="currentColor" strokeWidth={0} />
          </span>
          <span className="absolute inset-x-4 bottom-3.5 flex items-center justify-between font-mono text-[0.66rem] tracking-[0.08em] text-cream-on-dark-soft">
            <span>WATCH THE OVERVIEW</span>
            <span className="font-semibold text-cream-on-dark">2:03</span>
          </span>
        </button>
      )}

      {playing && muted && (
        <button
          type="button"
          onClick={unmute}
          aria-label="Unmute the explainer"
          className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-signal px-4 py-2.5 font-display text-[0.82rem] font-bold tracking-tight text-white shadow-[0_10px_30px_-10px_rgba(255,75,46,0.7)] transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <Volume2 className="size-4" />
          Tap for sound
        </button>
      )}
    </div>
  );
}
