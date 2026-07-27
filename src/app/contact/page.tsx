import type { Metadata } from "next";
import { Mail } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact Ansova.ai | Talk to Sales",
  description:
    "Get in touch with the Ansova.ai team to book a demo, ask about pricing, or discuss a custom AI voice deployment.",
};

export default function ContactPage() {
  return (
    <Container className="py-20 sm:py-28">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-(--color-gold-deep)">
          Contact
        </p>
        <h1 className="mt-4 text-[clamp(2rem,4vw,2.75rem)] leading-tight">
          Let&apos;s talk about your AI voice deployment.
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-(--color-muted)">
          Tell us about your call volume and use case, and the Ansova.ai team
          will follow up to help you choose the right plan.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 rounded-(--radius-lg) border border-(--color-border) bg-(--color-surface-alt) p-8">
          <Mail className="text-(--color-gold-deep)" size={28} aria-hidden="true" />
          <p className="text-[15px] text-(--color-body)">
            Reach the team directly at
          </p>
          <a
            href="mailto:hello@ansova.ai"
            className="text-[17px] font-semibold text-(--color-heading) underline decoration-(--color-gold) decoration-2 underline-offset-4"
          >
            hello@ansova.ai
          </a>
          <Button href="mailto:hello@ansova.ai" size="lg" className="mt-2">
            Email the team
          </Button>
        </div>
      </div>
    </Container>
  );
}
