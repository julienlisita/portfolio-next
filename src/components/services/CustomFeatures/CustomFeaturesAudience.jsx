// src/components/services/customFeatures/CustomFeaturesAudience.jsx

import { Users, CheckCircle } from "lucide-react";
import Section from "../../layout/Section";

const items = [
  "Indépendants qui perdent du temps avec des tâches répétitives (rendez-vous, demandes, suivi…)",
  "Entreprises de services qui reçoivent beaucoup de demandes et ont du mal à les organiser",
  "Structures qui veulent gagner en clarté dans la gestion de leurs contenus ou informations",
  "Porteurs de projet qui veulent concrétiser une idée d’outil ou tester un concept",
];

export default function CustomFeaturesAudience() {
  return (
    <Section className="text-base sm:text-lg lg:text-xl">
      <h2 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
        <Users className="w-5 h-5 text-[#007AFF]" />
        Pour qui ?
      </h2>

      <ul className="list-none ml-6 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-[#007AFF] mt-1" />
            <div className="flex-1">{item}</div>
          </li>
        ))}
      </ul>
    </Section>
  );
}