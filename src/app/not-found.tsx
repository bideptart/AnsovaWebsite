import type { Metadata } from "next";
import { Compass } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found | Ansova.ai",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-faint [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]"
        aria-hidden="true"
      />
      <Container className="[--container-width:820px] relative text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-soft text-brand-ink">
          <Compass size={28} aria-hidden="true" />
        </span>
        <p className="mt-6 font-mono text-sm text-text-tertiary">Error 404</p>
        <h1 className="mt-3 font-display text-[36px] font-medium text-text-primary sm:text-[48px]">
          This page didn&apos;t answer.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" size="lg" className="w-full sm:w-auto">
            Back to homepage
          </Button>
          <Button href="/faq" variant="secondary" size="lg" className="w-full sm:w-auto">
            Visit the FAQ
          </Button>
        </div>
      </Container>
    </section>
  );
}
