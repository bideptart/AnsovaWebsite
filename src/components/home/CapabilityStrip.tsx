import { Sparkle } from "lucide-react";
import { capabilityStrip } from "@/data/featureData";

export default function CapabilityStrip() {
  // Duplicated once so the -50% translate loops seamlessly
  const items = [...capabilityStrip, ...capabilityStrip];

  return (
    <section className="theme-dark border-y border-border-primary py-5" aria-label="Platform capabilities">
      <div className="marquee-mask overflow-hidden">
        <ul className="marquee-track flex w-max items-center gap-10 pr-10">
          {items.map((item, i) => (
            <li
              key={`${item}-${i}`}
              className="flex shrink-0 items-center gap-3 text-sm font-medium whitespace-nowrap text-text-secondary"
              aria-hidden={i >= capabilityStrip.length}
            >
              <Sparkle size={13} className="text-brand-primary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
