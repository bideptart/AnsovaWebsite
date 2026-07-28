import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Blog | Ansova.ai",
  description:
    "Ansova.ai writing on AI voice agents, conversation design and connected business workflows. New posts coming soon.",
};

export default function BlogPage() {
  return (
    <Container className="py-20 sm:py-28">
      <div className="mx-auto max-w-xl text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-(--color-gold-light) text-(--color-gold-deep)">
          <Newspaper size={24} aria-hidden="true" />
        </span>
        <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.14em] text-(--color-gold-deep)">
          Blog
        </p>
        <h1 className="mt-4 text-[clamp(2rem,4vw,2.75rem)] leading-tight">
          Writing on AI voice agents is on its way.
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-(--color-muted)">
          We&apos;re preparing guides on conversation design, connected workflows and
          running AI voice agents in production. Check back soon, or reach out
          directly with a question in the meantime.
        </p>
        <Button href="/contact" size="lg" className="mt-8">
          Contact the team
        </Button>
      </div>
    </Container>
  );
}
