"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";
import type { TranscriptLine } from "@/types";

interface LiveTranscriptProps {
  lines: TranscriptLine[];
  agentName: string;
  callerName: string;
}

export default function LiveTranscript({ lines, agentName, callerName }: LiveTranscriptProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex min-h-[168px] flex-col justify-end gap-2.5" aria-live="polite">
      <AnimatePresence initial={false}>
        {lines.map((line) => (
          <motion.div
            key={line.id}
            initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={cn("flex", line.speaker === "agent" ? "justify-end" : "justify-start")}
          >
            <div
              className={cn(
                "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-snug",
                line.speaker === "agent"
                  ? "rounded-br-sm bg-brand-primary/15 text-text-primary"
                  : "rounded-bl-sm bg-surface-muted text-text-primary"
              )}
            >
              <span className="mb-0.5 block text-[10px] font-semibold tracking-wide text-text-tertiary uppercase">
                {line.speaker === "agent" ? agentName : callerName}
              </span>
              {line.text}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      {lines.length === 0 && (
        <p className="text-sm text-text-tertiary">Transcript will appear here once the call begins.</p>
      )}
    </div>
  );
}
