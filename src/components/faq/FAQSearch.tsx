"use client";

import { useEffect, useRef } from "react";
import { Search, X } from "lucide-react";

interface FAQSearchProps {
  value: string;
  onChange: (value: string) => void;
  resultCount: number;
  suggestions?: string[];
}

export default function FAQSearch({ value, onChange, resultCount, suggestions = [] }: FAQSearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  // "/" focuses search from anywhere, unless the user is already typing.
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const el = document.activeElement;
      const typing =
        el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement || el instanceof HTMLSelectElement;
      if (e.key === "/" && !typing) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape" && el === inputRef.current) {
        inputRef.current?.blur();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="mx-auto w-full max-w-2xl">
      <label htmlFor="faq-search" className="sr-only">
        Search FAQs
      </label>
      <div className="relative">
        <Search
          size={20}
          className="pointer-events-none absolute top-1/2 left-5 -translate-y-1/2 text-text-tertiary"
          aria-hidden="true"
        />
        <input
          ref={inputRef}
          id="faq-search"
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search voice agents, integrations, security…"
          aria-describedby="faq-result-count"
          className="min-h-14 w-full rounded-2xl border border-border-secondary bg-background-elevated py-3 pr-24 pl-14 text-base text-text-primary shadow-[var(--shadow-soft)] placeholder:text-text-tertiary focus:border-brand-primary"
        />
        <div className="absolute top-1/2 right-3 flex -translate-y-1/2 items-center gap-1.5">
          {value && (
            <button
              type="button"
              onClick={() => onChange("")}
              aria-label="Clear search"
              className="flex h-9 w-9 items-center justify-center rounded-full text-text-tertiary transition-colors hover:bg-surface-sunken hover:text-text-primary"
            >
              <X size={16} aria-hidden="true" />
            </button>
          )}
          {!value && (
            <kbd
              className="hidden rounded-md border border-border-secondary bg-surface-sunken px-2 py-1 font-mono text-[11px] text-text-tertiary sm:block"
              aria-hidden="true"
            >
              /
            </kbd>
          )}
        </div>
      </div>

      {suggestions.length > 0 && !value && (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs text-text-tertiary">Popular:</span>
          {suggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => onChange(s)}
              className="min-h-8 rounded-full border border-border-primary px-3 py-1 text-xs font-medium text-text-secondary transition-colors hover:border-brand-primary hover:text-brand-ink"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <p id="faq-result-count" className="mt-4 text-center text-sm text-text-tertiary" aria-live="polite">
        {resultCount} {resultCount === 1 ? "question" : "questions"} found
      </p>
    </div>
  );
}
