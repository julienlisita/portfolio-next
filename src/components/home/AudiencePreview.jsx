// src/components/home/AudiencePreview.jsx

import HomeSectionWrapper from "./HomeSectionWrapper";

export default function AudiencePreview() {
  return (
    <HomeSectionWrapper id="pour-qui" title="Pour qui ce type de projet est adapté ?">
      <p className="text-base sm:text-lg lg:text-xl">
        J’accompagne surtout les professionnels qui veulent une présence en ligne claire,
        utile et capable de soutenir leur activité au quotidien.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AudienceCard
          title="Indépendants & freelances"
          description="Coach, consultant, thérapeute, photographe… Présentez vos services clairement et facilitez la prise de contact."
        />
        <AudienceCard
          title="Artisans & petites entreprises"
          description="Bâtiment, services, restauration, commerces locaux… Une présence professionnelle pour inspirer confiance et recevoir plus de demandes."
        />
        <AudienceCard
          title="Petites structures & services"
          description="Associations, services à la personne, cabinets… Des informations accessibles, des formulaires utiles et une organisation simplifiée."
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