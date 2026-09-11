const ITEMS = ["ChatGPT", "Claude", "Gemini", "Perplexity", "Google AI Overviews", "SEO", "GEO"];

export function MarqueeStrip() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden border-y border-night-soft bg-night-soft py-4">
      <div className="animate-marquee flex w-max gap-14">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-2.5 whitespace-nowrap font-mono text-[0.82rem] tracking-[0.06em] text-cream-on-dark-soft"
          >
            <span className="text-[0.6rem] text-signal">◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
