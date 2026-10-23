// src/components/howIWork/HowIWorkOutcomes.jsx

import { Check } from "lucide-react";

import Section from "../layout/Section";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../layout/SectionHeading";

const outcomes = [
  "Un site clair et professionnel qui inspire confiance",
  "Une navigation simple et agréable sur mobile",
  "Une base SEO propre (structure, titres, performance)",
  "Un site sur mesure qui peut évoluer (pages, fonctionnalités, SEO)",
  "Mise en ligne incluse + accompagnement",
];

export default function HowIWorkOutcomes() {
  return (
    <Section
      id="how-i-work-outcomes"
      labelledBy="how-i-work-outcomes-title"
    >
      <SectionWrapper>
        <SectionHeading
          id="how-i-work-outcomes-title"
          eyebrow="LES RÉSULTATS"
          title="Ce que vous obtenez"
          className="mb-8 sm:mb-10 lg:mb-12"
        />

        <ul className="grid max-w-5xl gap-4 sm:grid-cols-2">
          {outcomes.map((outcome) => (
            <li
              key={outcome}
              className="
                flex items-start gap-3
                rounded-xl
                border border-[#2f2f2f]
                bg-[#2a2a2a]
                p-5
              "
            >
              <Check
                size={20}
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-[#5AC8FA]"
              />

              <span className="text-sm leading-relaxed text-gray-300 sm:text-base">
                {outcome}
              </span>
            </li>
          ))}
        </ul>
      </SectionWrapper>
    </Section>
  );
}