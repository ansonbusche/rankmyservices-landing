"use client";

import { useEffect, useState } from "react";

export function useTypewriter(text: string, start: boolean, speed = 22) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (!start) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      const raf = requestAnimationFrame(() => setOutput(text));
      return () => cancelAnimationFrame(raf);
    }

    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setOutput(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, start, speed]);

  return output;
}
