"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2 } from "lucide-react";

// Hero explainer. Autoplays muted and loops — browsers only permit autoplay
// without sound, so the unmute prompt below is the way viewers opt into audio.
// Native controls stay on so they can also scrub or go fullscreen.
//
// Autoplay means every visitor fetches the file, so it is kept to a single
// 14MB 1080p encode rather than anything larger.
export function VideoPanel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  // Respect reduced-motion: hold on the poster instead of moving on its own.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      videoRef.current?.pause();
    }
  }, []);

  function unmute() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    setMuted(false);
    if (v.paused) v.play();
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
        onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
      />

      {muted && (
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
