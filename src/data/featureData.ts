import type { Capability, BuildStep, UseCaseTab } from "@/types";

export const capabilityStrip: string[] = [
  "Available 24/7",
  "Inbound and outbound calls",
  "Human handoff",
  "Multilingual workflows",
  "Connected business actions",
  "Conversation analytics",
];

export const platformCapabilities: Capability[] = [
  {
    id: "answer",
    label: "01",
    title: "Answer",
    description: "Handle inbound and outbound calls through responsive AI conversations.",
  },
  {
    id: "understand",
    label: "02",
    title: "Understand",
    description: "Identify intent, context, sentiment and urgency while the conversation happens.",
  },
  {
    id: "act",
    label: "03",
    title: "Act",
    description: "Book appointments, update systems, route calls and trigger workflows.",
  },
  {
    id: "improve",
    label: "04",
    title: "Improve",
    description: "Review call summaries, outcomes and conversation trends.",
  },
];

export const naturalConversationFeatures: string[] = [
  "Natural turn-taking",
  "Interruption handling",
  "Context retention",
  "Clarifying questions",
  "Tone adaptation",
  "Multilingual switching",
  "Human escalation",
];

export const traditionalAutomation: string[] = ["Keypad menus", "Repeated prompts", "Limited context"];
export const ansovaConversation: string[] = ["Natural dialogue", "Context-aware responses", "Connected actions"];

export const buildSteps: BuildStep[] = [
  {
    id: "design",
    index: 1,
    title: "Design your agent",
    description: "Configure how your agent sounds and behaves before it takes a single call.",
    items: ["Name", "Voice", "Greeting", "Tone", "Language", "Objective"],
  },
  {
    id: "connect-knowledge",
    index: 2,
    title: "Connect knowledge",
    description: "Ground every answer in the information your business already has.",
    items: ["Website", "Documents", "FAQs", "Product information", "Help articles", "Internal knowledge"],
  },
  {
    id: "connect-tools",
    index: 3,
    title: "Connect tools",
    description: "Let the agent take real action inside the systems your team already uses.",
    items: ["CRM", "Calendar", "Help desk", "API", "Webhooks", "Internal systems"],
  },
  {
    id: "test-launch",
    index: 4,
    title: "Test and launch",
    description: "Validate behaviour before go-live, then keep improving after launch.",
    items: ["Test calls", "Call review", "Routing rules", "Human handoff", "Analytics", "Optimisation"],
  },
];

export const inboundCapabilities: string[] = [
  "Welcome callers",
  "Identify intent",
  "Answer common questions",
  "Qualify leads",
  "Book appointments",
  "Route departments",
  "Transfer urgent calls",
  "Capture messages",
  "Update customer records",
];

export const outboundCapabilities: string[] = [
  "Instant lead callbacks",
  "Appointment reminders",
  "Customer follow-ups",
  "Delivery confirmation",
  "Feedback collection",
  "Lead qualification",
  "Renewal outreach",
  "Re-engagement",
];

export const securityFeatures: string[] = [
  "Role-based access",
  "Secure integrations",
  "Encryption",
  "Audit trails",
  "Configurable retention",
  "Conversation guardrails",
  "Human escalation",
  "Workspace controls",
  "API authentication",
  "Usage monitoring",
];

export const useCases: UseCaseTab[] = [
  {
    id: "sales",
    label: "Sales",
    problem: "New leads wait too long for a callback.",
    workflow: "Ansova.ai contacts the lead, asks qualification questions and schedules the next step.",
    result: "Qualified leads move forward without waiting for a manual response.",
  },
  {
    id: "support",
    label: "Customer Support",
    problem: "Common questions tie up the support queue.",
    workflow: "Ansova.ai answers routine questions from connected knowledge and escalates the rest.",
    result: "Simple requests resolve immediately; complex ones reach a person with full context.",
  },
  {
    id: "booking",
    label: "Appointment Booking",
    problem: "Scheduling back-and-forth slows down the front desk.",
    workflow: "Ansova.ai checks availability, confirms a time and updates the calendar directly.",
    result: "Appointments get booked and rescheduled without a manual phone tag loop.",
  },
  {
    id: "reception",
    label: "AI Reception",
    problem: "Calls go unanswered when the front desk is busy.",
    workflow: "Ansova.ai greets every caller, understands their reason for calling and routes accordingly.",
    result: "Callers get an immediate, relevant response instead of a missed call.",
  },
  {
    id: "qualification",
    label: "Lead Qualification",
    problem: "Sales reps spend time on leads that aren't ready to buy.",
    workflow: "Ansova.ai asks qualifying questions and passes only relevant leads to the team.",
    result: "Reps focus on conversations that are more likely to move forward.",
  },
  {
    id: "operations",
    label: "Operations",
    problem: "Routine operational calls pull staff away from other work.",
    workflow: "Ansova.ai handles status checks, confirmations and updates automatically.",
    result: "Operational calls get handled consistently without manual intervention.",
  },
  {
    id: "after-hours",
    label: "After-hours Coverage",
    problem: "Calls outside business hours go straight to voicemail.",
    workflow: "Ansova.ai answers after-hours calls, captures details and flags anything urgent.",
    result: "Businesses stay responsive even when the team is offline.",
  },
];
