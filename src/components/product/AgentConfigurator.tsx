"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Building2, Languages, Mic, Target } from "lucide-react";
import VoiceWaveform from "@/components/product/VoiceWaveform";
import { cn } from "@/utils/cn";

interface Option {
  id: string;
  label: string;
}

const voices: Option[] = [
  { id: "calm", label: "Calm" },
  { id: "warm", label: "Warm" },
  { id: "direct", label: "Direct" },
];

const objectives: Option[] = [
  { id: "reception", label: "Reception" },
  { id: "booking", label: "Booking" },
  { id: "qualify", label: "Qualification" },
];

const industriesList: Option[] = [
  { id: "clinic", label: "Clinic" },
  { id: "property", label: "Property" },
  { id: "services", label: "Home services" },
];

const languages: Option[] = [
  { id: "en", label: "English" },
  { id: "es", label: "Spanish" },
  { id: "fr", label: "French" },
];

const businessName: Record<string, string> = {
  clinic: "Northside Clinic",
  property: "Harbour Property",
  services: "Bright Home Services",
};

const objectiveLine: Record<string, string> = {
  reception: "How can I help you today?",
  booking: "I can book you in — what day suits you best?",
  qualify: "Can I ask a couple of quick questions first?",
};

const greetingOpener: Record<string, string> = {
  calm: "Hello, you've reached",
  warm: "Hi there, thanks for calling",
  direct: "You've reached",
};

const localisedOpener: Record<string, Record<string, string>> = {
  es: { calm: "Hola, ha llamado a", warm: "Hola, gracias por llamar a", direct: "Ha llamado a" },
  fr: { calm: "Bonjour, vous êtes bien chez", warm: "Bonjour, merci d'appeler", direct: "Vous êtes bien chez" },
};

const localisedObjective: Record<string, Record<string, string>> = {
  es: {
    reception: "¿En qué puedo ayudarle hoy?",
    booking: "Puedo reservar su cita — ¿qué día le viene bien?",
    qualify: "¿Puedo hacerle un par de preguntas rápidas?",
  },
  fr: {
    reception: "Comment puis-je vous aider aujourd'hui ?",
    booking: "Je peux vous réserver un créneau — quel jour vous convient ?",
    qualify: "Puis-je vous poser quelques questions rapides ?",
  },
};

export default function AgentConfigurator() {
  const [voice, setVoice] = useState("warm");
  const [objective, setObjective] = useState("booking");
  const [industry, setIndustry] = useState("clinic");
  const [language, setLanguage] = useState("en");
  const reduceMotion = useReducedMotion();

  const opener = language === "en" ? greetingOpener[voice] : localisedOpener[language][voice];
  const closer = language === "en" ? objectiveLine[objective] : localisedObjective[language][objective];
  const greeting = `${opener} ${businessName[industry]}. ${closer}`;

  const groups = [
    { key: "voice", label: "Tone", icon: Mic, options: voices, value: voice, set: setVoice },
    { key: "objective", label: "Objective", icon: Target, options: objectives, value: objective, set: setObjective },
    { key: "industry", label: "Business", icon: Building2, options: industriesList, value: industry, set: setIndustry },
    { key: "language", label: "Language", icon: Languages, options: languages, value: language, set: setLanguage },
  ] as const;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
      <div className="flex flex-col gap-5">
        {groups.map((group) => {
          const Icon = group.icon;
          return (
            <fieldset key={group.key} className="border-0 p-0">
              <legend className="mb-2.5 flex items-center gap-2 text-xs font-bold tracking-[0.12em] text-text-tertiary uppercase">
                <Icon size={14} aria-hidden="true" />
                {group.label}
              </legend>
              <div className="flex flex-wrap gap-2">
                {group.options.map((option) => {
                  const selected = group.value === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => group.set(option.id)}
                      className={cn(
                        "min-h-11 rounded-xl border px-4 py-2 text-sm font-medium transition-colors",
                        selected
                          ? "border-brand-primary bg-brand-soft font-semibold text-brand-ink"
                          : "border-border-primary text-text-secondary hover:border-border-secondary hover:text-text-primary"
                      )}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          );
        })}
      </div>

      <div className="rounded-3xl border border-border-secondary bg-background-elevated p-6 shadow-[var(--shadow-elevated)]">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-xs font-bold tracking-[0.12em] text-text-tertiary uppercase">Greeting preview</p>
          <span className="rounded-full border border-border-primary bg-surface-sunken px-2.5 py-1 text-[10px] font-semibold text-text-tertiary">
            Preview only
          </span>
        </div>

        <VoiceWaveform active state="speaking" className="mb-5" />

        <motion.p
          key={greeting}
          initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl rounded-bl-sm bg-brand-soft px-5 py-4 text-base leading-relaxed text-text-primary"
          aria-live="polite"
        >
          {greeting}
        </motion.p>

        <dl className="mt-5 grid grid-cols-2 gap-2.5 text-xs">
          {[
            ["Tone", voices.find((v) => v.id === voice)?.label],
            ["Objective", objectives.find((o) => o.id === objective)?.label],
            ["Business", industriesList.find((i) => i.id === industry)?.label],
            ["Language", languages.find((l) => l.id === language)?.label],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-border-primary bg-surface-sunken px-3.5 py-2.5">
              <dt className="text-[10px] font-semibold tracking-wide text-text-tertiary uppercase">{label}</dt>
              <dd className="mt-0.5 font-semibold text-text-primary">{value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-4 text-xs leading-relaxed text-text-tertiary">
          Language availability depends on the selected voice and AI configuration. Contact the team for the current
          supported-language list.
        </p>
      </div>
    </div>
  );
}
