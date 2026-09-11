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

// Cards sit on the dark band of /services (this component's only usage), so
// they are styled on-dark rather than taking a light/dark prop.
export function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {SERVICES.map((service, i) => {
        const Icon = ICONS[service.icon];
        return (
          <Reveal key={service.slug} delay={Math.min(i, 3) * 60}>
            <Link
              href={`/services/${service.slug}`}
              className="group flex h-full flex-col gap-4 rounded-2xl border border-border-on-dark bg-white/[0.03] p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-signal hover:bg-white/[0.05]"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-signal-soft-dark text-signal">
                <Icon className="size-5" strokeWidth={2} />
              </span>
              <h3 className="font-display text-[1.35rem] font-bold leading-tight text-cream-on-dark">
                {service.name} <span className="text-signal">{service.accent}</span>
              </h3>
              <p className="text-[0.94rem] leading-relaxed text-cream-on-dark-soft">{service.shortDescription}</p>
              <ChipRow chips={service.chips} />
              <span className="mt-auto flex w-fit items-center gap-2 rounded-full border border-signal bg-signal-soft-dark px-4 py-2.5 font-display text-[0.92rem] font-bold tracking-tight text-signal transition-colors duration-200 group-hover:bg-signal group-hover:text-white">
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
