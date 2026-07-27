"use client";

import { useState } from "react";
import { Check, Minus } from "lucide-react";
import Container from "@/components/layout/Container";
import { comparisonRows, listedPlans } from "@/data/pricing-data";

function ValueCell({ value }: { value?: string }) {
  if (!value || value === "—") {
    return (
      <span
        aria-label="Not included"
        className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-(--color-surface-muted)"
      >
        <Minus size={13} className="text-(--color-muted)" />
      </span>
    );
  }
  if (value === "check") {
    return (
      <span
        aria-label="Included"
        className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-(--color-gold-deep)"
      >
        <Check size={14} className="text-white" strokeWidth={3} />
      </span>
    );
  }
  return <span className="text-(--color-body)">{value}</span>;
}

export default function PricingComparison() {
  const [mobilePlanId, setMobilePlanId] = useState(listedPlans[1].id);
  const mobilePlan = listedPlans.find((p) => p.id === mobilePlanId)!;
  const lastRowLabel = comparisonRows[comparisonRows.length - 1].label;

  return (
    <Container className="py-16 sm:py-20">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-[28px] sm:text-[32px]">Compare plans side by side</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-(--color-muted)">
          Included minutes, limits and support level, all in one view.
        </p>
      </div>

      {/* Desktop table */}
      <div className="mx-auto mt-10 hidden max-w-4xl overflow-x-auto md:block">
        <table className="w-full min-w-[640px] border-separate border-spacing-0 overflow-hidden rounded-(--radius-lg) border border-(--color-border)">
          <thead>
            <tr>
              <th
                scope="col"
                className="sticky top-[72px] z-30 w-[200px] border-b border-(--color-border) bg-(--color-surface-muted) px-5 py-4 text-left text-[14px] font-semibold text-(--color-heading)"
              >
                Feature
              </th>
              {listedPlans.map((plan) => (
                <th
                  key={plan.id}
                  scope="col"
                  className={`sticky top-[72px] z-30 border-b border-(--color-border) px-5 py-4 text-left text-[15px] ${
                    plan.highlighted
                      ? "bg-(--color-gold-light)/60 text-(--color-gold-deep)"
                      : "bg-(--color-surface-muted) text-(--color-heading)"
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    {plan.name}
                    {plan.highlighted && (
                      <span className="rounded-(--radius-pill) bg-(--color-gold-deep) px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wide text-white">
                        Popular
                      </span>
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => {
              const isLastRow = row.label === lastRowLabel;
              return (
                <tr key={row.label} className="border-b border-(--color-border-light) last:border-b-0">
                  <th scope="row" className="px-5 py-3.5 text-left text-[14px] font-normal text-(--color-body)">
                    {row.label}
                  </th>
                  {listedPlans.map((plan) => (
                    <td
                      key={plan.id}
                      className={`px-5 py-3.5 text-[14px] ${
                        plan.highlighted ? "bg-(--color-gold-light)/25" : ""
                      } ${isLastRow && plan.highlighted ? "rounded-b-none" : ""}`}
                    >
                      <ValueCell value={row.values[plan.id]} />
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile: single-plan selector */}
      <div className="mt-10 md:hidden">
        <div
          role="tablist"
          aria-label="Select plan to compare"
          className="flex gap-2 overflow-x-auto pb-1"
        >
          {listedPlans.map((plan) => (
            <button
              key={plan.id}
              type="button"
              role="tab"
              aria-selected={mobilePlanId === plan.id}
              onClick={() => setMobilePlanId(plan.id)}
              className={`min-h-[44px] shrink-0 rounded-(--radius-pill) border px-4 text-[14px] font-semibold ${
                mobilePlanId === plan.id
                  ? "border-(--color-heading) bg-(--color-heading) text-white"
                  : "border-(--color-border) bg-(--color-page) text-(--color-body)"
              }`}
            >
              {plan.name}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          className="mt-5 divide-y divide-(--color-border-light) rounded-(--radius-md) border border-(--color-border) bg-(--color-page)"
        >
          <dl className="p-4">
            {comparisonRows.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between gap-4 border-b border-(--color-border-light) py-2.5 last:border-b-0"
              >
                <dt className="text-[14px] text-(--color-body)">{row.label}</dt>
                <dd className="text-[14px] font-medium">
                  <ValueCell value={row.values[mobilePlan.id]} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Container>
  );
}
