"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarCheck, Headphones, PhoneCall, PlayCircle, Zap } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import VoiceAgentDemo from "@/components/product/VoiceAgentDemo";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

/** Outcome pills sit in their own row under the panel — overlaying them on the
 *  card covered the agent name and clipped at the viewport edge. */
const outcomes = [
  { icon: PhoneCall, label: "Answered in 1 ring", tone: "brand" },
  { icon: CalendarCheck, label: "Appointment booked", tone: "success" },
  { icon: Headphones, label: "Transferred to a person", tone: "blue" },
] as const;

const chipTone: Record<string, string> = {
  success: "border-success/35 bg-success/10 text-success",
  brand: "border-brand-primary/40 bg-brand-soft text-brand-ink",
  blue: "border-accent-secondary/35 bg-accent-secondary-soft text-accent-secondary",
};

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const v = (delay: number) => (reduceMotion ? { initial: { opacity: 1 }, animate: { opacity: 1 } } : fadeUp(delay));

  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* Ambient background: grid, warm glow, cool counterweight */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid-faint [mask-image:radial-gradient(ellipse_70%_60%_at_60%_10%,black,transparent)]"
        aria-hidden="true"
      />
      <div
        className="glow-amber pointer-events-none absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full blur-2xl"
        aria-hidden="true"
      />
      <div
        className="glow-blue pointer-events-none absolute bottom-[-20%] left-[-12%] h-[420px] w-[420px] rounded-full blur-2xl"
        aria-hidden="true"
      />

      <Container className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div>
          <motion.div {...v(0)} className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border-secondary bg-background-elevated py-1.5 pr-4 pl-1.5 shadow-[var(--shadow-soft)]">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary px-2.5 py-1 text-[10px] font-bold tracking-wide text-brand-contrast uppercase">
              <Zap size={11} aria-hidden="true" />
              New
            </span>
            <span className="text-xs font-medium text-text-secondary">AI voice agents for business calls</span>
          </motion.div>

          <motion.h1
            {...v(0.08)}
            className="text-balance font-display text-[44px] leading-[1.02] font-medium tracking-[-0.03em] text-text-primary sm:text-[58px] lg:text-[72px]"
          >
            Every business call deserves an <span className="text-gradient-brand">intelligent</span> answer.
          </motion.h1>

          <motion.p {...v(0.16)} className="mt-7 max-w-xl text-lg leading-relaxed text-text-secondary">
            Ansova.ai helps businesses build voice agents that answer calls, qualify leads, support customers, book
            appointments and complete connected workflows.
          </motion.p>

          <motion.div {...v(0.24)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/#final-cta" variant="primary" size="lg" className="w-full sm:w-auto">
              Build your AI agent
              <ArrowRight size={18} />
            </Button>
            <Button href="/#configure" variant="secondary" size="lg" className="w-full sm:w-auto">
              Try the interactive demo
              <PlayCircle size={18} />
            </Button>
          </motion.div>

          <motion.div {...v(0.32)} className="mt-10 border-t border-border-primary pt-6">
            <p className="text-sm text-text-tertiary">
              Connect your business knowledge, customer workflows and communication tools.
            </p>
          </motion.div>
        </div>

        {/* Product surface */}
        <motion.div {...v(0.2)} className="relative">
          <div
            className="glow-amber pointer-events-none absolute inset-0 -z-10 scale-110 blur-3xl"
            aria-hidden="true"
          />
          <VoiceAgentDemo />

          <ul className="mt-5 flex flex-wrap justify-center gap-2">
            {outcomes.map((o) => {
              const Icon = o.icon;
              return (
                <li
                  key={o.label}
                  className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold ${chipTone[o.tone]}`}
                >
                  <Icon size={12} aria-hidden="true" />
                  {o.label}
                </li>
              );
            })}
          </ul>
        </motion.div>
      </Container>
    </section>
  );
}
