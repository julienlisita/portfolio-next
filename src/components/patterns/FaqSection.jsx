"use client";

// src/components/common/FaqSection.jsx

import { useId } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";

import Section from "@/components/layout/Section";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/layout/SectionHeading";

const ease = [0.22, 1, 0.36, 1];

export default function FaqSection({
  id,
  title = "Vos questions, mes réponses.",
  description = "Retrouvez les réponses aux questions les plus fréquentes pour préparer votre projet.",
  faq = [],
  jsonLd = true,
  ariaLabelledby,
}) {
  const reducedMotion = useReducedMotion();
  const reactId = useId();

  const headingId = ariaLabelledby || `${id || reactId}-title`;

  return (
    <Section
      id={id}
      labelledBy={headingId}
      bgColor="#222222"
      className="faq-section relative"
    >
      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">

          {/* Introduction */}
          <motion.div
            initial={
              reducedMotion
                ? false
                : { opacity: 0, y: 25 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reducedMotion ? 0 : 0.7,
              ease,
            }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <SectionHeading
              id={headingId}
              eyebrow="QUESTIONS FRÉQUENTES"
              title={title}
              description={description}
            />
          </motion.div>

          {/* Accordéon */}
          <motion.div
            initial={
              reducedMotion
                ? false
                : { opacity: 0, y: 30 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: reducedMotion ? 0 : 0.7,
              delay: reducedMotion ? 0 : 0.1,
              ease,
            }}
            className="min-w-0 border-t border-white/10"
          >
            {faq.map(({ q, a }, index) => (
              <details
                key={`${q}-${index}`}
                name={`faq-${reactId}`}
                className="group border-b border-white/10"
              >
                <summary
                  className="
                    flex cursor-pointer list-none
                    items-center justify-between gap-6
                    py-5 text-left
                    marker:content-none
                    [&::-webkit-details-marker]:hidden
                    sm:py-6
                  "
                >
                  {/* Question */}
                  <span
                    className="
                      text-base font-semibold leading-relaxed
                      text-gray-300 transition-colors
                      group-hover:text-white
                      group-open:text-white
                      sm:text-lg
                    "
                  >
                    {q}
                  </span>

                  {/* Icône */}
                  <span
                    className="
                      flex h-9 w-9 shrink-0
                      items-center justify-center
                      rounded-full border border-white/10
                      bg-white/[0.03]
                      transition-colors duration-300
                      group-open:border-[#5AC8FA]/30
                      group-open:bg-[#5AC8FA]/10
                    "
                  >
                    <Plus
                      size={18}
                      aria-hidden="true"
                      className="
                        text-gray-400
                        transition-transform duration-300
                        group-open:rotate-45
                        group-open:text-[#5AC8FA]
                      "
                    />
                  </span>
                </summary>

                {/* Réponse */}
                <div className="max-w-xl pb-6 pr-12 text-sm leading-7 text-gray-300 sm:text-base">
                  {a}
                </div>
              </details>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Données structurées FAQ */}
      {jsonLd && faq.length > 0 && (
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
            }).replace(/</g, "\\u003c"),
          }}
        />
      )}
    </Section>
  );
}