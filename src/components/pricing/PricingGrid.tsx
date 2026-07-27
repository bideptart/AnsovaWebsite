"use client";

import { useState } from "react";
import { BillingCycle, listedPlans } from "@/data/pricing-data";
import PricingCard from "./PricingCard";

export default function PricingGrid({ cycle }: { cycle: BillingCycle }) {
  const [middleFocused, setMiddleFocused] = useState(false);
  const middleIndex = listedPlans.findIndex((p) => p.highlighted);

  return (
    <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
      {listedPlans.map((plan, index) => {
        const isMiddle = index === middleIndex;
        const isBeforeMiddle = index < middleIndex;

        const shiftClass = !middleFocused
          ? ""
          : isMiddle
            ? "scale-[1.03]"
            : isBeforeMiddle
              ? "translate-x-3 scale-[0.96] opacity-90"
              : "-translate-x-3 scale-[0.96] opacity-90";

        return (
          <div
            key={plan.id}
            className={`relative transition-all duration-300 ease-out ${
              isMiddle ? "z-10" : "z-0"
            } ${shiftClass}`}
            onMouseEnter={isMiddle ? () => setMiddleFocused(true) : undefined}
            onMouseLeave={isMiddle ? () => setMiddleFocused(false) : undefined}
          >
            <PricingCard plan={plan} cycle={cycle} />
          </div>
        );
      })}
    </div>
  );
}
