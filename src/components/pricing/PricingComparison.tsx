"use client";

import { Fragment, useState } from "react";
import { Check, Minus } from "lucide-react";
import Container from "@/components/layout/Container";
import { comparisonCategories, pricingPlans } from "@/data/pricing-data";

function ValueCell({ value }: { value?: string }) {
  if (!value || value === "—") {
    return (
      <span aria-label="Not included">
        <Minus size={16} className="text-(--color-muted)/50" />
      </span>
    );
  }
  if (value === "check") {
    return (
      <span aria-label="Included">
        <Check size={17} className="text-(--color-gold-deep)" />
      </span>
    );
  }
  return <span className="text-(--color-body)">{value}</span>;
}

export default function PricingComparison() {
  const [mobilePlanId, setMobilePlanId] = useState(pricingPlans[1].id);
  const mobilePlan = pricingPlans.find((p) => p.id === mobilePlanId)!;
  const lastCategory = comparisonCategories[comparisonCategories.length - 1];
  const lastRowLabel = lastCategory.rows[lastCategory.rows.length - 1].label;

  return (
    <Container className="py-16 sm:py-20">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-[28px] sm:text-[32px]">Compare plans side by side</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-(--color-muted)">
          Included minutes, limits and support level, all in one view.
        </p>
      </div>

      {/* Desktop table */}
      <div className="mt-10 hidden overflow-x-auto md:block">
        <table className="w-full min-w-[760px] border-separate border-spacing-0">
          <thead>
            <tr>
              <th scope="col" className="sticky top-[72px] z-30 w-[220px] border-b border-(--color-border) bg-(--color-page) py-4 text-left text-[13px] font-semibold uppercase tracking-wide text-(--color-muted)">
                Feature
              </th>
              {pricingPlans.map((plan) => (
                <th
                  key={plan.id}
                  scope="col"
                  className={`sticky top-[72px] z-30 px-4 py-4 text-left text-[15px] ${
                    plan.highlighted
                      ? "rounded-t-(--radius-md) border-b-2 border-(--color-gold) bg-(--color-gold-light)/50 text-(--color-gold-deep)"
                      : "border-b border-(--color-border) bg-(--color-page) text-(--color-heading)"
                  }`}
                >
                  {plan.name}
                  {plan.highlighted && (
                    <span className="ml-2 rounded-(--radius-pill) bg-(--color-gold-deep) px-2 py-0.5 text-[11px] font-semibold text-white">
                      Popular
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonCategories.map((cat) => (
              <Fragment key={cat.category}>
                <tr>
                  <th
                    scope="colgroup"
                    className="bg-(--color-surface-muted) px-0 py-2 text-left text-[12.5px] font-semibold uppercase tracking-wide text-(--color-muted)"
                  >
                    <span className="block px-0 py-1">{cat.category}</span>
                  </th>
                  {pricingPlans.map((plan) => (
                    <th
                      key={plan.id}
                      scope="colgroup"
                      aria-hidden="true"
                      className={`px-0 py-2 ${
                        plan.highlighted ? "bg-(--color-gold-light)/50" : "bg-(--color-surface-muted)"
                      }`}
                    />
                  ))}
                </tr>
                {cat.rows.map((row) => {
                  const isLastRow = cat.category === lastCategory.category && row.label === lastRowLabel;
                  return (
                    <tr key={row.label} className="border-b border-(--color-border-light)">
                      <th scope="row" className="py-3.5 text-left text-[14px] font-normal text-(--color-body)">
                        {row.label}
                      </th>
                      {pricingPlans.map((plan) => (
                        <td
                          key={plan.id}
                          className={`px-4 py-3.5 text-[14px] ${
                            plan.highlighted
                              ? `bg-(--color-gold-light)/30 ${isLastRow ? "rounded-b-(--radius-md)" : ""}`
                              : ""
                          }`}
                        >
                          <ValueCell value={row.values[plan.id]} />
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </Fragment>
            ))}
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
          {pricingPlans.map((plan) => (
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
          {comparisonCategories.map((cat) => (
            <div key={cat.category} className="p-4">
              <p className="text-[12.5px] font-semibold uppercase tracking-wide text-(--color-muted)">
                {cat.category}
              </p>
              <dl className="mt-2 space-y-2.5">
                {cat.rows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-4">
                    <dt className="text-[14px] text-(--color-body)">{row.label}</dt>
                    <dd className="text-[14px] font-medium">
                      <ValueCell value={row.values[mobilePlan.id]} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
