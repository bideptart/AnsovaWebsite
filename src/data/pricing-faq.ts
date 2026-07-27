/**
 * TEMPORARY FAQ CONTENT — REPLACE BEFORE LAUNCH
 * ------------------------------------------------------------------
 * No verified Ansova.ai billing, refund or contract policy existed in
 * the repository, so the answers below are written to be directionally
 * correct for a minutes-based usage product but are NOT confirmed
 * policy. Legal/finance should review every answer before this ships.
 * ------------------------------------------------------------------
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const pricingFaq: FaqItem[] = [
  {
    question: "How is AI voice usage calculated?",
    // TODO(billing): confirm rounding behavior (per-second vs per-minute).
    answer:
      "Usage is measured in call minutes for every AI voice agent conversation. Minutes included with your plan are drawn down first, and any usage beyond that is billed at your plan's overage rate.",
  },
  {
    question: "What happens when included minutes run out?",
    answer:
      "Your AI voice agents keep working. Additional usage is billed at your plan's per-minute overage rate, shown on each plan card and in the usage calculator above.",
  },
  {
    question: "Can I change my plan later?",
    // TODO(billing): confirm proration policy for upgrades/downgrades.
    answer:
      "Yes. You can move between Starter, Growth and Scale as your call volume changes, and move to a custom Enterprise agreement at any time.",
  },
  {
    question: "Are phone numbers included?",
    answer:
      "Each plan includes a set number of phone numbers, shown on the plan card and in the comparison table. Enterprise plans support custom numbering needs.",
  },
  {
    question: "Is enterprise pricing available?",
    answer:
      "Yes. Enterprise plans are custom-quoted based on call volume, number of AI agents, integrations and support requirements. Contact sales to discuss your deployment.",
  },
  {
    question: "How does annual billing work?",
    // TODO(billing): confirm exact annual discount and invoicing cadence.
    answer:
      "Annual billing is charged once per year at a reduced effective monthly rate compared to paying monthly. You can toggle between monthly and annual pricing above to compare the total cost.",
  },
];
