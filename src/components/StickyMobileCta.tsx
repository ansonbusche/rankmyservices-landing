"use client";

import { useEffect, useState } from "react";
import { CtaLink } from "@/components/ui/CtaLink";
import { PRIMARY_CTA_SHORT } from "@/lib/config";
import { cn } from "@/lib/utils";

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        // z sits just above the LeadConnector chat widget (99999999). Its greeting
// bubble is position:fixed and was physically covering this button on
// phones, making the primary mobile CTA impossible to tap. The widget
// lives in a shadow root, so it cannot be restyled from here.
        "fixed inset-x-0 bottom-0 z-[100000000] border-t border-border bg-paper/95 px-4 py-3 backdrop-blur-md transition-transform duration-300 md:hidden",
        visible ? "translate-y-0" : "translate-y-full"
      )}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <CtaLink event="hero_cta_clicked" variant="primary" className="w-full">
        {PRIMARY_CTA_SHORT}
      </CtaLink>
    </div>
  );
}
