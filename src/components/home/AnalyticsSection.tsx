import Container from "@/components/layout/Container";
import SectionHeading from "@/components/common/SectionHeading";
import AnalyticsMockup from "@/components/product/AnalyticsMockup";

export default function AnalyticsSection() {
  return (
    <section id="analytics" className="theme-dark relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div
        className="glow-amber pointer-events-none absolute top-[-30%] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-60"
        aria-hidden="true"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Conversation intelligence"
          index="07"
          heading="Understand every call beyond the transcript."
          align="center"
        />
        <div className="mt-14">
          <AnalyticsMockup />
        </div>
      </Container>
    </section>
  );
}
