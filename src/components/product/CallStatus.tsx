"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import type { CallState } from "@/types";

interface CallStatusProps {
  state: CallState;
  timer: string;
}

const stateMeta: Record<CallState, { label: string; dot: string }> = {
  idle: { label: "Idle", dot: "bg-text-tertiary" },
  connecting: { label: "Connecting", dot: "bg-warning" },
  listening: { label: "Listening", dot: "bg-accent-secondary" },
  thinking: { label: "Thinking", dot: "bg-warning" },
  speaking: { label: "Speaking", dot: "bg-brand-primary" },
  acting: { label: "Performing action", dot: "bg-accent-secondary" },
  completed: { label: "Completed", dot: "bg-success" },
};

export default function CallStatus({ state, timer }: CallStatusProps) {
  const meta = stateMeta[state];

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 rounded-full border border-border-secondary bg-surface-sunken px-3 py-1.5">
        <motion.span
          className={cn("h-2 w-2 rounded-full", meta.dot)}
          animate={state !== "idle" ? { opacity: [1, 0.4, 1] } : undefined}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-xs font-semibold text-text-primary">{meta.label}</span>
      </div>
      <span className="font-mono text-xs text-text-tertiary" aria-label="Call duration">
        {timer}
      </span>
    </div>
  );
}
