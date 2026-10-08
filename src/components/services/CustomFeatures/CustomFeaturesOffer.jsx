// src/components/services/customFeatures/CustomFeaturesOffer.jsx

import { Layers, Wrench } from "lucide-react";
import Section from "../../layout/Section";

const items = [
  "Réservation en ligne avec créneaux, demandes et notifications",
  "Espace administrateur pour gérer votre activité et vos contenus",
  "Espace client sécurisé avec accès à des informations ou services personnalisés",
  "Tableau de bord métier pour centraliser et suivre les informations importantes",
  "Gestion de demandes, dossiers, clients ou interventions",
  "Outil interne pour simplifier un planning, un suivi ou un processus métier",
  "Connexion à des services ou API externes",
  "Logique métier adaptée au fonctionnement de votre activité",
];

export default function CustomFeaturesOffer() {
  return (
     <Section className="text-base sm:text-lg lg:text-xl">
        <h2 className="text-xl font-semibold mt-10 mb-3 flex items-center gap-2">
          <Layers className="w-5 h-5 text-[#007AFF]" />
            Des outils concrets pour votre activité
        </h2>

      <ul className="list-none ml-6 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Wrench className="w-5 h-5 text-[#007AFF] mt-1" />
            <div className="flex-1">{item}</div>
          </li>
        ))}
      </ul>
    </Section>
  );
}