"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/ui/Button";
import { cn } from "@/utils/cn";

const previewFaqs = [
  {
    id: "preview-1",
    question: "What is an AI voice agent?",
    answer:
      "An AI voice agent is a conversational system that answers or places phone calls, understands what the caller needs and responds naturally in real time.",
  },
  {
    id: "preview-2",
    question: "What can Ansova.ai do?",
    answer:
      "Ansova.ai builds voice agents that answer calls, qualify leads, support customers, book appointments and connect those conversations to your business tools.",
  },
  {
    id: "preview-3",
    question: "Can Ansova.ai answer inbound calls?",
    answer:
      "Yes. Ansova.ai agents can answer inbound calls around the clock, handling common questions and routing more complex requests appropriately.",
  },
  {
    id: "preview-4",
    question: "Can Ansova.ai make outbound calls?",
    answer:
      "Yes. Ansova.ai can place outbound calls for use cases such as reminders, follow-ups and lead callbacks, within calling hours and rules you define.",
  },
  {
    id: "preview-5",
    question: "Can calls be transferred to a person?",
    answer:
      "Yes. Calls can be transferred to a human team member automatically based on the rules you configure, or whenever a caller requests it.",
  },
  {
    id: "preview-6",
    question: "Can Ansova.ai connect to our CRM?",
    answer:
      "Yes. Ansova.ai can connect to common CRM platforms so call outcomes and notes sync directly to your customer records.",
  },
];

export default function FAQPreview() {
  const [openId, setOpenId] = useState<string | null>("preview-1");
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-background-secondary py-20 sm:py-28">
      <Container className="[--container-width:820px]">
        <SectionHeading heading="Answers to common questions." align="center" />

        <div className="mt-12 flex flex-col gap-3">
          {previewFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="overflow-hidden rounded-2xl border border-border-primary">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`preview-panel-${faq.id}`}
                    id={`preview-trigger-${faq.id}`}
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm font-semibold text-text-primary sm:text-base">{faq.question}</span>
                    <Plus
                      size={18}
                      className={cn("shrink-0 text-brand-ink transition-transform duration-200", isOpen && "rotate-45")}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {isOpen && (
                  <motion.div
                    id={`preview-panel-${faq.id}`}
                    role="region"
                    aria-labelledby={`preview-trigger-${faq.id}`}
                    initial={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-text-secondary">{faq.answer}</p>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/faq" variant="secondary" size="md">
            View all FAQs
            <ArrowRight size={16} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
