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
    name: "Starter",
    description:
      "For individuals and small teams launching their first AI voice agent.",
    monthlyPrice: 31,
    includedMinutes: 250,
    overageRate: 0.13,
    concurrentCalls: 2,
    aiAgents: 2,
    phoneNumbers: 1,
    integrations: "Core integrations",
    support: "Email support",
    features: [
      "2 AI voice agents",
      "250 included voice minutes",
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
    monthlyPrice: 93,
    includedMinutes: 800,
    overageRate: 0.12,
    concurrentCalls: 5,
    aiAgents: 10,
    phoneNumbers: 3,
    integrations: "Core + CRM integrations",
    support: "Priority support",
    features: [
      "10 AI voice agents",
      "800 included voice minutes",
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
    monthlyPrice: 316,
    includedMinutes: 3000,
    overageRate: 0.11,
    concurrentCalls: 15,
    aiAgents: "Unlimited",
    phoneNumbers: 10,
    integrations: "Advanced integrations & webhooks",
    support: "Dedicated success manager",
    features: [
      "Unlimited AI voice agents",
      "3,000 included voice minutes",
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

// The pricing grid, comparison table and usage estimator only ever list the
// fixed-price plans. Enterprise is volume-based and reached via "Contact
// sales" / "Talk to sales" CTAs instead of a listed tier.
export const listedPlans = pricingPlans.filter((p) => !p.customPricing);
export const enterprisePlan = pricingPlans.find((p) => p.customPricing)!;

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

// TODO(product): verify voice stack tiering and SLA availability are accurate.
export const comparisonRows: ComparisonRow[] = [
  {
    label: "Included minutes",
    values: { launch: "250 min", growth: "800 min", scale: "3,000 min" },
  },
  {
    label: "Effective rate",
    values: { launch: "$0.13/min", growth: "$0.12/min", scale: "$0.11/min" },
  },
  {
    label: "AI voice agents",
    values: { launch: "2", growth: "10", scale: "Unlimited" },
  },
  {
    label: "Voice stack",
    values: { launch: "Standard", growth: "Standard + premium", scale: "Realtime + premium" },
  },
  {
    label: "Call recording",
    values: { launch: "check", growth: "check", scale: "check" },
  },
  {
    label: "Real-time transcription",
    values: { launch: "check", growth: "check", scale: "check" },
  },
  {
    label: "Support",
    values: { launch: "Email", growth: "Priority", scale: "Dedicated success manager" },
  },
  {
    label: "SLA",
    values: { launch: "—", growth: "—", scale: "check" },
  },
];
