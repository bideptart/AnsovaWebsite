"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarClock } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="final-cta" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="theme-dark relative overflow-hidden rounded-[32px] border border-border-secondary px-6 py-16 text-center sm:px-16 sm:py-20"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-grid-faint [mask-image:radial-gradient(ellipse_70%_70%_at_50%_20%,black,transparent)]"
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance font-display text-[32px] leading-[1.1] font-semibold text-text-primary sm:text-[44px]">
              Build an AI agent around your business.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Connect your knowledge, phone workflows and business tools to create an agent that listens, understands
              and takes action.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/faq" variant="primary" size="lg" className="w-full sm:w-auto">
                Start building
                <ArrowRight size={18} />
              </Button>
              <Button href="/faq" variant="secondary" size="lg" className="w-full sm:w-auto">
                Book a demo
                <CalendarClock size={18} />
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
