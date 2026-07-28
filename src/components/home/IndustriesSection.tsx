"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Building2,
  Car,
  ConciergeBell,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Truck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Badge from "@/components/common/Badge";
import { industries, exampleWorkflows } from "@/data/industryData";

const iconMap: Record<string, LucideIcon> = {
  "heart-pulse": HeartPulse,
  "building-2": Building2,
  wrench: Wrench,
  landmark: Landmark,
  "shopping-bag": ShoppingBag,
  truck: Truck,
  car: Car,
  "concierge-bell": ConciergeBell,
};

export default function IndustriesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="industries" className="scroll-mt-24 bg-background-secondary py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          index="10"
          heading="AI voice workflows for call-driven businesses."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, i) => {
            const Icon = iconMap[industry.icon];
            return (
              <motion.div
                key={industry.industry}
                initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
                className="card-hover rounded-2xl border border-border-primary bg-background-elevated p-5 shadow-[var(--shadow-soft)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/10 text-brand-ink">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-text-primary">{industry.industry}</h3>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {industry.workflows.map((workflow) => (
                    <li key={workflow} className="text-xs text-text-secondary">
                      {workflow}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20">
          <SectionHeading heading="A closer look at three example scenarios." align="center" />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {exampleWorkflows.map((workflow, i) => (
              <motion.div
                key={workflow.id}
                initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="card-hover rounded-2xl border border-border-primary bg-background-elevated p-6 shadow-[var(--shadow-soft)]"
              >
                <Badge tone="neutral">{workflow.label}</Badge>
                <h3 className="mt-4 font-display text-lg font-semibold text-text-primary">{workflow.title}</h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {workflow.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-primary" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
