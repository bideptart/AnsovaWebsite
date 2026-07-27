import { BillingCycle, pricingPlans } from "@/data/pricing-data";
import PricingCard from "./PricingCard";

export default function PricingGrid({ cycle }: { cycle: BillingCycle }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:items-stretch">
      {pricingPlans.map((plan) => (
        <PricingCard key={plan.id} plan={plan} cycle={cycle} />
      ))}
    </div>
  );
}
