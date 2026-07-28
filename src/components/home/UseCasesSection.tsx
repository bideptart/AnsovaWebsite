"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { useCases } from "@/data/featureData";
import { cn } from "@/utils/cn";

export default function UseCasesSection() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const activeCase = useCases[active];

  return (
    <section id="use-cases" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Use cases"
          index="09"
          heading="Built around the calls your team handles every day."
          align="center"
        />

        <div
          className="mt-12 flex gap-2 overflow-x-auto scrollbar-none pb-2"
          role="tablist"
          aria-label="Use cases"
        >
          {useCases.map((useCase, i) => (
            <button
              key={useCase.id}
              role="tab"
              aria-selected={active === i}
              aria-controls={`usecase-panel-${useCase.id}`}
              id={`usecase-tab-${useCase.id}`}
              onClick={() => setActive(i)}
              className={cn(
                "min-h-11 shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                active === i
                  ? "border-brand-primary bg-brand-primary/10 text-brand-ink"
                  : "border-border-primary text-text-secondary hover:border-border-secondary"
              )}
            >
              {useCase.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase.id}
            id={`usecase-panel-${activeCase.id}`}
            role="tabpanel"
            aria-labelledby={`usecase-tab-${activeCase.id}`}
            initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            <UseCaseCard label="Business problem" text={activeCase.problem} tone="neutral" />
            <UseCaseCard label="Ansova.ai workflow" text={activeCase.workflow} tone="brand" />
            <UseCaseCard label="Operational result" text={activeCase.result} tone="success" />
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}

function UseCaseCard({
  label,
  text,
  tone,
}: {
  label: string;
  text: string;
  tone: "neutral" | "brand" | "success";
}) {
  const toneClass = {
    neutral: "border-border-primary bg-surface-sunken",
    brand: "border-brand-primary/25 bg-brand-primary/6",
    success: "border-success/25 bg-success/6",
  }[tone];

  return (
    <div className={cn("rounded-2xl border p-5", toneClass)}>
      <p className="mb-2 text-[11px] font-semibold tracking-wide text-text-tertiary uppercase">{label}</p>
      <p className="text-sm leading-relaxed text-text-primary">{text}</p>
    </div>
  );
}
