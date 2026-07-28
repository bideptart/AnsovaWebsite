"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, BrainCircuit, PhoneCall, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { platformCapabilities } from "@/data/featureData";

const icons: Record<string, LucideIcon> = {
  answer: PhoneCall,
  understand: BrainCircuit,
  act: Zap,
  improve: Activity,
};

export default function PlatformOverview() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="features" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div className="bg-dots pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" aria-hidden="true" />

      <Container className="relative">
        <SectionHeading
          eyebrow="One intelligent communication layer"
          index="01"
          heading="From every conversation to the next business action."
          supporting="Ansova.ai combines voice intelligence, business knowledge and connected workflows in one platform."
          align="center"
        />

        <div className="relative mt-16">
          {/* Connecting rail behind the four stages */}
          <div
            className="absolute top-[34px] right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-transparent via-brand-primary/45 to-transparent lg:block"
            aria-hidden="true"
          />

          <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {platformCapabilities.map((cap, i) => {
              const Icon = icons[cap.id];
              return (
                <motion.li
                  key={cap.id}
                  initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.12 }}
                  className="group relative flex flex-col items-center text-center"
                >
                  <span className="relative z-10 flex h-[68px] w-[68px] items-center justify-center rounded-2xl border border-border-secondary bg-background-elevated shadow-[var(--shadow-soft)] transition-colors duration-300 group-hover:border-brand-primary/60">
                    <Icon size={24} className="text-brand-ink" aria-hidden="true" />
                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary font-display text-[11px] font-bold text-brand-contrast">
                      {cap.label}
                    </span>
                  </span>

                  <h3 className="mt-6 font-display text-xl font-medium text-text-primary">{cap.title}</h3>
                  <p className="mt-2.5 max-w-[26ch] text-sm leading-relaxed text-text-secondary">{cap.description}</p>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
