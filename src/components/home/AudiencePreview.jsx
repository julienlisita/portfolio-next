// src/components/home/AudiencePreview.jsx

import HomeSectionWrapper from "./HomeSectionWrapper";

export default function AudiencePreview() {
  return (
    <HomeSectionWrapper id="pour-qui" title="Pour qui ce type de projet est adapté ?">
      <p className="text-base sm:text-lg lg:text-xl">
        J’accompagne les indépendants et entreprises qui souhaitent développer leur
        présence en ligne ou disposer d’outils adaptés à leur activité.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AudienceCard
          title="Indépendants & artisans"
          description="Coach, artisan, consultant, thérapeute, photographe… Une présence web claire pour présenter vos services, faciliter la prise de contact ou proposer de la réservation."
        />
        <AudienceCard
          title="TPE & PME"
          description="Digitalisez un processus, centralisez vos informations ou développez un outil adapté au fonctionnement de votre entreprise."
        />
        <AudienceCard
          title="Porteurs de projet & services"
          description="Développez un MVP, un espace client, un outil interne ou une application adaptée à un besoin spécifique."
        />
      </div>
    </HomeSectionWrapper>
  );
}

function AudienceCard({ title, description }) {
  return (
    <div className="bg-[#1f1f1f] rounded-2xl p-6 h-full flex flex-col shadow-lg">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-200">{description}</p>
    </div>
  );
}