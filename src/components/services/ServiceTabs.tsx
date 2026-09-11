import Link from "next/link";
import { SERVICES } from "@/lib/servicesData";
import { cn } from "@/lib/utils";

const TAB_BASE =
  "shrink-0 rounded-full border px-3.5 py-2 font-mono text-[0.76rem] tracking-[0.04em] transition-colors";
const TAB_ACTIVE = "border-signal bg-signal text-white";
const TAB_IDLE =
  "border-transparent text-cream-on-dark-soft hover:border-border-on-dark hover:text-cream-on-dark";

// Mobile fallback for the service pills that live inside the Navbar from lg up
// (see Navbar's `hub` mode). The full row will not fit in a 72px bar on a
// phone, so below lg it renders as a scrollable strip pinned under the bar.
//
// Each tab is a real link to its own route rather than in-page state, so every
// service stays independently rankable and shareable.
export function ServiceTabs({ activeSlug }: { activeSlug?: string }) {
  return (
    <nav
      aria-label="Service categories"
      className="sticky top-[72px] z-40 border-b border-border-on-dark bg-night/95 backdrop-blur-md lg:hidden"
    >
      <div className="no-scrollbar container-page flex gap-2 overflow-x-auto py-3">
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
