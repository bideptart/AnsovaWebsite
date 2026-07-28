"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, PhoneIncoming } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/ui/Button";
import { inboundCapabilities } from "@/data/featureData";

export default function InboundSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="inbound" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Inbound AI"
              index="04"
              heading="Answer every call with the right next step."
              supporting="Handle customer calls immediately, even when your team is busy or unavailable."
            />
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {inboundCapabilities.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-border-primary bg-surface-sunken px-4 py-3 text-sm font-medium text-text-secondary"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/#features" variant="secondary" size="md" className="mt-8">
              Explore inbound AI
              <ArrowRight size={16} />
            </Button>
          </div>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-border-secondary bg-background-elevated/80 p-6 shadow-[var(--shadow-elevated)]"
          >
            <div className="mb-5 flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-primary/12 text-brand-ink">
                <PhoneIncoming size={16} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-text-primary">Incoming call</p>
                <p className="text-xs text-text-tertiary">Main business line</p>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              {[
                { label: "Caller identified", value: "Returning customer" },
                { label: "Intent detected", value: "Book appointment" },
                { label: "Department", value: "Service scheduling" },
                { label: "Routing decision", value: "Handled by agent — no transfer needed" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between rounded-xl border border-border-primary bg-surface-sunken px-4 py-3"
                >
                  <span className="text-xs text-text-tertiary">{row.label}</span>
                  <span className="text-xs font-semibold text-text-primary">{row.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
