"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { integrations } from "@/data/integrationData";
import type { IntegrationStatus } from "@/types";
import { cn } from "@/utils/cn";

const statusTone: Record<IntegrationStatus, string> = {
  Available: "border-success/30 bg-success/10 text-success",
  "API-ready": "border-brand-primary/30 bg-brand-soft text-brand-ink",
  Planned: "border-border-secondary bg-surface-sunken text-text-tertiary",
};

const categories = ["CRM", "Calendar", "Help desk", "Messaging", "Commerce", "Automation", "Developer"];

const inboundNodes = [
  { y: 40, label: "CRM" },
  { y: 90, label: "Calendar" },
  { y: 150, label: "Help desk" },
  { y: 200, label: "Messaging" },
];

const outboundNodes = [
  { y: 40, label: "Bookings" },
  { y: 90, label: "Records" },
  { y: 150, label: "Tickets" },
  { y: 200, label: "Webhooks" },
];

export default function IntegrationsSection() {
  const reduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const visible = activeCategory ? integrations.filter((i) => i.category === activeCategory) : integrations;

  return (
    <section id="integrations" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Connected workflows"
          index="06"
          heading="Connect calls to the tools your team already uses."
          supporting="Every call can read from and write back to the systems your team works in, so conversations end as records, bookings and follow-ups."
          align="center"
        />

        {/* Connection diagram — Ansova.ai at the centre, sources in, actions out */}
        <div className="mt-14 flex justify-center">
          <svg
            viewBox="0 0 720 240"
            className="h-auto w-full max-w-3xl"
            role="img"
            aria-label="Ansova.ai sits at the centre, reading from CRM, calendar, help desk and messaging tools, and writing back bookings, records, tickets and webhooks."
          >
            <defs>
              <linearGradient id="connLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--brand-primary)" stopOpacity="0.06" />
                <stop offset="50%" stopColor="var(--brand-primary)" stopOpacity="0.55" />
                <stop offset="100%" stopColor="var(--brand-primary)" stopOpacity="0.06" />
              </linearGradient>
            </defs>

            {inboundNodes.map((n, i) => (
              <g key={`path-${n.y}`}>
                <path
                  d={`M 150 ${n.y} C 250 ${n.y}, 280 120, 336 120`}
                  fill="none"
                  stroke="url(#connLine)"
                  strokeWidth="1.5"
                />
                <path
                  d={`M 384 120 C 440 120, 470 ${n.y}, 570 ${n.y}`}
                  fill="none"
                  stroke="url(#connLine)"
                  strokeWidth="1.5"
                />
                {!reduceMotion && (
                  <>
                    <circle r="3.5" fill="var(--brand-primary)">
                      <animateMotion
                        dur="3.2s"
                        repeatCount="indefinite"
                        begin={`${i * 0.5}s`}
                        path={`M 150 ${n.y} C 250 ${n.y}, 280 120, 336 120`}
                      />
                    </circle>
                    <circle r="3.5" fill="var(--accent-secondary)">
                      <animateMotion
                        dur="3.2s"
                        repeatCount="indefinite"
                        begin={`${1.6 + i * 0.5}s`}
                        path={`M 384 120 C 440 120, 470 ${n.y}, 570 ${n.y}`}
                      />
                    </circle>
                  </>
                )}
              </g>
            ))}

            {inboundNodes.map((n) => (
              <g key={`in-${n.label}`}>
                <rect
                  x="24"
                  y={n.y - 15}
                  width="126"
                  height="30"
                  rx="15"
                  fill="var(--background-elevated)"
                  stroke="var(--border-secondary)"
                />
                <text x="87" y={n.y + 4} textAnchor="middle" fill="var(--text-secondary)" fontSize="12">
                  {n.label}
                </text>
              </g>
            ))}

            {outboundNodes.map((n) => (
              <g key={`out-${n.label}`}>
                <rect
                  x="570"
                  y={n.y - 15}
                  width="126"
                  height="30"
                  rx="15"
                  fill="var(--background-elevated)"
                  stroke="var(--border-secondary)"
                />
                <text x="633" y={n.y + 4} textAnchor="middle" fill="var(--text-secondary)" fontSize="12">
                  {n.label}
                </text>
              </g>
            ))}

            <rect x="290" y="96" width="140" height="48" rx="24" fill="var(--brand-primary)" />
            <text x="360" y="126" textAnchor="middle" fill="var(--brand-contrast)" fontSize="15" fontWeight="600">
              Ansova.ai
            </text>
          </svg>
        </div>

        <div
          className="mt-12 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Filter integrations by category"
        >
          <button
            type="button"
            aria-pressed={activeCategory === null}
            onClick={() => setActiveCategory(null)}
            className={cn(
              "min-h-10 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === null
                ? "border-brand-primary bg-brand-soft font-semibold text-brand-ink"
                : "border-border-primary text-text-secondary hover:border-border-secondary"
            )}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={activeCategory === c}
              onClick={() => setActiveCategory(activeCategory === c ? null : c)}
              className={cn(
                "min-h-10 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                activeCategory === c
                  ? "border-brand-primary bg-brand-soft font-semibold text-brand-ink"
                  : "border-border-primary text-text-secondary hover:border-border-secondary"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {visible.map((integration, i) => (
            <motion.div
              key={integration.id}
              initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: Math.min(i, 8) * 0.03 }}
              className="card-hover flex flex-col gap-3 rounded-2xl border border-border-primary bg-background-elevated p-4 shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-sm font-semibold text-text-primary">{integration.name}</span>
                <span
                  className={cn(
                    "shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold",
                    statusTone[integration.status]
                  )}
                >
                  {integration.status}
                </span>
              </div>
              <span className="text-xs text-text-tertiary">{integration.category}</span>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-text-tertiary">
          Integration availability may change. Contact the Ansova.ai team for the current list.
        </p>
      </Container>
    </section>
  );
}
