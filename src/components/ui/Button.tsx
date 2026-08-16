"use client";

import { ArrowRight } from "lucide-react";
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[0.95rem] font-semibold tracking-tight transition-all duration-200 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal";

const variants = {
  primary:
    "bg-signal text-white shadow-[0_8px_24px_-8px_rgba(255,77,46,0.65)] hover:bg-signal-dim hover:shadow-[0_10px_30px_-8px_rgba(255,77,46,0.75)]",
  dark: "bg-night text-cream-on-dark hover:bg-night-soft",
  outline:
    "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  "outline-on-dark":
    "border border-border-on-dark text-cream-on-dark hover:border-cream-on-dark/60 hover:bg-white/5",
} as const;

type Variant = keyof typeof variants;

interface CommonProps {
  variant?: Variant;
  showArrow?: boolean;
  className?: string;
}

export function Button({
  variant = "primary",
  showArrow = true,
  className,
  children,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
      {showArrow && (
        <ArrowRight className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </button>
  );
}

export function LinkButton({
  variant = "primary",
  showArrow = true,
  className,
  children,
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {children}
      {showArrow && (
        <ArrowRight className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </a>
  );
}
