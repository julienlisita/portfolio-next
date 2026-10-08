// src/components/about/AboutRole.jsx

import Section from "../layout/Section";

export default function AboutRole() {
  return (
    <Section title="Ce que je fais" className="text-base sm:text-lg lg:text-xl">
      <p>
        J’accompagne les indépendants, artisans et entreprises dans la conception
        de solutions web adaptées à leurs besoins, du site professionnel à
        l’application métier sur mesure.
      </p>

      <p className="mt-4">Selon votre activité et vos objectifs, je peux réaliser :</p>

      <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-300">
        <li>
         des sites professionnels clairs, rapides et optimisés pour présenter
          votre activité, développer votre visibilité et faciliter la prise de contact
        </li>
        <li>
         des applications et outils sur mesure : réservation, espace client,
          back-office, tableau de bord, gestion interne ou processus métier spécifique
        </li>
        <li>
          la mise en ligne, la maintenance et l’évolution de votre site ou
          application dans la durée
        </li>
      </ul>

      <p className="mt-4">
        L’objectif : développer une solution utile, fiable et adaptée au
        fonctionnement réel de votre activité.
      </p>
    </Section>
  );
}