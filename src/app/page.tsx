import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Ansova.ai | AI Voice Agents for Business Conversations",
  description:
    "Ansova.ai builds AI voice agents that handle real business conversations, day and night.",
};

export default function Home() {
  return (
    <Container className="flex flex-col items-center py-24 text-center sm:py-32">
      <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-(--color-gold-deep)">
        Ansova.ai
      </p>
      <h1 className="mt-4 max-w-2xl text-[clamp(2.25rem,5vw,3.25rem)] leading-tight">
        AI voice agents for every business conversation.
      </h1>
      <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-(--color-muted)">
        Answer, qualify and route calls with an AI voice agent built for
        real-world conversations — then see exactly what it costs to run.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Button href="/pricing" size="lg">
          View pricing
        </Button>
        <Button href="/contact" variant="secondary" size="lg">
          Contact sales
        </Button>
      </div>
    </Container>
  );
}
