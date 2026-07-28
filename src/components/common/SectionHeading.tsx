"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  /** Two-digit section marker, e.g. "02" — renders beside the eyebrow */
  index?: string;
  heading: ReactNode;
  supporting?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({ eyebrow, index, heading, supporting, align = "left", className }: SectionHeadingProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}
    >
      {eyebrow && (
        <div className={cn("mb-5 flex items-center gap-3", align === "center" && "justify-center")}>
          {index && (
            <span className="font-mono text-[11px] font-semibold text-brand-ink tabular-nums">{index}</span>
          )}
          <span className="h-px w-8 bg-brand-primary/50" aria-hidden="true" />
          <span className="text-xs font-bold tracking-[0.16em] text-brand-ink uppercase">{eyebrow}</span>
        </div>
      )}
      <h2 className="text-balance font-display text-[32px] leading-[1.08] font-medium tracking-[-0.025em] text-text-primary sm:text-[42px] lg:text-[50px]">
        {heading}
      </h2>
      {supporting && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed text-text-secondary sm:text-lg",
            align === "center" && "mx-auto max-w-2xl"
          )}
        >
          {supporting}
        </p>
      )}
    </motion.div>
  );
}
