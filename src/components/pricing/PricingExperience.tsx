"use client";

import { useState } from "react";
import { Clock } from "lucide-react";
import { BillingCycle } from "@/data/pricing-data";
import BillingToggle from "./BillingToggle";
import PricingGrid from "./PricingGrid";
import UsageEstimator from "./UsageEstimator";

export default function PricingExperience() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-(--radius-pill) border border-(--color-gold-muted)/60 bg-(--color-gold-light)/60 px-4 py-2 text-[13px] font-medium text-(--color-gold-deep)">
          <Clock size={14} aria-hidden="true" />
          Usage-based billing — pay only for the minutes you use.
        </span>
      </div>

      <div className="flex justify-center">
        <BillingToggle cycle={cycle} onChange={setCycle} />
      </div>
      <PricingGrid cycle={cycle} />
      <UsageEstimator cycle={cycle} />
    </div>
  );
}
