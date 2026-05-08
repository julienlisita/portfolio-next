// src/components/about/AboutRole.jsx

import Section from "../layout/Section";

export default function AboutRole() {
  return (
    <Section title="Ce que je fais" className="text-base sm:text-lg lg:text-xl">
      <p>
        J’accompagne les artisans, indépendants, commerces et petites entreprises
        dans la création de sites web professionnels, clairs et efficaces.
      </p>

      <p className="mt-4">Selon votre activité et vos objectifs, je peux réaliser :</p>

      <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-300">
        <li>
          des sites vitrines pour présenter votre activité, vos services et
          faciliter la prise de contact
        </li>
        <li>
          des sites avec des fonctionnalités sur mesure : réservation en ligne,
          formulaires avancés, espace administrable, candidatures…
        </li>
        <li>
          la mise en ligne complète (hébergement, configuration) et le suivi
          après livraison
        </li>
      </ul>

      <p className="mt-4">
        L’objectif est simple : un site rapide, bien référencé et pensé pour durer.
      </p>
    </Section>
  );
}