"use client";

import { LinkButton } from "@/components/ui/Button";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function CtaLink({
  children,
  event,
  variant = "primary",
  className,
  href = "#book",
}: {
  children: React.ReactNode;
  event: AnalyticsEvent;
  variant?: "primary" | "outline" | "dark" | "outline-on-dark";
  className?: string;
  href?: string;
}) {
  return (
    <LinkButton
      href={href}
      variant={variant}
      className={cn(className)}
      onClick={() => trackEvent(event)}
    >
      {children}
    </LinkButton>
  );
}
