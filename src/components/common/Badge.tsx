import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface BadgeProps {
  children: ReactNode;
  tone?: "brand" | "secondary" | "neutral" | "success" | "warning";
  className?: string;
}

const toneClasses: Record<NonNullable<BadgeProps["tone"]>, string> = {
  brand: "bg-brand-soft text-brand-ink border-brand-primary/30",
  secondary: "bg-accent-secondary-soft text-accent-secondary border-accent-secondary/25",
  neutral: "bg-surface-sunken text-text-secondary border-border-secondary",
  success: "bg-success/10 text-success border-success/25",
  warning: "bg-warning/10 text-warning border-warning/25",
};

export default function Badge({ children, tone = "brand", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
