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
  if (plan.aiAgents !== null) parts.push(`${plan.aiAgents} agents`);
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
      <div className="relative flex h-full flex-col rounded-(--radius-lg) border border-(--color-border) bg-(--color-page) p-7 shadow-(--shadow-sm) transition-colors duration-200 hover:border-(--color-heading)/20">
        {children}
      </div>
    );
  }

  return (
    <div className="relative h-full">
      <div className="glow-ring h-full">
        <div className="relative flex h-full flex-col rounded-(--radius-lg) bg-(--color-page) p-7 shadow-(--shadow-lg)">
          {children}
        </div>
      </div>
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
      {plan.highlighted && (
        <span className="absolute -top-3 right-6 z-10 rounded-(--radius-pill) bg-gradient-to-br from-(--color-gold) to-(--color-gold-deep) px-3 py-1 text-[11.5px] font-semibold uppercase tracking-wide text-(--color-heading) shadow-(--shadow-sm)">
          Most popular
        </span>
      )}

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
