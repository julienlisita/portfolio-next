// src/components/pricing/PricingExamples.jsx

import Section from "../layout/Section";

export default function PricingExamples() {
  return (
    <Section title="Exemples de projets (fourchettes)">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#2f2f2f]">
          <h3 className="font-semibold text-gray-100">Artisan / commerce</h3>
          <p className="text-gray-300 text-sm mt-1">
            4–5 pages, design propre, contact + infos pratiques
          </p>
          <p className="text-[#5AC8FA] font-bold mt-2">≈ 900 à 1 100 €</p>
        </div>

        <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#2f2f2f]">
          <h3 className="font-semibold text-gray-100">Coach / thérapeute</h3>
          <p className="text-gray-300 text-sm mt-1">
            contenu plus travaillé, sections dédiées, accompagnement visuel
          </p>
          <p className="text-[#5AC8FA] font-bold mt-2">≈ 1000 à 1400 €</p>
        </div>
        <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#2f2f2f]">
          <h3 className="font-semibold text-gray-100">
            Site avec formulaire personnalisé
          </h3>
          <p className="text-gray-300 text-sm mt-1">
            demande de devis, candidature ou rendez-vous via formulaire personnalisé
          </p>
          <p className="text-[#5AC8FA] font-bold mt-2">≈ 1 100 à 1 600 €</p>
        </div>
        <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#2f2f2f]">
          <h3 className="font-semibold text-gray-100">
            Réservation + espace admin
          </h3>
          <p className="text-gray-300 text-sm mt-1">
            créneaux, réservations, gestion et suivi via un espace sécurisé
          </p>
          <p className="text-[#5AC8FA] font-bold mt-2">≈ 2 200 à 3 500 €+</p>

        </div>

      </div>
    </Section>
  );
}