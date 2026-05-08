// src/components/about/AboutJourney.jsx

import Section from "../layout/Section";

export default function AboutJourney() {
  return (
    <>
      {/* Parcours */}
      <Section
        title="Un parcours orienté rigueur et fiabilité"
        className="text-base sm:text-lg lg:text-xl"
      >
        <p>
          J’ai commencé ma carrière dans le développement logiciel en environnement
          exigeant, où la rigueur, la fiabilité et la clarté sont essentielles.
        </p>
        <p className="mt-4">
          Cette expérience m’a donné une méthode de travail structurée : bien
          comprendre le besoin, construire proprement, tester et livrer quelque
          chose de stable et durable.
        </p>
      </Section>

      {/* Transition vers le web */}
      <Section
        title="Du logiciel aux applications web"
        className="text-base sm:text-lg lg:text-xl"
      >
        <p>
          J’ai choisi le développement web pour me rapprocher des utilisateurs
          finaux et voir rapidement l’impact d’un site bien conçu : plus de
          clarté, plus de confiance, plus de demandes entrantes.
        </p>
        <p className="mt-4">
          Aujourd’hui, je conçois des sites et applications web avec{" "}
          <strong>React</strong> et <strong> Next.js</strong>, en mettant l’accent
          sur la performance, l’accessibilité et le référencement naturel.
        </p>
      </Section>
    </>
  );
}