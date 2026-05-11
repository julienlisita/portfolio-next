// src/components/services/websiteCreation/WebsiteCreationWhyAndSeo.jsx

import { Zap, Search } from "lucide-react";
import Section from "../../layout/Section";

const whyItems = [
  "Un site plus rapide et plus léger qu’une solution chargée de plugins inutiles",
  "Une structure maîtrisée, pensée pour évoluer avec votre activité",
  "Moins de dépendances techniques et une maintenance plus simple",
  "La possibilité d’ajouter plus tard des options ou fonctionnalités : formulaire personnalisé, actualités, espace admin, réservation…",
];

export default function WebsiteCreationWhyAndSeo() {
  return (
    <Section className="text-base sm:text-lg lg:text-xl">
      <h2 className="text-xl font-semibold mt-10 mb-3 flex items-center gap-2">
        <Zap className="w-5 h-5 text-[#9B59B6]" />
        Pourquoi partir sur une base sur mesure ?
      </h2>

      <ul className="list-none ml-6 space-y-2">
        {whyItems.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Zap className="w-5 h-5 text-[#9B59B6] mt-1" />
            <div className="flex-1">{item}</div>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-10 mb-3 flex items-center gap-2">
        <Search className="w-5 h-5 text-[#9B59B6]" />
        Visibilité locale & référencement
      </h3>

      <p className="text-gray-300 ml-6">
        Le site est structuré pour être clair pour vos visiteurs et compréhensible par Google :
        pages bien organisées, performance, responsive et base SEO adaptée à une activité locale.
      </p>
    </Section>
  );
}