"use client";

import { BillingCycle, ANNUAL_DISCOUNT_PERCENT } from "@/data/pricing-data";

export default function BillingToggle({
  cycle,
  onChange,
}: {
  cycle: BillingCycle;
  onChange: (cycle: BillingCycle) => void;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        role="radiogroup"
        aria-label="Billing cycle"
        className="relative inline-flex rounded-(--radius-pill) border border-(--color-border) bg-(--color-surface-muted) p-1"
      >
        {(["monthly", "annual"] as const).map((value) => {
          const isActive = cycle === value;
          return (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={isActive}
              onClick={() => onChange(value)}
              className={`relative z-10 min-h-[40px] rounded-(--radius-pill) px-5 text-[14px] font-semibold transition-colors duration-200 ${
                isActive
                  ? "bg-(--color-page) text-(--color-heading) shadow-(--shadow-sm)"
                  : "text-(--color-muted) hover:text-(--color-heading)"
              }`}
            >
              {value === "monthly" ? "Monthly" : "Annual"}
            </button>
          );
        })}
      </div>
      {ANNUAL_DISCOUNT_PERCENT > 0 && (
        <span
          className={`inline-flex items-center rounded-(--radius-pill) bg-(--color-gold-light) px-3 py-1 text-[12.5px] font-semibold text-(--color-gold-deep) transition-opacity duration-200 ${
            cycle === "annual" ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={cycle !== "annual"}
        >
          Save {ANNUAL_DISCOUNT_PERCENT}% with annual billing
        </span>
      )}
    </div>
  );
}
