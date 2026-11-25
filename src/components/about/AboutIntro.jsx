// src/components/about/AboutIntro.jsx

import Section from "../layout/Section";
import SectionWrapper from "../layout/SectionWrapper";
import { RevealGroup, RevealItem } from "../animations/RevealGroup";

const informations = [
  {
    label: "Spécialités",
    value: "React, Next.js, Node.js",
  },
  {
    label: "Localisation",
    value: "Bordeaux",
    detail: "Travail à distance possible",
  },
  {
    label: "Clients",
    value: "Artisans, indépendants, commerces, TPE/PME",
  },
  {
    label: "Approche",
    value: "Claire, itérative, orientée résultat",
  },
];

export default function AboutIntro() {
  return (
    <Section
      id="about-intro"
      aria-label="Mon profil en bref"
    >
      <SectionWrapper>
        <RevealGroup as="ul" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {informations.map((information) => (
            <RevealItem
              as="li"
              key={information.label}
              className="
                rounded-xl
                border border-line-subtle
                bg-surface-raised
                p-5
              "
            >
              <h2 className="mb-3 text-sm font-semibold text-accent">
                {information.label}
              </h2>

              <p className="text-sm leading-relaxed text-gray-200">
                {information.value}
              </p>

              {information.detail && (
                <p className="mt-1 text-xs text-gray-400">
                  {information.detail}
                </p>
              )}
            </RevealItem>
          ))}
        </RevealGroup>
      </SectionWrapper>
    </Section>
  );
}