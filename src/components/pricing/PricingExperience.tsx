"use client";

import { useState } from "react";
import { BillingCycle } from "@/data/pricing-data";
import BillingToggle from "./BillingToggle";
import PricingGrid from "./PricingGrid";
import UsageEstimator from "./UsageEstimator";

export default function PricingExperience() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  return (
    <div className="flex flex-col gap-12">
      <div className="flex justify-center">
        <BillingToggle cycle={cycle} onChange={setCycle} />
      </div>
      <PricingGrid cycle={cycle} />
      <UsageEstimator cycle={cycle} />
    </div>
  );
}
