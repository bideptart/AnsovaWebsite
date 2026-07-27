import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PricingHero from "@/components/pricing/PricingHero";
import PricingExperience from "@/components/pricing/PricingExperience";
import IncludedFeatures from "@/components/pricing/IncludedFeatures";
import PricingComparison from "@/components/pricing/PricingComparison";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import DemoCTA from "@/components/pricing/DemoCTA";
import FinalPricingCTA from "@/components/pricing/FinalPricingCTA";

export const metadata: Metadata = {
  title: "Ansova.ai Pricing | AI Voice Agent Plans",
  description:
    "Explore flexible Ansova.ai pricing for AI voice agents, business calls and scalable customer conversations.",
};

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      <PricingHero />

      <Container className="pb-16 pt-8 sm:pb-20">
        <PricingExperience />
      </Container>

      <div className="bg-(--color-surface-alt)">
        <IncludedFeatures />
      </div>

      <PricingComparison />

      <div className="bg-(--color-surface-alt)">
        <PricingFAQ />
      </div>

      <DemoCTA />
      <FinalPricingCTA />
    </div>
  );
}
