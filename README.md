# AnsovaWebsite

Ansova.ai marketing site, built with Next.js (App Router), TypeScript and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000/pricing](http://localhost:3000/pricing) to see the pricing page.

## Structure

- `src/app` — routes (`/`, `/pricing`, `/contact`)
- `src/components/layout` — Navbar, Footer, Container, Logo
- `src/components/ui` — shared UI primitives (Button)
- `src/components/pricing` — pricing page sections
- `src/data/pricing-data.ts` — centralized plan pricing, limits and comparison data
- `src/data/pricing-faq.ts` — billing FAQ content

## ⚠️ Placeholder data — replace before launch

`src/data/pricing-data.ts` and `src/data/pricing-faq.ts` contain **placeholder
numbers and copy**, not verified Ansova.ai pricing or policy. They're clearly
marked with `TODO` comments. Before this ships, product/finance/legal should
replace:

- Monthly prices, included minutes, overage rates, concurrency and agent
  limits on each plan
- The annual discount percentage (`ANNUAL_DISCOUNT_PERCENT`)
- Feature lists and comparison table values
- FAQ answers (billing/refund/contract policy)

## Build

```bash
npm run build
```
