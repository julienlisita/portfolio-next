// src/components/pricing/PricingExamples.jsx

import Section from "../layout/Section";

export default function PricingExamples() {
  return (
    <Section title="Exemples de projets (fourchettes)">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#2f2f2f]">
          <h3 className="font-semibold text-gray-100">Artisan / commerce local</h3>
          <p className="text-gray-300 text-sm mt-1">
           Site de 4–5 pages pour présenter l’activité, les services, les réalisations, les informations pratiques et recevoir des demandes de devis.
          </p>
          <p className="text-[#5AC8FA] font-bold mt-2">≈ 900 à 1 200 €</p>
        </div>

        <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#2f2f2f]">
          <h3 className="font-semibold text-gray-100">Coach / professionnel indépendant</h3>
          <p className="text-gray-300 text-sm mt-1">
           Site conçu sur mesure à partir de maquettes, avec présentation des offres, témoignages, prise de contact et animations personnalisées.
          </p>
          <p className="text-[#5AC8FA] font-bold mt-2">≈ 1 400 à 2 000 €</p>
        </div>
        <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#2f2f2f]">
          <h3 className="font-semibold text-gray-100">
            Cabinet / entreprise de services
          </h3>
          <p className="text-gray-300 text-sm mt-1">
            Réservation en ligne avec gestion des créneaux, notifications et espace administrateur pour suivre les demandes.
          </p>
          <p className="text-[#5AC8FA] font-bold mt-2">≈ 2 200 à 3 500 €+</p>
        </div>
        <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#2f2f2f]">
          <h3 className="font-semibold text-gray-100">
            PME avec besoin métier
          </h3>
          <p className="text-gray-300 text-sm mt-1">
            Application interne pour centraliser les clients et dossiers, suivre leur avancement et gérer les informations depuis un tableau de bord.
          </p>
          <p className="text-[#5AC8FA] font-bold mt-2">Sur devis</p>

        </div>

      </div>
    </Section>
  );
}