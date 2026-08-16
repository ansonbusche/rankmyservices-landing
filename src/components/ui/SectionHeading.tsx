import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  title,
  description,
  align = "left",
  dark = false,
  className,
}: {
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Reveal>
        <h2
          className={cn(
            "font-display text-[2.15rem] leading-[1.05] font-bold tracking-tight sm:text-[2.85rem]",
            dark ? "text-cream-on-dark" : "text-ink"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={80}>
          <p
            className={cn(
              "mt-5 text-[1.05rem] leading-relaxed",
              dark ? "text-cream-on-dark-soft" : "text-ink-soft"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
