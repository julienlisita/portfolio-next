// src/components/services/maintenance/MaintenanceTerms.jsx

import { ClipboardList, CalendarCheck, Ticket, FileText } from "lucide-react";
import Section from "../../layout/Section";

const items = [
  {
    icon: CalendarCheck,
    title: "Forfait mensuel",
    desc: "pour un suivi régulier, des vérifications préventives et une priorité en cas de besoin.",
  },
  {
    icon: Ticket,
    title: "Intervention à la demande",
    desc: "pour corriger un problème ou ajouter une évolution précise, sans engagement mensuel.",
  },
  {
    icon: FileText,
    title: "Suivi clair",
    desc: "avec un résumé des actions réalisées si vous souhaitez garder une trace des interventions.",
  },
];

export default function MaintenanceTerms() {
  return (
    <Section className="text-base sm:text-lg lg:text-xl">
      <h2 className="text-xl font-semibold mt-10 mb-3 flex items-center gap-2">
        <ClipboardList className="w-5 h-5 text-[#007AFF]" />
        Deux façons de fonctionner
      </h2>

      <ul className="list-none ml-6 space-y-2">
        {items.map((it) => (
          <li key={it.title} className="flex items-start gap-2">
            <it.icon className="w-5 h-5 text-[#007AFF] mt-1 shrink-0" />
            <div className="flex-1">
              <strong>{it.title}</strong> — {it.desc}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}