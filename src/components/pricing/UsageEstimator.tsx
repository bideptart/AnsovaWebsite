"use client";

import { useMemo, useState, useId } from "react";
import { PhoneCall } from "lucide-react";
import Button from "@/components/ui/Button";
import {
  BillingCycle,
  getMonthlyEquivalent,
  pricingPlans,
} from "@/data/pricing-data";

const fixedPlans = pricingPlans.filter((p) => !p.customPricing);
const highestFixedPlan = fixedPlans[fixedPlans.length - 1];
const MAX_SLIDER_MINUTES = (highestFixedPlan.includedMinutes ?? 4000) * 2;

function formatUsd(value: number) {
  return `$${value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export default function UsageEstimator({ cycle }: { cycle: BillingCycle }) {
  const [minutes, setMinutes] = useState(800);
  const [planId, setPlanId] = useState<(typeof pricingPlans)[number]["id"]>(
    "growth"
  );
  const sliderId = useId();
  const inputId = useId();

  const selectedPlan =
    pricingPlans.find((p) => p.id === planId) ?? pricingPlans[0];

  const overflowsAllPlans =
    highestFixedPlan.includedMinutes !== null &&
    minutes > highestFixedPlan.includedMinutes;

  const estimate = useMemo(() => {
    if (selectedPlan.customPricing) return null;
    if (selectedPlan.includedMinutes === null || selectedPlan.overageRate === null) {
      return null;
    }
    const base = getMonthlyEquivalent(selectedPlan, cycle) ?? 0;
    const overageMinutes = Math.max(0, minutes - selectedPlan.includedMinutes);
    const overageCost = overageMinutes * selectedPlan.overageRate;
    return {
      base,
      overageMinutes,
      overageCost,
      total: base + overageCost,
    };
  }, [selectedPlan, minutes, cycle]);

  function handleNumericInput(raw: string) {
    if (raw === "") {
      setMinutes(0);
      return;
    }
    const parsed = Number(raw.replace(/[^0-9]/g, ""));
    if (Number.isNaN(parsed)) return;
    setMinutes(Math.max(0, Math.min(parsed, MAX_SLIDER_MINUTES)));
  }

  return (
    <div className="rounded-(--radius-lg) border border-(--color-border) bg-(--color-surface-alt) p-6 sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <label
            htmlFor={sliderId}
            className="block text-[13px] font-semibold uppercase tracking-wide text-(--color-muted)"
          >
            Estimated monthly voice minutes
          </label>

          <div className="mt-3 flex items-center gap-4">
            <input
              id={sliderId}
              type="range"
              min={0}
              max={MAX_SLIDER_MINUTES}
              step={50}
              value={minutes}
              onChange={(e) => setMinutes(Number(e.target.value))}
              className="h-2 w-full min-w-0 flex-1 cursor-pointer appearance-none rounded-(--radius-pill) bg-(--color-border) accent-(--color-gold-deep)"
              aria-describedby={inputId}
            />
            <div className="flex items-center rounded-(--radius-md) border border-(--color-border) bg-(--color-page)">
              <label htmlFor={inputId} className="sr-only">
                Monthly voice minutes (exact)
              </label>
              <input
                id={inputId}
                type="text"
                inputMode="numeric"
                value={minutes}
                onChange={(e) => handleNumericInput(e.target.value)}
                className="h-11 w-24 rounded-(--radius-md) bg-transparent px-3 text-right text-[15px] font-semibold text-(--color-heading) outline-none"
              />
              <span className="pr-3 text-[13px] text-(--color-muted)">min</span>
            </div>
          </div>

          <fieldset className="mt-7">
            <legend className="text-[13px] font-semibold uppercase tracking-wide text-(--color-muted)">
              Selected plan
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {pricingPlans.map((plan) => (
                <button
                  key={plan.id}
                  type="button"
                  aria-pressed={planId === plan.id}
                  onClick={() => setPlanId(plan.id)}
                  className={`min-h-[40px] rounded-(--radius-pill) border px-4 text-[13.5px] font-semibold transition-colors duration-150 ${
                    planId === plan.id
                      ? "border-(--color-heading) bg-(--color-heading) text-white"
                      : "border-(--color-border) bg-(--color-page) text-(--color-body) hover:border-(--color-heading)/30"
                  }`}
                >
                  {plan.name}
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="rounded-(--radius-md) border border-(--color-border) bg-(--color-page) p-6">
          {overflowsAllPlans ? (
            <div className="flex flex-col items-start gap-4">
              <p className="text-[15px] leading-relaxed text-(--color-body)">
                Your usage may be better suited to a custom plan.
              </p>
              <Button href="/contact" size="md">
                <PhoneCall size={16} aria-hidden="true" />
                Talk to sales
              </Button>
            </div>
          ) : selectedPlan.customPricing ? (
            <div className="flex flex-col items-start gap-4">
              <p className="text-[15px] leading-relaxed text-(--color-body)">
                Enterprise usage is volume-based and quoted for your team.
              </p>
              <Button href="/contact" size="md">
                <PhoneCall size={16} aria-hidden="true" />
                Talk to sales
              </Button>
            </div>
          ) : estimate ? (
            <dl className="space-y-3 text-[14px]" aria-live="polite">
              <div className="flex items-center justify-between">
                <dt className="text-(--color-muted)">Plan base price</dt>
                <dd className="font-semibold text-(--color-heading)">
                  {formatUsd(estimate.base)}/mo
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-(--color-muted)">Included minutes</dt>
                <dd className="text-(--color-heading)">
                  {selectedPlan.includedMinutes?.toLocaleString()} min
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-(--color-muted)">Estimated overage</dt>
                <dd className="text-(--color-heading)">
                  {estimate.overageMinutes.toLocaleString()} min &middot;{" "}
                  {formatUsd(estimate.overageCost)}
                </dd>
              </div>
              <div className="flex items-center justify-between border-t border-(--color-border) pt-3">
                <dt className="font-semibold text-(--color-heading)">
                  Estimated monthly total
                </dt>
                <dd className="text-[20px] font-(family-name:--font-display) font-semibold text-(--color-heading)">
                  {formatUsd(estimate.total)}
                </dd>
              </div>
              <p className="text-[12.5px] text-(--color-muted)">
                {cycle === "annual"
                  ? "Base price reflects annual billing; overage is billed monthly."
                  : "Base price reflects monthly billing; overage is billed monthly."}
              </p>
            </dl>
          ) : (
            <p className="text-[14px] text-(--color-muted)">
              Usage estimate unavailable for this plan.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
