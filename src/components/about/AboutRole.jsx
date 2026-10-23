// src/components/about/AboutRole.jsx

import Section from "../layout/Section";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../layout/SectionHeading";

export default function AboutRole() {
  return (
    <Section
      id="about-role"
      labelledBy="about-role-title"
    >
      <SectionWrapper>
        <SectionHeading
          id="about-role-title"
          eyebrow="MON ACTIVITÉ"
          title="Ce que je fais"
          className="mb-8"
        />

        <div className="max-w-4xl space-y-5 text-base leading-relaxed text-gray-300 sm:text-lg">
          <p>
            J’accompagne les indépendants, artisans et entreprises dans la
            conception de solutions web adaptées à leurs besoins, du site
            professionnel à l’application métier sur mesure.
          </p>

          <p>
            Selon votre activité et vos objectifs, je peux réaliser :
          </p>

          <ul className="ml-6 list-disc space-y-3 marker:text-[#5AC8FA]">
            <li>
              Des sites professionnels clairs, rapides et optimisés pour
              présenter votre activité, développer votre visibilité et
              faciliter la prise de contact.
            </li>

            <li>
              Des applications et outils sur mesure : réservation, espace
              client, back-office, tableau de bord, gestion interne ou
              processus métier spécifique.
            </li>

            <li>
              La mise en ligne, la maintenance et l’évolution de votre site
              ou application dans la durée.
            </li>
          </ul>

          <p>
            L’objectif : développer une solution utile, fiable et adaptée au
            fonctionnement réel de votre activité.
          </p>
        </div>
      </SectionWrapper>
    </Section>
  );
}