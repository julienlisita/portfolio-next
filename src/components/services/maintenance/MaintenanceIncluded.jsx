// src/components/services/maintenance/MaintenanceIncluded.jsx

import { LifeBuoy, Wrench, Shield, Gauge, ListChecks, ClipboardList } from "lucide-react";
import Section from "../../layout/Section";

const items = [
  { icon: Wrench, text: "Corriger rapidement les bugs ou comportements inattendus" },
  { icon: Shield, text: "Limiter les risques liés aux mises à jour, formulaires ou services externes" },
  { icon: Gauge, text: "Conserver un site rapide et agréable à utiliser" },
  { icon: ListChecks, text: "Ajouter de petites évolutions sans relancer un projet complet" },
  { icon: ClipboardList, text: "Avoir un interlocuteur qui connaît votre site et peut vous conseiller" },
];

export default function MaintenanceIncluded() {
  return (
     <Section className="text-base sm:text-lg lg:text-xl">
      <h2 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
        <LifeBuoy className="w-5 h-5 text-[#007AFF]" />
        Ce que le suivi permet de garder sous contrôle
      </h2>

      <ul className="list-none ml-6 space-y-2">
        {items.map((it) => (
          <li key={it.text} className="flex items-start gap-2">
            <it.icon className="w-5 h-5 text-[#007AFF] mt-1 shrink-0" />
            <div className="flex-1">{it.text}</div>
          </li>
        ))}
      </ul>
    </Section>
  );
}