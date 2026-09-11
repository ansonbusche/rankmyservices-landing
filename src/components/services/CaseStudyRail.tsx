"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";
import type { CaseStudy } from "@/lib/servicesData";

// Square cover cards styled after the printed case study sheets, sliding in a
// marquee. Clicking one opens the full sheet. A single study has nothing to
// scroll past, so it renders static instead of looping one card forever.
export function CaseStudyRail({ studies }: { studies: CaseStudy[] }) {
  const [open, setOpen] = useState<CaseStudy | null>(null);
  const hasSlider = studies.length > 1;
  const track = hasSlider ? [...studies, ...studies] : studies;

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, close]);

  return (
    <>
      {hasSlider ? (
        <div className="overflow-hidden">
          <div
            className="animate-marquee flex w-max gap-5 px-6 sm:px-10"
            style={{ animationDuration: `${track.length * 7}s` }}
          >
            {track.map((study, i) => (
              <CoverCard
                key={`${study.image}-${i}`}
                study={study}
                onOpen={() => setOpen(study)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="container-page">
          {studies.map((study) => (
            <CoverCard
              key={study.image}
              study={study}
              onOpen={() => setOpen(study)}
            />
          ))}
        </div>
      )}

      {open ? <SheetViewer study={open} onClose={close} /> : null}
    </>
  );
}

function CoverCard({
  study,
  onOpen,
}: {
  study: CaseStudy;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View the full ${study.title} ${study.kicker}`}
      className="group relative aspect-square w-[300px] shrink-0 overflow-hidden rounded-2xl border border-border-on-dark bg-night p-7 text-left transition-all hover:-translate-y-1 hover:border-signal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
    >
      {/* Faint concentric grid, echoing the sheet artwork */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-10 size-64 rounded-full border border-border-on-dark opacity-50"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-20 size-80 rounded-full border border-border-on-dark opacity-30"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_85%_10%,rgba(255,75,46,0.14),transparent_65%)]"
      />

      <span className="relative flex h-full flex-col">
        <span className="font-display text-[1.75rem] font-bold leading-[1.1] tracking-tight text-cream-on-dark">
          {study.title}
        </span>
        <span className="mt-1 font-display text-[1.05rem] font-bold text-signal">
          {study.kicker}
        </span>

        <span className="mt-auto flex items-end gap-4">
          <span className="shrink-0">
            <span className="block font-display text-[2.6rem] font-black leading-none tracking-tight text-cream-on-dark">
              {study.statValue}
            </span>
            <span className="mt-1 block font-mono text-[0.68rem] uppercase tracking-[0.18em] text-cream-on-dark-soft sm:text-[0.6rem]">
              {study.statDirection}
            </span>
          </span>
          <span className="border-l border-border-on-dark pl-4 font-mono text-[0.72rem] uppercase leading-snug tracking-[0.1em] text-cream-on-dark-soft sm:text-[0.64rem]">
            {study.statLabel}
          </span>
        </span>

        <span className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-cream-on-dark-soft transition-colors group-hover:text-signal sm:text-[0.62rem]">
          View full case study →
        </span>
      </span>
    </button>
  );
}

function SheetViewer({
  study,
  onClose,
}: {
  study: CaseStudy;
  onClose: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${study.title} ${study.kicker}`}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex justify-center overflow-y-auto bg-night/90 p-4 backdrop-blur-sm sm:p-8"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative my-auto w-full max-w-[760px]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close case study"
          className="sticky top-0 z-10 ml-auto flex size-10 items-center justify-center rounded-full border border-border-on-dark bg-night text-cream-on-dark transition-colors hover:border-signal hover:text-signal"
        >
          <X className="size-5" />
        </button>

        <Image
          src={study.image}
          alt={`${study.title} ${study.kicker} — ${study.metric}`}
          width={1400}
          height={1737}
          // Without this the default srcset picks a ~560px variant and
          // upscales it into a 760px frame, which reads soft.
          sizes="(max-width: 800px) 100vw, 760px"
          className="w-full rounded-2xl border border-border-on-dark"
          priority
        />

        <p className="mt-4 text-[0.9rem] leading-relaxed text-cream-on-dark-soft">
          {study.story}
        </p>
        <p className="mt-2 pb-4 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-cream-on-dark-soft/70">
          Results vary by account, audience, and industry — past performance
          doesn&rsquo;t guarantee future results.
        </p>
      </div>
    </div>
  );
}
