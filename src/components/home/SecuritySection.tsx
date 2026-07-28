"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  FileClock,
  KeyRound,
  Lock,
  ScrollText,
  ShieldCheck,
  SlidersHorizontal,
  UserCog,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/common/SectionHeading";

interface Tile {
  label: string;
  detail: string;
  icon: LucideIcon;
  /** Wide tiles anchor the grid so it doesn't read as ten identical boxes */
  wide?: boolean;
}

const tiles: Tile[] = [
  {
    label: "Role-based access",
    detail: "Scope who can listen to calls, read transcripts or change agent behaviour.",
    icon: UserCog,
    wide: true,
  },
  { label: "Encryption", detail: "Data encrypted in transit and at rest.", icon: Lock },
  { label: "Audit trails", detail: "A record of who changed what, and when.", icon: ScrollText },
  {
    label: "Configurable retention",
    detail: "Set how long conversation data is kept to match your policy.",
    icon: FileClock,
    wide: true,
  },
  { label: "Secure integrations", detail: "Scoped, revocable tool permissions.", icon: Workflow },
  { label: "API authentication", detail: "Keyed access for every request.", icon: KeyRound },
  { label: "Conversation guardrails", detail: "Boundaries on what an agent may say or do.", icon: ShieldCheck },
  { label: "Human escalation", detail: "Route sensitive calls to a person.", icon: Users },
  { label: "Workspace controls", detail: "Separate environments per team.", icon: SlidersHorizontal },
  { label: "Usage monitoring", detail: "Visibility into call and API volume.", icon: Activity },
];

export default function SecuritySection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="theme-dark relative overflow-hidden py-20 sm:py-28">
      <div
        className="glow-blue pointer-events-none absolute bottom-[-25%] left-[-10%] h-[520px] w-[520px] rounded-full blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Security and control"
          index="08"
          heading="Built for conversations your business depends on."
          supporting="Designed to support enterprise security and compliance requirements."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((tile, i) => {
            const Icon = tile.icon;
            return (
              <motion.div
                key={tile.label}
                initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: Math.min(i, 6) * 0.05 }}
                className={`card-hover flex flex-col rounded-2xl border border-border-primary bg-surface-sunken p-5 ${
                  tile.wide ? "sm:col-span-2" : ""
                }`}
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand-primary">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <h3 className="font-display text-base font-medium text-text-primary">{tile.label}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">{tile.detail}</p>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-text-tertiary">
          Specific certifications should be confirmed directly with the Ansova.ai team.
        </p>
      </Container>
    </section>
  );
}
