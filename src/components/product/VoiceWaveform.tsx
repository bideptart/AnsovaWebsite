"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";
import type { CallState } from "@/types";

interface VoiceWaveformProps {
  active: boolean;
  state: CallState;
  className?: string;
}

// Symmetrical envelope so the waveform reads as a voice, not a random bar chart
const BAR_HEIGHTS = [
  14, 22, 34, 26, 44, 58, 38, 66, 48, 74, 52, 80, 56, 74, 46, 64, 36, 54, 28, 42, 22, 32, 16,
];

export default function VoiceWaveform({ active, state, className }: VoiceWaveformProps) {
  const reduceMotion = useReducedMotion();
  const isMoving = state === "speaking" || state === "listening";
  const barColor = state === "listening" ? "bg-accent-secondary" : "bg-brand-primary";

  return (
    <div
      className={cn("flex items-center justify-center gap-[3px] sm:gap-1", className)}
      role="img"
      aria-label={active ? `Voice waveform, ${state}` : "Voice waveform, idle"}
    >
      {BAR_HEIGHTS.map((height, i) => (
        <motion.span
          key={i}
          className={cn("w-[3px] rounded-full sm:w-1", barColor, !active && "opacity-25")}
          style={{ height: `${height}%` }}
          animate={
            !reduceMotion && active && isMoving
              ? { scaleY: [0.35, 1, 0.55, 0.9, 0.35], opacity: [0.55, 1, 0.75, 1, 0.55] }
              : { scaleY: active ? 0.55 : 0.3 }
          }
          transition={
            !reduceMotion && active && isMoving
              ? { duration: 1 + (i % 5) * 0.14, repeat: Infinity, ease: "easeInOut", delay: i * 0.035 }
              : { duration: 0.3 }
          }
        />
      ))}
    </div>
  );
}
