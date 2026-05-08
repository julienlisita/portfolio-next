// src/components/common/FaqSection.jsx

import { HelpCircle, ChevronRight } from "lucide-react";
import Section from "../layout/Section";

export default function FaqSection({ 
  id, 
  title = "FAQ", 
  faq, 
  jsonLd = true, 
  ariaLabelledby 
}) {
  // si ariaLabelledby n’est pas fourni, on en crée un par défaut
  const headingId = ariaLabelledby || `${id || "faq"}-title`;

  return (
    <Section id={id} className="faq-section" aria-labelledby={headingId}>
      <h2 id={headingId} className="flex items-center gap-2 text-xl font-bold mb-4">
        <HelpCircle className="w-5 h-5 text-[#007AFF]" />
        {title}
      </h2>

      <div className="space-y-3">
        {faq.map((item, idx) => (
          <details
            key={idx}
            className="group bg-[#2a2a2a] rounded-lg px-4 py-3 text-gray-200"
          >
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="font-semibold">{item.q}</span>
              <ChevronRight className="w-4 h-4 text-[#5AC8FA] transition-transform group-open:rotate-90" />
            </summary>
            <div className="mt-2 text-gray-300">{item.a}</div>
          </details>
        ))}
      </div>

      {/* JSON-LD FAQ schema */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faq.map(({ q, a }) => ({
                "@type": "Question",
                name: q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: a,
                },
              })),
            }),
          }}
        />
      )}
    </Section>
  );
}