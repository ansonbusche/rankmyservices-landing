"use client";

import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      const raf = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(raf);
    }

    const checkNow = () => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) setInView(true);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);

    // IntersectionObserver callbacks are throttled while a tab is
    // backgrounded/prerendered, so re-check manually once it becomes visible
    // rather than leaving content stuck invisible.
    const onVisibility = () => {
      if (document.visibilityState === "visible") checkNow();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [threshold]);

  return { ref, inView };
}
