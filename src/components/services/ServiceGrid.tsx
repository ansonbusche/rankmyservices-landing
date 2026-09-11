import Link from "next/link";
import { ArrowRight, Megaphone, Search, Sparkles, Target } from "lucide-react";
import { SERVICES, type ServiceIcon } from "@/lib/servicesData";
import { Reveal } from "@/components/ui/Reveal";
import { ChipRow } from "@/components/services/BrandIcons";

const ICONS: Record<ServiceIcon, typeof Sparkles> = {
  geo: Sparkles,
  seo: Search,
  gads: Target,
  mads: Megaphone,
};

export function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {SERVICES.map((service, i) => {
        const Icon = ICONS[service.icon];
        return (
          <Reveal key={service.slug} delay={Math.min(i, 3) * 60}>
            <Link
              href={`/services/${service.slug}`}
              className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-signal hover:shadow-[0_16px_32px_-20px_rgba(20,18,15,0.25)]"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-signal-soft text-signal-dim">
                <Icon className="size-5" strokeWidth={2} />
              </span>
              <h3 className="font-display text-[1.35rem] font-bold leading-tight text-ink">
                {service.name} <span className="text-signal">{service.accent}</span>
              </h3>
              <p className="text-[0.94rem] leading-relaxed text-ink-soft">{service.shortDescription}</p>
              <ChipRow chips={service.chips} />
              <span className="mt-auto flex items-center gap-1.5 pt-1 text-[0.9rem] font-semibold text-signal-dim">
                Explore {service.label}
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
