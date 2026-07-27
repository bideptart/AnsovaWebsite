"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/layout/Container";
import { pricingFaq } from "@/data/pricing-faq";

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <Container id="faq" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-[28px] sm:text-[32px]">Billing questions, answered</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-(--color-muted)">
          Everything you need to know about how Ansova.ai pricing works.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-2xl divide-y divide-(--color-border) rounded-(--radius-lg) border border-(--color-border) bg-(--color-page)">
        {pricingFaq.map((item, index) => {
          const isOpen = openIndex === index;
          const questionId = `${baseId}-q-${index}`;
          const panelId = `${baseId}-p-${index}`;

          return (
            <div key={item.question}>
              <h3>
                <button
                  type="button"
                  id={questionId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full min-h-[56px] items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-medium text-(--color-heading) transition-colors duration-150 hover:text-(--color-gold-deep)"
                >
                  {item.question}
                  <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className={`shrink-0 text-(--color-muted) transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={questionId}
                className={`grid overflow-hidden transition-[grid-template-rows] duration-200 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="min-h-0">
                  <p className="px-5 pb-5 text-[14.5px] leading-relaxed text-(--color-muted)">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
