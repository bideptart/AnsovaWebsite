"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarClock,
  ChevronsDownUp,
  ChevronsUpDown,
  Flame,
  HelpCircle,
  MessageCircleQuestion,
} from "lucide-react";
import { cn } from "@/utils/cn";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import FAQSearch from "@/components/faq/FAQSearch";
import FAQCategoryFilter from "@/components/faq/FAQCategoryFilter";
import FAQAccordion from "@/components/faq/FAQAccordion";
import FAQEmptyState from "@/components/faq/FAQEmptyState";
import { faqData, faqCategories } from "@/data/faqData";

type Category = (typeof faqCategories)[number];

const popularSearches = ["CRM", "outbound", "pricing", "languages", "recording"];

// Reads any #question-id hash on first render so a deep link opens the
// right answer immediately. Server-rendered markup has no hash to read, so
// this evaluates to an empty set during SSR and picks up the real value
// once the lazy initializer runs on the client.
function initialOpenIds(): Set<string> {
  if (typeof window === "undefined") return new Set();
  const hash = window.location.hash.replace("#", "");
  return hash && faqData.some((i) => i.id === hash) ? new Set([hash]) : new Set();
}

export default function FAQContent() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("All");
  const [popularOnly, setPopularOnly] = useState(false);
  const [openIds, setOpenIds] = useState<Set<string>>(initialOpenIds);

  const normalizedQuery = query.trim().toLowerCase();

  const matchesQuery = useCallback(
    (item: (typeof faqData)[number]) => {
      if (!normalizedQuery) return true;
      const haystack = [item.question, item.answer, item.category, ...item.keywords].join(" ").toLowerCase();
      return haystack.includes(normalizedQuery);
    },
    [normalizedQuery]
  );

  // Counts reflect the current search so the sidebar stays honest while typing
  const counts = useMemo(() => {
    const result: Record<string, number> = { All: 0 };
    faqCategories.forEach((c) => {
      if (c !== "All") result[c] = 0;
    });
    faqData.forEach((item) => {
      if (!matchesQuery(item)) return;
      result.All += 1;
      result[item.category] = (result[item.category] ?? 0) + 1;
    });
    return result;
  }, [matchesQuery]);

  // If the selected category has no results for the current search, treat
  // it as "All" for rendering purposes without storing a second copy of
  // this decision in state.
  const effectiveCategory: Category = category !== "All" && (counts[category] ?? 0) === 0 ? "All" : category;

  const filtered = useMemo(
    () =>
      faqData.filter(
        (item) =>
          (effectiveCategory === "All" || item.category === effectiveCategory) &&
          (!popularOnly || item.popular) &&
          matchesQuery(item)
      ),
    [effectiveCategory, popularOnly, matchesQuery]
  );

  const popularCount = useMemo(() => faqData.filter((i) => i.popular).length, []);

  // The initial open state already includes a deep-linked question; this
  // effect only handles the scroll, so it never calls setState.
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && faqData.some((i) => i.id === hash)) {
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ block: "center" });
      });
    }
  }, []);

  const toggle = (id: string) =>
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });

  const allOpen = filtered.length > 0 && filtered.every((i) => openIds.has(i.id));
  const toggleAll = () => setOpenIds(allOpen ? new Set() : new Set(filtered.map((i) => i.id)));


  return (
    <>

      <section className="relative overflow-hidden pt-36 pb-14 sm:pt-40 sm:pb-16">
        <div
          className="pointer-events-none absolute inset-0 bg-grid-faint [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]"
          aria-hidden="true"
        />
        <div
          className="glow-amber pointer-events-none absolute -top-40 left-1/2 h-[460px] w-[620px] -translate-x-1/2 rounded-full blur-3xl"
          aria-hidden="true"
        />
        <Container className="[--container-width:820px] relative text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-secondary bg-background-elevated px-4 py-1.5 text-[11px] font-bold tracking-[0.16em] text-brand-ink uppercase shadow-[var(--shadow-soft)]">
            <HelpCircle size={13} aria-hidden="true" />
            Answers and guidance
          </p>
          <h1 className="text-balance font-display text-[38px] leading-[1.05] font-medium tracking-[-0.03em] text-text-primary sm:text-[54px]">
            Everything you need to know about{" "}
            <span className="text-gradient-brand">Ansova.ai</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Learn how AI voice agents work, how they connect with your business and how to prepare reliable call
            workflows.
          </p>

          <div className="mt-10">
            <FAQSearch
              value={query}
              onChange={setQuery}
              resultCount={filtered.length}
              suggestions={popularSearches}
            />
          </div>

          <p className="mt-5 text-sm text-text-tertiary">
            Still need help?{" "}
            <a href="#faq-support" className="font-semibold text-brand-ink hover:underline">
              Contact our team.
            </a>
          </p>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,260px)_1fr] lg:gap-14">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <FAQCategoryFilter active={effectiveCategory} onChange={setCategory} counts={counts} />
            </div>

            <div>
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-display text-lg font-medium text-text-primary">
                  {popularOnly ? "Popular questions" : effectiveCategory === "All" ? "All questions" : effectiveCategory}
                  <span className="ml-2 text-sm font-normal text-text-tertiary">({filtered.length})</span>
                </h2>
                <button
                  type="button"
                  aria-pressed={popularOnly}
                  onClick={() => setPopularOnly((p) => !p)}
                  className={cn(
                    "inline-flex min-h-10 items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-semibold transition-colors",
                    popularOnly
                      ? "border-brand-primary bg-brand-soft text-brand-ink"
                      : "border-border-primary text-text-secondary hover:border-brand-primary hover:text-brand-ink"
                  )}
                >
                  <Flame size={14} aria-hidden="true" />
                  Popular ({popularCount})
                </button>
                {filtered.length > 0 && (
                  <button
                    type="button"
                    onClick={toggleAll}
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-border-primary px-3.5 py-2 text-xs font-semibold text-text-secondary transition-colors hover:border-brand-primary hover:text-brand-ink"
                  >
                    {allOpen ? (
                      <>
                        <ChevronsDownUp size={14} aria-hidden="true" />
                        Collapse all
                      </>
                    ) : (
                      <>
                        <ChevronsUpDown size={14} aria-hidden="true" />
                        Expand all
                      </>
                    )}
                  </button>
                )}
              </div>

              {filtered.length > 0 ? (
                <FAQAccordion items={filtered} searchQuery={query} openIds={openIds} onToggle={toggle} />
              ) : (
                <FAQEmptyState
                  onClear={() => {
                    setQuery("");
                    setCategory("All");
                    setPopularOnly(false);
                  }}
                />
              )}
            </div>
          </div>
        </Container>
      </section>

      <section id="faq-support" className="theme-dark scroll-mt-24 border-t border-border-primary py-20 sm:py-24">
        <Container className="[--container-width:820px] text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-soft text-brand-ink">
            <MessageCircleQuestion size={24} aria-hidden="true" />
          </span>
          <h2 className="mt-6 font-display text-[28px] font-medium text-text-primary sm:text-[36px]">
            Still have a question?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-text-secondary">
            Our team can help you understand how Ansova.ai fits your call workflows, business tools and customer
            experience.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/faq#faq-support" variant="primary" size="lg" className="w-full sm:w-auto">
              Contact our team
              <ArrowRight size={18} />
            </Button>
            <Button href="/faq#faq-support" variant="secondary" size="lg" className="w-full sm:w-auto">
              Book a demo
              <CalendarClock size={18} />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
