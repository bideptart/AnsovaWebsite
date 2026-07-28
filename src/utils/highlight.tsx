import type { ReactNode } from "react";

export function highlightMatch(text: string, query: string): ReactNode {
  const trimmed = query.trim();
  if (!trimmed) return text;

  const escaped = trimmed.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const splitRegex = new RegExp(`(${escaped})`, "gi");
  const testRegex = new RegExp(`^${escaped}$`, "i");
  const parts = text.split(splitRegex);

  if (parts.length === 1) return text;

  return parts.map((part, i) =>
    testRegex.test(part) ? (
      <mark key={i} className="rounded bg-brand-primary/25 text-text-primary">
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}
