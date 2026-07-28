"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/common/SectionHeading";
import StepMockup from "@/components/product/StepMockup";
import { buildSteps } from "@/data/featureData";
import { cn } from "@/utils/cn";

export default function HowItWorksSection() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const activeStep = buildSteps[active];

  return (
    <section className="theme-dark relative overflow-hidden py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-faint [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />
      <div
        className="glow-amber pointer-events-none absolute top-[-25%] right-[-10%] h-[520px] w-[520px] rounded-full blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="How it works"
          index="02"
          heading="Build a working AI agent in four steps."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-14">
          <div className="flex flex-col gap-2" role="tablist" aria-label="Build steps">
            {buildSteps.map((step, i) => (
              <button
                key={step.id}
                role="tab"
                aria-selected={active === i}
                aria-controls={`step-panel-${step.id}`}
                id={`step-tab-${step.id}`}
                onClick={() => setActive(i)}
                className={cn(
                  "flex min-h-16 items-start gap-4 rounded-2xl border px-5 py-4 text-left transition-colors",
                  active === i
                    ? "border-brand-primary/40 bg-brand-primary/8"
                    : "border-border-primary hover:border-border-secondary"
                )}
              >
                <span
                  className={cn(
                    "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold",
                    active === i ? "bg-brand-primary text-brand-contrast" : "bg-surface-sunken text-text-secondary"
                  )}
                >
                  {step.index}
                </span>
                <span>
                  <span className="block text-base font-semibold text-text-primary">{step.title}</span>
                  <span className="mt-1 block text-sm text-text-secondary">{step.description}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                id={`step-panel-${activeStep.id}`}
                role="tabpanel"
                aria-labelledby={`step-tab-${activeStep.id}`}
                initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl border border-border-secondary bg-background-elevated/80 p-7 shadow-[var(--shadow-elevated)]"
              >
                <p className="mb-1 text-xs font-semibold tracking-wide text-brand-ink uppercase">
                  Step {activeStep.index} of {buildSteps.length}
                </p>
                <h3 className="mb-5 font-display text-2xl font-medium text-text-primary">{activeStep.title}</h3>

                <StepMockup stepId={activeStep.id} />

                <ul className="mt-6 flex flex-wrap gap-2 border-t border-border-primary pt-5">
                  {activeStep.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-1.5 rounded-full border border-border-primary px-3 py-1.5 text-xs font-medium text-text-secondary"
                    >
                      <Check size={12} className="shrink-0 text-brand-ink" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
