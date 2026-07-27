import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import {
  BillingCycle,
  PricingPlan,
  getMonthlyEquivalent,
} from "@/data/pricing-data";

function formatPrice(value: number) {
  return value % 1 === 0 ? `$${value}` : `$${value.toFixed(2)}`;
}

function usageLine(plan: PricingPlan) {
  if (plan.includedMinutes === null) return "Custom usage allowance";
  const parts = [`${plan.includedMinutes.toLocaleString()} min`];
  if (plan.overageRate !== null) parts.push(`$${plan.overageRate.toFixed(2)}/min`);
  if (plan.aiAgents !== null) {
    parts.push(`${plan.aiAgents} agent${plan.aiAgents === 1 ? "" : "s"}`);
  }
  return parts.join(" · ");
}

function CardShell({
  plan,
  children,
}: {
  plan: PricingPlan;
  children: React.ReactNode;
}) {
  if (!plan.highlighted) {
    return (
      <div className="relative flex h-full flex-col rounded-(--radius-lg) border border-(--color-border) bg-(--color-page) p-7 shadow-(--shadow-sm) transition-colors duration-200 hover:border-(--color-gold-deep)">
        {children}
      </div>
    );
  }

  return (
    <div className="card-glow-pulse relative flex h-full flex-col rounded-(--radius-lg) border-2 border-(--color-gold-deep) bg-(--color-page) p-7">
      <span className="absolute -top-3 right-6 z-10 rounded-(--radius-pill) bg-(--color-gold-deep) px-3 py-1 text-[11.5px] font-semibold uppercase tracking-wide text-white shadow-(--shadow-sm)">
        Most popular
      </span>
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          rx="18"
          ry="18"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="2.5"
          strokeLinecap="round"
          pathLength={100}
          strokeDasharray="16 84"
          className="border-trace-dash"
        />
      </svg>
      {children}
    </div>
  );
}

export default function PricingCard({
  plan,
  cycle,
}: {
  plan: PricingPlan;
  cycle: BillingCycle;
}) {
  const monthlyEquivalent = getMonthlyEquivalent(plan, cycle);

  return (
    <CardShell plan={plan}>
      <h3 className="text-[20px]">{plan.name}</h3>
      <p className="mt-2 text-[14px] leading-relaxed text-(--color-muted)">
        {plan.description}
      </p>

      <div className="mt-6" aria-live="polite">
        {monthlyEquivalent !== null ? (
          <div className="flex items-baseline gap-1.5">
            <span className="text-[38px] font-(family-name:--font-display) font-semibold leading-none text-(--color-heading)">
              {formatPrice(monthlyEquivalent)}
            </span>
            <span className="text-[14px] text-(--color-muted)">/mo</span>
          </div>
        ) : (
          <div className="text-[30px] font-(family-name:--font-display) font-semibold leading-none text-(--color-heading)">
            Custom
          </div>
        )}
        <p className="mt-1.5 text-[12.5px] text-(--color-muted)">{usageLine(plan)}</p>
      </div>

      <div className="mt-6">
        <Button
          href={plan.ctaHref}
          variant={plan.highlighted ? "primary" : "secondary"}
          className="w-full"
        >
          {plan.ctaLabel}
        </Button>
      </div>

      <ul className="mt-7 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-[14px] text-(--color-body)">
            <Check
              size={16}
              className="mt-0.5 shrink-0 text-(--color-gold-deep)"
              aria-hidden="true"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardShell>
  );
}
