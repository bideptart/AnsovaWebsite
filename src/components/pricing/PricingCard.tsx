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

export default function PricingCard({
  plan,
  cycle,
}: {
  plan: PricingPlan;
  cycle: BillingCycle;
}) {
  const monthlyEquivalent = getMonthlyEquivalent(plan, cycle);

  return (
    <div
      className={`relative flex h-full flex-col rounded-(--radius-lg) border p-7 transition-colors duration-200 ${
        plan.highlighted
          ? "border-(--color-gold-deep)/50 bg-(--color-page) shadow-(--shadow-lg)"
          : "border-(--color-border) bg-(--color-page) shadow-(--shadow-sm) hover:border-(--color-heading)/20"
      }`}
    >
      {plan.highlighted && (
        <span className="absolute -top-3 left-7 rounded-(--radius-pill) bg-gradient-to-br from-(--color-gold) to-(--color-gold-deep) px-3 py-1 text-[12px] font-semibold text-(--color-heading) shadow-(--shadow-sm)">
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
        <p className="mt-1.5 text-[12.5px] text-(--color-muted)">
          {monthlyEquivalent !== null
            ? cycle === "annual"
              ? "Billed annually"
              : "Billed monthly"
            : "Volume-based, quoted for your team"}
        </p>
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

      <div className="mt-6 rounded-(--radius-md) bg-(--color-surface-muted) px-4 py-3 text-[13px] text-(--color-body)">
        {plan.includedMinutes !== null ? (
          <>
            <strong className="font-semibold text-(--color-heading)">
              {plan.includedMinutes.toLocaleString()} min
            </strong>{" "}
            included
            {plan.overageRate !== null && (
              <> &middot; ${plan.overageRate.toFixed(2)}/min after</>
            )}
          </>
        ) : (
          "Custom usage allowance"
        )}
      </div>

      <ul className="mt-6 flex-1 space-y-3">
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
    </div>
  );
}
