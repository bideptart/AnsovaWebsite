/**
 * TEMPORARY PRICING DATA — REPLACE BEFORE LAUNCH
 * ------------------------------------------------------------------
 * No verified Ansova.ai pricing, plan limits or policy content existed
 * in the repository at the time this page was built, so every number
 * below is placeholder data for layout and interaction purposes only.
 *
 * TODO(product/pricing): replace monthlyPrice, includedMinutes,
 * overageRate, concurrentCalls, aiAgents, phoneNumbers, integrations,
 * support and features on each plan with real, approved values.
 * TODO(product/pricing): confirm ANNUAL_DISCOUNT_PERCENT with finance —
 * annual prices are derived from it, not stored independently, so the
 * whole site updates from one source of truth once this is confirmed.
 * ------------------------------------------------------------------
 */

export type BillingCycle = "monthly" | "annual";

export interface PricingPlan {
  id: "launch" | "growth" | "scale" | "enterprise";
  name: string;
  description: string;
  monthlyPrice: number | null;
  includedMinutes: number | null;
  overageRate: number | null;
  concurrentCalls: number | string | null;
  aiAgents: number | string | null;
  phoneNumbers: number | string | null;
  integrations: string;
  support: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted: boolean;
  customPricing: boolean;
}

// TODO(product/pricing): confirm this is a real, approved annual discount.
export const ANNUAL_DISCOUNT_PERCENT = 20;

export const pricingPlans: PricingPlan[] = [
  {
    id: "launch",
    name: "Launch",
    description:
      "For individuals and small teams launching their first AI voice agent.",
    monthlyPrice: 49,
    includedMinutes: 300,
    overageRate: 0.15,
    concurrentCalls: 2,
    aiAgents: 1,
    phoneNumbers: 1,
    integrations: "Core integrations",
    support: "Email support",
    features: [
      "1 AI voice agent",
      "300 included voice minutes",
      "Inbound call handling",
      "Conversation transcripts",
      "Standard voice quality",
      "Email support",
    ],
    ctaLabel: "Get started",
    ctaHref: "/contact",
    highlighted: false,
    customPricing: false,
  },
  {
    id: "growth",
    name: "Growth",
    description:
      "For growing teams handling a consistent volume of customer conversations.",
    monthlyPrice: 149,
    includedMinutes: 1200,
    overageRate: 0.12,
    concurrentCalls: 5,
    aiAgents: 3,
    phoneNumbers: 3,
    integrations: "Core + CRM integrations",
    support: "Priority support",
    features: [
      "3 AI voice agents",
      "1,200 included voice minutes",
      "Inbound & outbound calling",
      "Conversation transcripts & analytics",
      "Premium voice quality",
      "CRM integrations",
      "Priority support",
    ],
    ctaLabel: "Choose Growth",
    ctaHref: "/contact",
    highlighted: true,
    customPricing: false,
  },
  {
    id: "scale",
    name: "Scale",
    description:
      "For larger teams that need more capacity, integrations and control.",
    monthlyPrice: 399,
    includedMinutes: 4000,
    overageRate: 0.09,
    concurrentCalls: 15,
    aiAgents: 10,
    phoneNumbers: 10,
    integrations: "Advanced integrations & webhooks",
    support: "Dedicated success manager",
    features: [
      "10 AI voice agents",
      "4,000 included voice minutes",
      "Inbound & outbound calling",
      "Advanced analytics & webhooks",
      "Premium voice quality",
      "Advanced integrations",
      "Dedicated success manager",
    ],
    ctaLabel: "Choose Scale",
    ctaHref: "/contact",
    highlighted: false,
    customPricing: false,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For high-volume and custom AI voice deployments.",
    monthlyPrice: null,
    includedMinutes: null,
    overageRate: null,
    concurrentCalls: "Custom",
    aiAgents: "Unlimited",
    phoneNumbers: "Custom",
    integrations: "Custom integrations",
    support: "Dedicated success manager + SLA",
    features: [
      "Unlimited AI voice agents",
      "Custom volume commitments",
      "Custom integrations & SLAs",
      "Advanced security review",
      "Dedicated success manager",
    ],
    ctaLabel: "Contact sales",
    ctaHref: "/contact",
    highlighted: false,
    customPricing: true,
  },
];

export function getMonthlyEquivalent(
  plan: PricingPlan,
  cycle: BillingCycle
): number | null {
  if (plan.monthlyPrice === null) return null;
  if (cycle === "monthly") return plan.monthlyPrice;
  return Math.round(plan.monthlyPrice * (1 - ANNUAL_DISCOUNT_PERCENT / 100) * 100) / 100;
}

export function getBillTotal(
  plan: PricingPlan,
  cycle: BillingCycle
): number | null {
  if (plan.monthlyPrice === null) return null;
  if (cycle === "monthly") return plan.monthlyPrice;
  return Math.round(getMonthlyEquivalent(plan, "annual")! * 12);
}

// Capabilities shared by every plan, shown in the "Included in every plan" section.
// TODO(product): verify each capability is actually true of the current platform.
export const includedEverywhere = [
  { label: "Human-like AI voices", icon: "AudioLines" as const },
  { label: "Call routing", icon: "Route" as const },
  { label: "Conversation transcripts", icon: "FileText" as const },
  { label: "Knowledge-base connection", icon: "BookOpen" as const },
  { label: "Usage analytics", icon: "BarChart3" as const },
  { label: "Webhooks & API access", icon: "Webhook" as const },
];

export interface ComparisonRow {
  label: string;
  values: Partial<Record<PricingPlan["id"], string>>;
}

export interface ComparisonCategory {
  category: string;
  rows: ComparisonRow[];
}

export const comparisonCategories: ComparisonCategory[] = [
  {
    category: "Voice usage",
    rows: [
      {
        label: "Included minutes",
        values: { launch: "300 min", growth: "1,200 min", scale: "4,000 min", enterprise: "Custom" },
      },
      {
        label: "Overage rate",
        values: { launch: "$0.15/min", growth: "$0.12/min", scale: "$0.09/min", enterprise: "Custom" },
      },
    ],
  },
  {
    category: "AI agents & calling",
    rows: [
      {
        label: "AI voice agents",
        values: { launch: "1", growth: "3", scale: "10", enterprise: "Unlimited" },
      },
      {
        label: "Concurrent calls",
        values: { launch: "2", growth: "5", scale: "15", enterprise: "Custom" },
      },
      {
        label: "Outbound calling",
        values: { launch: "—", growth: "check", scale: "check", enterprise: "check" },
      },
    ],
  },
  {
    category: "Phone numbers",
    rows: [
      {
        label: "Included phone numbers",
        values: { launch: "1", growth: "3", scale: "10", enterprise: "Custom" },
      },
    ],
  },
  {
    category: "Integrations & automation",
    rows: [
      {
        label: "CRM integrations",
        values: { launch: "—", growth: "check", scale: "check", enterprise: "check" },
      },
      {
        label: "Webhooks & API",
        values: { launch: "check", growth: "check", scale: "check", enterprise: "check" },
      },
    ],
  },
  {
    category: "Analytics",
    rows: [
      {
        label: "Usage analytics",
        values: { launch: "check", growth: "check", scale: "check", enterprise: "check" },
      },
      {
        label: "Advanced reporting",
        values: { launch: "—", growth: "—", scale: "check", enterprise: "check" },
      },
    ],
  },
  {
    category: "Support",
    rows: [
      {
        label: "Support level",
        values: { launch: "Email", growth: "Priority", scale: "Dedicated success manager", enterprise: "Dedicated + SLA" },
      },
    ],
  },
];
