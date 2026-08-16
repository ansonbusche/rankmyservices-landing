"use client";

import { type ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref as never}
      className={cn(className, inView ? "opacity-100" : "opacity-0")}
      style={{
        animation: inView ? `fade-up 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms forwards` : undefined,
      }}
    >
      {children}
    </Tag>
  );
}
