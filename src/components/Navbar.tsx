"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Radio, X } from "lucide-react";
import { BRAND_NAME, NAV_LINKS, PRIMARY_CTA_SHORT } from "@/lib/config";
import { CtaLink } from "@/components/ui/CtaLink";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "bg-paper/95 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="container-page flex h-[72px] items-center justify-between">
        <Link
          href="/"
          className={cn(
            "flex items-center gap-2.5 transition-colors",
            solid ? "text-ink" : "text-cream-on-dark"
          )}
        >
          <span className="flex size-8 items-center justify-center rounded-full bg-signal text-white">
            <Radio className="size-4" strokeWidth={2.5} />
          </span>
          <span className="font-display text-[1.05rem] font-bold tracking-tight">
            {BRAND_NAME}
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "whitespace-nowrap text-[0.92rem] font-medium transition-colors",
                solid
                  ? "text-ink-soft hover:text-ink"
                  : "text-cream-on-dark-soft hover:text-cream-on-dark"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <CtaLink
            event="hero_cta_clicked"
            variant="primary"
            className="px-5 py-2.5 text-[0.85rem]"
          >
            {PRIMARY_CTA_SHORT}
          </CtaLink>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "flex size-10 items-center justify-center rounded-full border lg:hidden",
            solid ? "border-border text-ink" : "border-border-on-dark text-cream-on-dark"
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-paper px-6 pb-8 pt-4 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[1.02rem] font-medium text-ink-soft hover:bg-paper-alt hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <CtaLink
            event="hero_cta_clicked"
            variant="primary"
            className="mt-4 w-full"
          >
            {PRIMARY_CTA_SHORT}
          </CtaLink>
        </div>
      )}
    </header>
  );
}
