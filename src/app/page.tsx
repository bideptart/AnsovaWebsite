import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import CapabilityStrip from "@/components/home/CapabilityStrip";
import PlatformOverview from "@/components/home/PlatformOverview";
import ConversationSection from "@/components/home/ConversationSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ConfiguratorSection from "@/components/home/ConfiguratorSection";
import InboundSection from "@/components/home/InboundSection";
import OutboundSection from "@/components/home/OutboundSection";
import IntegrationsSection from "@/components/home/IntegrationsSection";
import AnalyticsSection from "@/components/home/AnalyticsSection";
import UseCasesSection from "@/components/home/UseCasesSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import SecuritySection from "@/components/home/SecuritySection";
import FAQPreview from "@/components/home/FAQPreview";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Ansova.ai | AI Voice Agents for Business Calls",
  description:
    "Build AI voice agents that answer calls, qualify leads, support customers, book appointments and connect conversations to business workflows.",
  alternates: { canonical: "https://www.ansova.ai/" },
  openGraph: {
    title: "Ansova.ai | AI Voice Agents for Business Calls",
    description:
      "Build AI voice agents that answer calls, qualify leads, support customers, book appointments and connect conversations to business workflows.",
    url: "https://www.ansova.ai/",
    type: "website",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ansova.ai",
  url: "https://www.ansova.ai/",
  description:
    "Ansova.ai helps businesses build AI voice agents that answer calls, qualify leads, support customers and book appointments.",
};

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Ansova.ai",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "A platform for building AI voice agents that handle inbound and outbound business calls, connected to knowledge sources and business tools.",
  url: "https://www.ansova.ai/",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }}
      />

      <HeroSection />
      <CapabilityStrip />
      <PlatformOverview />
      <ConversationSection />
      <HowItWorksSection />
      <ConfiguratorSection />
      <InboundSection />
      <OutboundSection />
      <IntegrationsSection />
      <AnalyticsSection />
      <UseCasesSection />
      <IndustriesSection />
      <SecuritySection />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
