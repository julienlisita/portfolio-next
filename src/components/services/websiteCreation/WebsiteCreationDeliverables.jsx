// src/components/services/websiteCreation/WebsiteCreationDeliverables.jsx

import { ListChecks, Layout } from "lucide-react";
import Section from "../../layout/Section";

const items = [
  "Une présentation claire de votre activité et de vos services",
  "Un design professionnel cohérent avec votre image",
  "Une navigation simple pour guider vos visiteurs vers le contact",
  "Un formulaire adapté à votre activité (devis, candidature, demande…)",
  "Un site rapide et agréable sur mobile",
  "Une base SEO propre pour être visible localement",
  "Une mise en ligne accompagnée, avec conseils pour la suite",
];

export default function WebsiteCreationDeliverables() {
  return (
    <Section className="text-base sm:text-lg lg:text-xl">
      <h2 className="text-xl font-semibold mt-10 mb-3 flex items-center gap-2">
        <ListChecks className="w-5 h-5 text-[#007AFF]" />
        Ce que votre site doit réellement vous apporter
      </h2>

      <ul className="list-none ml-6 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Layout className="w-5 h-5 text-[#007AFF] mt-1" />
            <div className="flex-1">{item}</div>
          </li>
        ))}
      </ul>
    </Section>
  );
}