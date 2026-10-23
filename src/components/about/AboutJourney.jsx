// src/components/about/AboutJourney.jsx

import Section from "../layout/Section";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../layout/SectionHeading";

export default function AboutJourney() {
  return (
    <>
      {/* Parcours professionnel */}
      <Section
        id="about-journey"
        labelledBy="about-journey-title"
        bgColor="#222222"
      >
        <SectionWrapper>
          <SectionHeading
            id="about-journey-title"
            eyebrow="MON PARCOURS"
            title="Un parcours orienté rigueur et fiabilité"
            className="mb-8"
          />

          <div className="max-w-4xl space-y-5 text-base leading-relaxed text-gray-300 sm:text-lg">
            <p>
              J’ai commencé ma carrière dans le développement logiciel en
              environnement exigeant, où la rigueur, la fiabilité et la
              clarté sont essentielles.
            </p>

            <p>
              Cette expérience m’a donné une méthode de travail structurée :
              bien comprendre le besoin, construire proprement, tester et
              livrer quelque chose de stable et durable.
            </p>
          </div>
        </SectionWrapper>
      </Section>

      {/* Transition vers le web */}
      <Section
        id="about-web"
        labelledBy="about-web-title"
      >
        <SectionWrapper>
          <SectionHeading
            id="about-web-title"
            eyebrow="MON ÉVOLUTION"
            title="Du logiciel aux applications web"
            className="mb-8"
          />

          <div className="max-w-4xl space-y-5 text-base leading-relaxed text-gray-300 sm:text-lg">
            <p>
              J’ai choisi le développement web pour me rapprocher des
              utilisateurs finaux et concevoir des solutions directement
              utiles : présenter une activité, simplifier un parcours ou
              répondre à un besoin métier.
            </p>

            <p>
              Aujourd’hui, je conçois des sites et applications web avec{" "}
              <strong className="font-semibold text-gray-100">
                React
              </strong>{" "}
              et{" "}
              <strong className="font-semibold text-gray-100">
                Next.js
              </strong>
              , en mettant l’accent sur la performance, l’accessibilité et
              le référencement naturel.
            </p>
          </div>
        </SectionWrapper>
      </Section>
    </>
  );
}