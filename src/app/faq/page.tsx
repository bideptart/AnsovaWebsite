import type { Metadata } from "next";
import FAQContent from "@/components/faq/FAQContent";
import { faqData } from "@/data/faqData";

export const metadata: Metadata = {
  title: "Ansova.ai FAQ | Voice Agents, Integrations and Security",
  description:
    "Find answers about Ansova.ai voice agents, AI receptionists, outbound calls, integrations, pricing, security and account setup.",
  alternates: { canonical: "https://www.ansova.ai/faq" },
  openGraph: {
    title: "Ansova.ai FAQ | Voice Agents, Integrations and Security",
    description:
      "Find answers about Ansova.ai voice agents, AI receptionists, outbound calls, integrations, pricing, security and account setup.",
    url: "https://www.ansova.ai/faq",
    type: "website",
  },
};

// Structured data is generated from the same source as the visible list,
// so the two can never drift apart.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FAQContent />
    </>
  );
}
