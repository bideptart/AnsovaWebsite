"use client";

import { motion, useReducedMotion } from "framer-motion";

const filters = ["Date", "Agent", "Outcome", "Sentiment", "Campaign"];

const calls = [
  {
    id: "call-1",
    summary: "Caller asked to reschedule a service appointment to later in the week.",
    intent: "Reschedule appointment",
    sentiment: "Positive",
    outcome: "Resolved",
    resolution: "Completed by AI",
    topics: ["Scheduling", "Availability"],
    objection: "None",
    followUp: "None required",
    stage: "Retention",
  },
  {
    id: "call-2",
    summary: "New lead asked about pricing tiers before requesting a callback.",
    intent: "Pricing enquiry",
    sentiment: "Neutral",
    outcome: "Escalated",
    resolution: "Transferred to sales",
    topics: ["Pricing", "Plan comparison"],
    objection: "Budget concerns",
    followUp: "Sales call scheduled",
    stage: "Qualification",
  },
  {
    id: "call-3",
    summary: "Customer reported a delayed delivery and requested a status update.",
    intent: "Order status",
    sentiment: "Focused",
    outcome: "Resolved",
    resolution: "Completed by AI",
    topics: ["Delivery", "Order tracking"],
    objection: "None",
    followUp: "Confirmation SMS sent",
    stage: "Support",
  },
];

const sentimentTone: Record<string, string> = {
  Positive: "text-success",
  Neutral: "text-text-tertiary",
  Focused: "text-warning",
};

export default function AnalyticsMockup() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="w-full rounded-3xl border border-border-secondary bg-background-elevated/80 p-5 shadow-[var(--shadow-elevated)] sm:p-6">
      <div className="mb-5 flex flex-wrap items-center gap-2" role="group" aria-label="Call filters">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className="min-h-9 rounded-full border border-border-secondary px-3.5 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-brand-primary hover:text-brand-ink"
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {calls.map((call, i) => (
          <motion.div
            key={call.id}
            initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-2xl border border-border-primary bg-background-primary/60 p-4"
          >
            <p className="mb-3 text-sm leading-snug text-text-primary">{call.summary}</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs sm:grid-cols-3">
              <Field label="Intent" value={call.intent} />
              <Field label="Sentiment" value={call.sentiment} valueClassName={sentimentTone[call.sentiment]} />
              <Field label="Outcome" value={call.outcome} />
              <Field label="Resolution" value={call.resolution} />
              <Field label="Objection" value={call.objection} />
              <Field label="Follow-up" value={call.followUp} />
              <Field label="Conversion stage" value={call.stage} />
              <Field label="Topics" value={call.topics.join(", ")} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Field({ label, value, valueClassName }: { label: string; value: string; valueClassName?: string }) {
  return (
    <div>
      <p className="text-[10px] font-semibold tracking-wide text-text-tertiary uppercase">{label}</p>
      <p className={`mt-0.5 font-medium text-text-primary ${valueClassName ?? ""}`}>{value}</p>
    </div>
  );
}
