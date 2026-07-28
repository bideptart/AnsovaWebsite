"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, X } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/common/SectionHeading";
import VoiceWaveform from "@/components/product/VoiceWaveform";
import { naturalConversationFeatures, traditionalAutomation, ansovaConversation } from "@/data/featureData";

export default function ConversationSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-background-secondary py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading heading="Responsive conversations, not rigid phone menus." align="left" />
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {naturalConversationFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-sm font-medium text-text-secondary">
                  <Check size={16} className="shrink-0 text-brand-ink" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-10 overflow-hidden rounded-2xl border border-border-primary">
              <div className="grid grid-cols-2 divide-x divide-border-primary">
                <div className="p-5">
                  <p className="mb-3 text-xs font-semibold tracking-wide text-text-tertiary uppercase">
                    Traditional automation
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {traditionalAutomation.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-text-tertiary">
                        <X size={14} className="shrink-0 text-danger" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-brand-primary/5 p-5">
                  <p className="mb-3 text-xs font-semibold tracking-wide text-brand-ink uppercase">Ansova.ai</p>
                  <ul className="flex flex-col gap-2.5">
                    {ansovaConversation.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm font-medium text-text-primary">
                        <Check size={14} className="shrink-0 text-brand-ink" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-border-secondary bg-background-elevated/80 p-6 shadow-[var(--shadow-elevated)]"
          >
            <p className="mb-4 text-xs font-semibold tracking-wide text-text-tertiary uppercase">Live context preview</p>
            <VoiceWaveform active state="listening" className="mb-5" />
            <div className="flex flex-col gap-2.5">
              <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-surface-muted px-4 py-2.5 text-sm text-text-primary">
                <span className="mb-0.5 block text-[10px] font-semibold tracking-wide text-text-tertiary uppercase">
                  Caller
                </span>
                Actually, can we push that to next week instead?
              </div>
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-brand-primary/15 px-4 py-2.5 text-sm text-text-primary">
                <span className="mb-0.5 block text-[10px] font-semibold tracking-wide text-text-tertiary uppercase">
                  Agent
                </span>
                No problem — I&apos;ll keep the same day. What time works next week?
              </div>
            </div>
            <div className="mt-5 flex items-center gap-2 rounded-xl border border-border-primary bg-surface-sunken px-3.5 py-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary" aria-hidden="true" />
              <p className="text-xs text-text-tertiary">Context retained: original reschedule request, new date pending</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
