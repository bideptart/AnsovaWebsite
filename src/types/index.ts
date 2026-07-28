export type FAQCategory =
  | "General"
  | "AI Voice Agents"
  | "AI Receptionist"
  | "Outbound AI"
  | "Integrations"
  | "Pricing"
  | "Security"
  | "Account and Support";

export interface FAQItem {
  id: string;
  category: FAQCategory;
  question: string;
  answer: string;
  keywords: string[];
  /** Surfaces a "Popular" badge and enables the popular-only filter */
  popular?: boolean;
  relatedLink?: {
    label: string;
    href: string;
  };
}

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavDropdown {
  label: string;
  href: string;
  items: NavLink[];
}

export type NavEntry =
  | { type: "link"; link: NavLink }
  | { type: "dropdown"; dropdown: NavDropdown };

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface Capability {
  id: string;
  label: string;
  title: string;
  description: string;
}

export type IntegrationStatus = "Available" | "API-ready" | "Planned";

export interface Integration {
  id: string;
  name: string;
  category: string;
  status: IntegrationStatus;
}

export interface IndustryWorkflow {
  industry: string;
  icon: string;
  workflows: string[];
}

export type CallState =
  | "idle"
  | "connecting"
  | "listening"
  | "thinking"
  | "speaking"
  | "acting"
  | "completed";

export interface TranscriptLine {
  id: string;
  speaker: "caller" | "agent";
  text: string;
  atState: CallState;
}

export interface DemoStep {
  state: CallState;
  label: string;
  intent?: string;
  action?: string;
  sentiment?: "Positive" | "Neutral" | "Focused";
  knowledgeSource?: string;
  crmStatus?: string;
  appointmentStatus?: string;
  outcome?: string;
  transcript: TranscriptLine[];
}

export interface UseCaseTab {
  id: string;
  label: string;
  problem: string;
  workflow: string;
  result: string;
}

export interface BuildStep {
  id: string;
  index: number;
  title: string;
  description: string;
  items: string[];
}
