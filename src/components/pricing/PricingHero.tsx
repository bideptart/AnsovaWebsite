import { ShieldCheck, TrendingUp, Zap } from "lucide-react";
import Container from "@/components/layout/Container";

const TRUST_POINTS = [
  { icon: TrendingUp, label: "Usage-based pricing" },
  { icon: Zap, label: "Scale whenever you need" },
  { icon: ShieldCheck, label: "One plan, all core features" },
];

export default function PricingHero() {
  return (
    <Container className="pt-16 pb-4 text-center sm:pt-24">
      <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-(--color-gold-deep)">
        Pricing
      </p>
      <h1 className="mx-auto mt-4 max-w-[19ch] text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.1]">
        Pricing that grows with every conversation.
      </h1>
      <p className="mx-auto mt-5 max-w-[52ch] text-[17px] leading-relaxed text-(--color-muted)">
        Start with the call volume you need today and scale your AI voice
        operations without rebuilding your workflow.
      </p>

      <ul className="mx-auto mt-9 flex max-w-2xl flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-8">
        {TRUST_POINTS.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="flex items-center gap-2 text-[14px] font-medium text-(--color-body)"
          >
            <Icon size={16} className="text-(--color-gold-deep)" aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>
    </Container>
  );
}
