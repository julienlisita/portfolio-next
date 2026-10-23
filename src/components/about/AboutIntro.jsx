// src/components/about/AboutIntro.jsx

import Section from "../layout/Section";
import SectionWrapper from "../layout/SectionWrapper";

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
        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {informations.map((information) => (
            <li
              key={information.label}
              className="
                rounded-xl
                border border-[#2f2f2f]
                bg-[#2a2a2a]
                p-5
              "
            >
              <h2 className="mb-3 text-sm font-semibold text-[#5AC8FA]">
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
            </li>
          ))}
        </ul>
      </SectionWrapper>
    </Section>
  );
}