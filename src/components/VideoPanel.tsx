import { Play } from "lucide-react";

// Placeholder video panel for the hero. No video file exists yet — this
// preserves the visual design Anson approved (dark card, pulsing play
// button, frame label) without claiming a specific runtime for a video
// that doesn't exist. Swap the inner content for a real <video>/embed
// once a file or link is available.
export function VideoPanel() {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border-on-dark bg-[linear-gradient(155deg,#2a251c,#191510)] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,77,46,0.16),transparent_55%)]"
      />

      <span className="absolute left-4 top-3.5 font-mono text-[0.68rem] tracking-[0.1em] text-cream-on-dark-soft">
        AI VISIBILITY, EXPLAINED
      </span>

      <div className="absolute inset-0 flex items-center justify-center">
        <span aria-hidden className="absolute size-16 animate-ping rounded-full bg-signal opacity-40" />
        <span className="relative flex size-16 items-center justify-center rounded-full bg-signal text-white shadow-[0_10px_30px_-10px_rgba(255,77,46,0.7)]">
          <Play className="ml-1 size-5" fill="currentColor" strokeWidth={0} />
        </span>
      </div>

      <div className="absolute inset-x-4 bottom-3.5 flex items-center justify-between font-mono text-[0.66rem] tracking-[0.08em] text-cream-on-dark-soft">
        <span>WATCH THE OVERVIEW</span>
        <span className="font-semibold text-cream-on-dark">PREVIEW</span>
      </div>
    </div>
  );
}
