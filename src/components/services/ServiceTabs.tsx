import Link from "next/link";
import { SERVICES } from "@/lib/servicesData";
import { cn } from "@/lib/utils";

const TAB_BASE =
  "shrink-0 rounded-full border px-4 py-2 font-mono text-[0.76rem] tracking-wide transition-colors";
const TAB_ACTIVE = "border-signal bg-signal text-white";
const TAB_IDLE =
  "border-transparent text-ink-soft hover:border-border-strong hover:text-ink";

// Category switcher for the services hub, matching the approved mockup's tab
// row. Each tab is a real link to its own route rather than in-page state, so
// every service stays independently rankable and shareable. Sticks below the
// fixed 72px navbar so it stays reachable while reading a long detail page.
export function ServiceTabs({ activeSlug }: { activeSlug?: string }) {
  return (
    <nav
      aria-label="Service categories"
      className="sticky top-[72px] z-40 border-y border-border bg-paper/95 backdrop-blur-md"
    >
      <div className="container-page flex gap-2 overflow-x-auto py-3">
        <Link
          href="/services"
          aria-current={activeSlug ? undefined : "page"}
          className={cn(TAB_BASE, activeSlug ? TAB_IDLE : TAB_ACTIVE)}
        >
          All Services
        </Link>
        {SERVICES.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            aria-current={activeSlug === service.slug ? "page" : undefined}
            className={cn(
              TAB_BASE,
              activeSlug === service.slug ? TAB_ACTIVE : TAB_IDLE
            )}
          >
            {service.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
