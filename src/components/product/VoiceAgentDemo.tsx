"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Pause, PhoneForwarded, Play, RotateCcw, Volume2, VolumeX } from "lucide-react";
import CallStatus from "@/components/product/CallStatus";
import VoiceWaveform from "@/components/product/VoiceWaveform";
import LiveTranscript from "@/components/product/LiveTranscript";
import { demoAgentName, demoCallerName, demoSteps, STEP_DURATION_MS } from "@/data/demoConversationData";
import { cn } from "@/utils/cn";

function formatTimer(seconds: number): string {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

export default function VoiceAgentDemo() {
  const [stepIndex, setStepIndex] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const reduceMotion = useReducedMotion();
  const stepIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timerIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!playing) return;
    stepIntervalRef.current = setInterval(() => {
      setStepIndex((prev) => {
        const next = prev + 1;
        if (next >= demoSteps.length - 1) {
          setPlaying(false);
          return demoSteps.length - 1;
        }
        return next;
      });
    }, STEP_DURATION_MS);
    return () => {
      if (stepIntervalRef.current) clearInterval(stepIntervalRef.current);
    };
  }, [playing]);

  useEffect(() => {
    if (!playing) return;
    timerIntervalRef.current = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [playing]);

  const handleStart = () => {
    if (stepIndex >= demoSteps.length - 1) {
      setStepIndex(0);
      setElapsed(0);
    } else if (stepIndex < 0) {
      setStepIndex(0);
    }
    setPlaying(true);
  };

  const handleRestart = () => {
    setPlaying(false);
    setStepIndex(-1);
    setElapsed(0);
  };

  const currentStep = stepIndex >= 0 ? demoSteps[stepIndex] : null;
  const state = currentStep?.state ?? "idle";
  const isActive = stepIndex >= 0;
  const progress = isActive ? ((stepIndex + 1) / demoSteps.length) * 100 : 0;

  return (
    <div className="theme-dark relative overflow-hidden rounded-[26px] border border-border-secondary shadow-[0_28px_70px_-24px_rgba(26,26,46,0.55)]">
      {/* Warm wash so the dark surface doesn't read as flat black */}
      <div
        className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-brand-primary/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-accent-secondary/15 blur-3xl"
        aria-hidden="true"
      />

      {/* Title bar */}
      <div className="relative flex items-center justify-between border-b border-border-primary px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            {!reduceMotion && isActive && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-primary opacity-70" />
            )}
            <span
              className={cn(
                "relative inline-flex h-2.5 w-2.5 rounded-full",
                isActive ? "bg-brand-primary" : "bg-text-tertiary"
              )}
            />
          </span>
          <span className="text-[11px] font-bold tracking-[0.14em] text-text-secondary uppercase">
            Interactive simulation
          </span>
        </div>
        <span className="rounded-full border border-border-primary px-2.5 py-1 text-[10px] font-semibold text-text-tertiary">
          Fictional data
        </span>
      </div>

      {/* Progress rail */}
      <div className="relative h-0.5 w-full bg-surface-sunken">
        <motion.div
          className="h-full bg-brand-primary"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      <div className="relative p-5 sm:p-6">
        {/* Caller row */}
        <div className="mb-5 flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-primary font-display text-base font-bold text-brand-contrast">
              A
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold text-text-primary">{demoAgentName}</span>
              <span className="block truncate text-xs text-text-tertiary">with {demoCallerName}</span>
            </span>
          </div>
          <CallStatus state={state} timer={formatTimer(elapsed)} />
        </div>

        <VoiceWaveform active={isActive && !muted} state={state} className="mb-5 h-20" />

        {/* Transcript */}
        <div className="mb-5 rounded-2xl border border-border-primary bg-surface-sunken p-4">
          {isActive ? (
            <LiveTranscript
              lines={currentStep?.transcript ?? []}
              agentName={demoAgentName}
              callerName={demoCallerName}
            />
          ) : (
            <div className="flex min-h-[168px] flex-col items-center justify-center gap-3 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft">
                <Play size={18} className="ml-0.5 text-brand-primary" aria-hidden="true" />
              </span>
              <p className="text-sm font-semibold text-text-primary">Press start to run a sample call</p>
              <p className="max-w-[30ch] text-xs leading-relaxed text-text-tertiary">
                Watch the agent detect intent, check a calendar and reschedule an appointment.
              </p>
            </div>
          )}
        </div>

        {/* Signals */}
        <motion.div
          key={stepIndex}
          initial={reduceMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3"
        >
          <InfoTile label="Intent" value={currentStep?.intent ?? "—"} accent />
          <InfoTile label="Sentiment" value={currentStep?.sentiment ?? "—"} />
          <InfoTile label="Action" value={currentStep?.action ?? "—"} />
          <InfoTile label="Knowledge" value={currentStep?.knowledgeSource ?? "—"} />
          <InfoTile label="CRM" value={currentStep?.crmStatus ?? "—"} />
          <InfoTile label="Appointment" value={currentStep?.appointmentStatus ?? "—"} />
        </motion.div>

        {currentStep?.outcome && (
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 flex items-center gap-2.5 rounded-2xl border border-success/35 bg-success/12 px-4 py-3"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-success" aria-hidden="true" />
            <p className="text-sm font-semibold text-success">{currentStep.outcome}</p>
          </motion.div>
        )}

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={playing ? () => setPlaying(false) : handleStart}
            className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-brand-primary px-4 py-2 text-xs font-bold text-brand-contrast transition-colors hover:bg-brand-strong"
          >
            {playing ? <Pause size={14} /> : <Play size={14} />}
            {playing ? "Pause" : stepIndex >= demoSteps.length - 1 ? "Replay" : "Start"}
          </button>
          <GhostButton onClick={handleRestart} icon={<RotateCcw size={14} />} label="Restart" />
          <GhostButton
            onClick={() => setMuted((m) => !m)}
            icon={muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            label={muted ? "Unmute" : "Mute"}
          />
          <GhostButton onClick={() => {}} icon={<PhoneForwarded size={14} />} label="Transfer" className="ml-auto" />
        </div>
      </div>
    </div>
  );
}

function InfoTile({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  const isEmpty = value === "—";
  return (
    <div
      className={cn(
        "rounded-xl border px-3 py-2.5 transition-colors",
        accent && !isEmpty ? "border-brand-primary/40 bg-brand-soft" : "border-border-primary bg-surface-sunken"
      )}
    >
      <p className="mb-1 text-[9px] font-bold tracking-[0.12em] text-text-tertiary uppercase">{label}</p>
      <p className={cn("truncate text-xs font-semibold", isEmpty ? "text-text-tertiary" : "text-text-primary")}>
        {value}
      </p>
    </div>
  );
}

function GhostButton({
  onClick,
  icon,
  label,
  className,
}: {
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex min-h-10 items-center gap-1.5 rounded-full border border-border-secondary px-3.5 py-2 text-xs font-semibold text-text-secondary transition-colors hover:border-brand-primary hover:text-brand-primary",
        className
      )}
    >
      {icon}
      {label}
    </button>
  );
}
