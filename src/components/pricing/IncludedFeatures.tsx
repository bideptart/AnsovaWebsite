import {
  AudioLines,
  Route,
  FileText,
  BookOpen,
  BarChart3,
  Webhook,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/layout/Container";
import { includedEverywhere } from "@/data/pricing-data";

const ICONS: Record<string, LucideIcon> = {
  AudioLines,
  Route,
  FileText,
  BookOpen,
  BarChart3,
  Webhook,
};

export default function IncludedFeatures() {
  return (
    <Container className="py-16 sm:py-20">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-[28px] sm:text-[32px]">Included in every plan</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-(--color-muted)">
          Core platform capabilities available on Launch, Growth, Scale and
          Enterprise.
        </p>
      </div>

      <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
        {includedEverywhere.map(({ label, icon }) => {
          const Icon = ICONS[icon];
          return (
            <li
              key={label}
              className="flex items-center gap-3 rounded-(--radius-md) border border-(--color-border-light) bg-(--color-surface-alt) px-4 py-3.5 text-[13.5px] font-medium text-(--color-body)"
            >
              <Icon
                size={18}
                className="shrink-0 text-(--color-gold-deep)"
                aria-hidden="true"
              />
              {label}
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
