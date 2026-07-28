"use client";

import {
  BookOpen,
  CreditCard,
  LayoutGrid,
  LifeBuoy,
  PhoneOutgoing,
  Plug,
  ShieldCheck,
  Sparkles,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { faqCategories } from "@/data/faqData";
import { cn } from "@/utils/cn";

type Category = (typeof faqCategories)[number];

const categoryIcons: Record<string, LucideIcon> = {
  All: LayoutGrid,
  General: BookOpen,
  "AI Voice Agents": Sparkles,
  "AI Receptionist": UserRound,
  "Outbound AI": PhoneOutgoing,
  Integrations: Plug,
  Pricing: CreditCard,
  Security: ShieldCheck,
  "Account and Support": LifeBuoy,
};

interface FAQCategoryFilterProps {
  active: Category;
  onChange: (category: Category) => void;
  counts: Record<string, number>;
}

export default function FAQCategoryFilter({ active, onChange, counts }: FAQCategoryFilterProps) {
  return (
    <div>
      {/* Mobile: native select keeps the control compact and easy to hit */}
      <label htmlFor="faq-category-select" className="sr-only">
        Filter by category
      </label>
      <select
        id="faq-category-select"
        value={active}
        onChange={(e) => onChange(e.target.value as Category)}
        className="min-h-12 w-full rounded-xl border border-border-secondary bg-background-elevated px-4 text-sm font-medium text-text-primary shadow-[var(--shadow-soft)] lg:hidden"
      >
        {faqCategories.map((category) => (
          <option key={category} value={category}>
            {category} ({counts[category] ?? 0})
          </option>
        ))}
      </select>

      {/* Desktop: sticky sidebar with icons and live counts */}
      <nav
        className="hidden rounded-2xl border border-border-primary bg-background-elevated p-3 shadow-[var(--shadow-soft)] lg:block"
        aria-label="FAQ categories"
      >
        <p className="mb-2 px-3 pt-1 text-[11px] font-bold tracking-[0.14em] text-text-tertiary uppercase">
          Browse by topic
        </p>
        <ul className="flex flex-col gap-0.5">
          {faqCategories.map((category) => {
            const count = counts[category] ?? 0;
            const isActive = active === category;
            const Icon = categoryIcons[category] ?? BookOpen;
            return (
              <li key={category}>
                <button
                  type="button"
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => onChange(category)}
                  disabled={count === 0}
                  className={cn(
                    "group relative flex min-h-11 w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-sm transition-colors",
                    isActive
                      ? "bg-brand-soft font-semibold text-brand-ink"
                      : "text-text-secondary hover:bg-surface-sunken hover:text-text-primary",
                    count === 0 && "cursor-not-allowed opacity-40"
                  )}
                >
                  {isActive && (
                    <span
                      className="absolute top-1/2 left-0 h-5 w-1 -translate-y-1/2 rounded-r-full bg-brand-primary"
                      aria-hidden="true"
                    />
                  )}
                  <Icon
                    size={15}
                    className={cn("shrink-0", isActive ? "text-brand-ink" : "text-text-tertiary")}
                    aria-hidden="true"
                  />
                  <span className="flex-1">{category}</span>
                  <span
                    className={cn(
                      "shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold tabular-nums",
                      isActive ? "bg-brand-primary text-brand-contrast" : "bg-surface-sunken text-text-secondary"
                    )}
                  >
                    {count}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
