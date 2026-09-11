"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BRAND_NAME, NAV_LINKS, PRIMARY_CTA_SHORT } from "@/lib/config";
import { SERVICES } from "@/lib/servicesData";
import { CtaLink } from "@/components/ui/CtaLink";
import { cn } from "@/lib/utils";

// `hub` swaps the site links for the service category pills and pins the bar
// dark, matching the approved services-hub mockup. The pills only fit from lg
// up; below that ServiceTabs renders them as a scrollable strip under the bar.
export function Navbar({
  hub = false,
  activeSlug,
}: {
  hub?: boolean;
  activeSlug?: string;
} = {}) {
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
  // Hub pages keep a permanently dark bar, so content-aware theming is off.
  const onDark = hub || !solid;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        hub
          ? "bg-night/95 backdrop-blur-md border-b border-border-on-dark"
          : solid
            ? "bg-paper/95 backdrop-blur-md border-b border-border"
            : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="container-page flex h-[72px] items-center justify-between">
        <Link
          href="/"
          className={cn(
            "flex items-center gap-2.5 transition-colors",
            onDark ? "text-cream-on-dark" : "text-ink"
          )}
        >
          <span className="flex size-7 items-center justify-center rounded-full bg-signal text-[0.7rem] font-black text-ink">
            R
          </span>
          <span className="font-display text-[1.05rem] font-extrabold tracking-tight">
            {BRAND_NAME}
          </span>
        </Link>

        {hub ? (
          <div className="hidden items-center gap-2 lg:flex">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                aria-current={activeSlug === service.slug ? "page" : undefined}
                className={cn(
                  "whitespace-nowrap rounded-full border px-4 py-2 font-display text-[0.92rem] font-bold tracking-tight transition-colors",
                  activeSlug === service.slug
                    ? "border-signal bg-signal text-white"
                    : "border-transparent text-cream-on-dark-soft hover:border-border-on-dark hover:text-cream-on-dark"
                )}
              >
                {service.label}
              </Link>
            ))}
          </div>
        ) : (
          <div className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "whitespace-nowrap text-[0.92rem] font-medium transition-colors",
                  onDark
                    ? "text-cream-on-dark-soft hover:text-cream-on-dark"
                    : "text-ink-soft hover:text-ink"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

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
            onDark ? "border-border-on-dark text-cream-on-dark" : "border-border text-ink"
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-paper px-6 pb-8 pt-4 md:hidden">
          <div className="flex flex-col gap-1">
            {hub && (
              <Link
                href="/services"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[1.02rem] font-medium text-ink-soft hover:bg-paper-alt hover:text-ink"
              >
                All Services
              </Link>
            )}
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
