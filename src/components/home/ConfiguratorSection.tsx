import Container from "@/components/layout/Container";
import SectionHeading from "@/components/common/SectionHeading";
import AgentConfigurator from "@/components/product/AgentConfigurator";

export default function ConfiguratorSection() {
  return (
    <section id="configure" className="scroll-mt-24 bg-background-secondary py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Configure in seconds"
          index="03"
          heading="Shape how your agent opens every call."
          supporting="Adjust tone, objective, business type and language to see how the opening line changes. This is a preview of the configuration step, not a live call."
          align="center"
        />
        <div className="mt-14">
          <AgentConfigurator />
        </div>
      </Container>
    </section>
  );
}
