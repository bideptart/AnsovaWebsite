"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, ChevronDown, Flame, Link2, ThumbsDown, ThumbsUp } from "lucide-react";
import type { FAQItem } from "@/types";
import { highlightMatch } from "@/utils/highlight";
import { cn } from "@/utils/cn";

interface FAQAccordionProps {
  items: FAQItem[];
  searchQuery: string;
  openIds: Set<string>;
  onToggle: (id: string) => void;
}

type Vote = "up" | "down";

export default function FAQAccordion({ items, searchQuery, openIds, onToggle }: FAQAccordionProps) {
  const reduceMotion = useReducedMotion();
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [votes, setVotes] = useState<Record<string, Vote>>({});

  useEffect(() => {
    if (!copiedId) return;
    const t = setTimeout(() => setCopiedId(null), 1800);
    return () => clearTimeout(t);
  }, [copiedId]);

  const copyLink = async (id: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(id);
    } catch {
      window.location.hash = id;
    }
  };

  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        const vote = votes[item.id];

        return (
          <li
            key={item.id}
            id={item.id}
            className={cn(
              "group relative scroll-mt-28 overflow-hidden rounded-2xl border bg-background-elevated transition-all duration-300",
              isOpen
                ? "border-brand-primary/45 shadow-[var(--shadow-elevated)]"
                : "border-border-primary shadow-[var(--shadow-soft)] hover:border-brand-primary/35"
            )}
          >
            <span
              className={cn(
                "absolute top-0 bottom-0 left-0 w-1 bg-brand-primary transition-opacity duration-300",
                isOpen ? "opacity-100" : "opacity-0"
              )}
              aria-hidden="true"
            />

            <h3 className="m-0">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${item.id}`}
                id={`faq-trigger-${item.id}`}
                onClick={() => onToggle(item.id)}
                className="flex min-h-16 w-full items-start justify-between gap-4 px-5 py-4 text-left sm:px-6"
              >
                <span className="min-w-0">
                  <span className="mb-1.5 flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-semibold tracking-wide text-brand-ink uppercase">
                      {item.category}
                    </span>
                    {item.popular && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-brand-primary/35 bg-brand-soft px-2 py-0.5 text-[10px] font-bold text-brand-ink">
                        <Flame size={10} aria-hidden="true" />
                        Popular
                      </span>
                    )}
                  </span>
                  <span className="block text-sm font-semibold text-text-primary sm:text-base">
                    {highlightMatch(item.question, searchQuery)}
                  </span>
                </span>
                <span
                  className={cn(
                    "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-200",
                    isOpen
                      ? "rotate-180 border-brand-primary bg-brand-primary text-brand-contrast"
                      : "border-border-secondary text-text-tertiary group-hover:border-brand-primary/50"
                  )}
                  aria-hidden="true"
                >
                  <ChevronDown size={16} />
                </span>
              </button>
            </h3>

            {isOpen && (
              <motion.div
                id={`faq-panel-${item.id}`}
                role="region"
                aria-labelledby={`faq-trigger-${item.id}`}
                initial={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="px-5 pb-5 sm:px-6">
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {highlightMatch(item.answer, searchQuery)}
                  </p>

                  {item.relatedLink && (
                    <a
                      href={item.relatedLink.href}
                      className="mt-3 inline-block text-sm font-semibold text-brand-ink hover:underline"
                    >
                      {item.relatedLink.label} →
                    </a>
                  )}

                  <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-border-primary pt-4">
                    {vote ? (
                      <p className="text-xs font-medium text-success">
                        {vote === "up" ? "Thanks for the feedback." : "Thanks — we'll work on this answer."}
                      </p>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-text-tertiary">Was this helpful?</span>
                        <button
                          type="button"
                          aria-label="Yes, this was helpful"
                          onClick={() => setVotes((v) => ({ ...v, [item.id]: "up" }))}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-border-secondary text-text-tertiary transition-colors hover:border-success hover:text-success"
                        >
                          <ThumbsUp size={13} aria-hidden="true" />
                        </button>
                        <button
                          type="button"
                          aria-label="No, this was not helpful"
                          onClick={() => setVotes((v) => ({ ...v, [item.id]: "down" }))}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-border-secondary text-text-tertiary transition-colors hover:border-danger hover:text-danger"
                        >
                          <ThumbsDown size={13} aria-hidden="true" />
                        </button>
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={() => copyLink(item.id)}
                      className="ml-auto inline-flex min-h-9 items-center gap-1.5 rounded-full border border-border-primary px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-brand-primary hover:text-brand-ink"
                    >
                      {copiedId === item.id ? (
                        <>
                          <Check size={13} aria-hidden="true" />
                          Link copied
                        </>
                      ) : (
                        <>
                          <Link2 size={13} aria-hidden="true" />
                          Copy link
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
