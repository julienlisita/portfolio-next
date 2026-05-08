// src/components/home/TarifsTeaser.jsx

import HomeSectionWrapper from "./HomeSectionWrapper";
import { BadgeEuro, Clock, Wrench } from "lucide-react";

export default function TarifsTeaser() {
  return (
    <HomeSectionWrapper
      id="tarifs"
      title="Des tarifs clairs et adaptés"
      link={{ href: "/tarifs", text: "Voir les tarifs" }}
    >
      <p className="text-base sm:text-lg lg:text-xl text-gray-300">
        Chaque projet est estimé selon vos objectifs, vos contenus et les fonctionnalités nécessaires. L’idée : vous proposer une solution claire, utile et adaptée à votre budget.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <TeaserCard
          icon={<BadgeEuro size={22} aria-hidden />}
          title="Site vitrine"
          desc="À partir de 900 € – site clair et structuré pour faciliter les prises de contact"
        />
        <TeaserCard
          icon={<Wrench size={22} aria-hidden />}
          
          title="Fonctionnalités & outils"
          desc="Sur devis – réservation, espace admin, automatisation selon votre activité"
        />
        <TeaserCard
          icon={<Clock size={22} aria-hidden />}
          title="Délais"
          desc="En général 2 à 4 semaines selon le projet"
        />
      </div>
    </HomeSectionWrapper>
  );
}

function TeaserCard({ icon, title, desc }) {
  return (
    <div className="bg-[#1f1f1f] rounded-2xl p-6 h-full shadow-lg">
      <div className="flex items-start gap-3">
          <div className="mt-0.5 inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#007AFF]/10 text-[#007AFF]">
            {icon}
          </div>
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-100">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-gray-200 mt-1">{desc}</p>
        </div>
      </div>
    </div>
  );
}