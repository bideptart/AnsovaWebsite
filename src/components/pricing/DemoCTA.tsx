import { PhoneCall } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function DemoCTA() {
  return (
    <Container className="py-16 sm:py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-(--radius-lg) border border-(--color-border) bg-(--color-surface-alt) px-8 py-14 text-center">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-(--color-gold-light) text-(--color-gold-deep)">
          <PhoneCall size={20} aria-hidden="true" />
        </span>
        <h2 className="max-w-md text-[26px] sm:text-[30px]">
          Hear what an Ansova conversation feels like.
        </h2>
        <p className="max-w-md text-[15px] leading-relaxed text-(--color-muted)">
          Experience the response speed, voice quality and conversation flow
          before choosing your plan.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" size="lg">
            Book a demo
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact sales
          </Button>
        </div>
      </div>
    </Container>
  );
}
