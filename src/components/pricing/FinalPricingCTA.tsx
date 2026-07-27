import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function FinalPricingCTA() {
  return (
    <div className="bg-(--color-heading)">
      <Container className="flex flex-col items-center gap-6 py-16 text-center sm:py-20">
        <h2 className="max-w-lg text-[28px] text-white sm:text-[34px]">
          Ready to put every conversation to work?
        </h2>
        <p className="max-w-md text-[15px] leading-relaxed text-white/65">
          Choose a plan or speak with the team about a custom AI voice
          deployment.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" size="lg">
            Get started
          </Button>
          <Button
            href="/contact"
            variant="secondary"
            size="lg"
            className="!border-white/25 !text-white hover:!bg-white/10"
          >
            Contact sales
          </Button>
        </div>
      </Container>
    </div>
  );
}
