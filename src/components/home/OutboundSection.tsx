"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Info, PhoneOutgoing } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/ui/Button";
import { outboundCapabilities } from "@/data/featureData";

export default function OutboundSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="outbound" className="scroll-mt-24 bg-background-secondary py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="order-2 rounded-3xl border border-border-secondary bg-background-elevated/80 p-6 shadow-[var(--shadow-elevated)] lg:order-1"
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-secondary-soft text-accent-secondary">
                  <PhoneOutgoing size={16} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-text-primary">Appointment reminder campaign</p>
                  <p className="text-xs text-text-tertiary">312 of 480 calls placed</p>
                </div>
              </div>
              <span className="rounded-full border border-success/25 bg-success/10 px-2.5 py-1 text-[10px] font-semibold text-success">
                Active
              </span>
            </div>

            <div className="mb-5 h-2 w-full overflow-hidden rounded-full bg-surface-sunken">
              <div className="h-full w-[65%] rounded-full bg-accent-secondary" />
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {[
                { label: "Completed", value: "248" },
                { label: "No answer", value: "44" },
                { label: "Escalated to human", value: "12" },
                { label: "Retry queue", value: "8" },
              ].map((row) => (
                <div key={row.label} className="rounded-xl border border-border-primary bg-surface-sunken px-4 py-3">
                  <p className="text-[10px] font-semibold tracking-wide text-text-tertiary uppercase">{row.label}</p>
                  <p className="mt-1 text-lg font-semibold text-text-primary">{row.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-2.5 text-xs">
              <div className="flex items-center justify-between rounded-xl border border-border-primary bg-surface-sunken px-4 py-2.5">
                <span className="text-text-tertiary">Calling hours</span>
                <span className="font-semibold text-text-primary">9:00 AM – 6:00 PM local time</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-border-primary bg-surface-sunken px-4 py-2.5">
                <span className="text-text-tertiary">Suppression list</span>
                <span className="font-semibold text-text-primary">Enabled — 3 numbers excluded</span>
              </div>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Outbound AI"
              index="05"
              heading="Reach customers when the conversation matters."
              align="left"
            />
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {outboundCapabilities.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-border-primary bg-surface-sunken px-4 py-3 text-sm font-medium text-text-secondary"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-warning/25 bg-warning/8 px-4 py-3">
              <Info size={16} className="mt-0.5 shrink-0 text-warning" aria-hidden="true" />
              <p className="text-xs leading-relaxed text-text-secondary">
                Outbound calling must follow customer consent requirements and applicable regulations.
              </p>
            </div>

            <Button href="/#features" variant="secondary" size="md" className="mt-6">
              Explore outbound AI
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
