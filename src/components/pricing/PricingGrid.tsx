import { BillingCycle, listedPlans } from "@/data/pricing-data";
import PricingCard from "./PricingCard";

export default function PricingGrid({ cycle }: { cycle: BillingCycle }) {
  return (
    <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
      {listedPlans.map((plan) => (
        <PricingCard key={plan.id} plan={plan} cycle={cycle} />
      ))}
    </div>
  );
}
