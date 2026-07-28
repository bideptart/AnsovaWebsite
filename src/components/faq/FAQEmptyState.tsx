"use client";

import { RotateCcw, SearchX } from "lucide-react";

interface FAQEmptyStateProps {
  onClear?: () => void;
}

export default function FAQEmptyState({ onClear }: FAQEmptyStateProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-border-primary bg-surface-sunken px-6 py-16 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background-elevated text-text-tertiary">
        <SearchX size={24} aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-display text-xl font-medium text-text-primary">No matching questions found.</h3>
      <p className="mt-2 max-w-sm text-sm text-text-secondary">
        Try another search or contact the Ansova.ai team.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {onClear && (
          <button
            type="button"
            onClick={onClear}
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-border-secondary px-4 py-2 text-sm font-semibold text-text-primary transition-colors hover:border-brand-primary hover:text-brand-ink"
          >
            <RotateCcw size={15} aria-hidden="true" />
            Reset filters
          </button>
        )}
        <a
          href="#faq-support"
          className="inline-flex min-h-11 items-center rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-brand-contrast transition-colors hover:bg-brand-strong"
        >
          Contact our team
        </a>
      </div>
    </div>
  );
}
