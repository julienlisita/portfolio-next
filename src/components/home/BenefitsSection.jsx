/* src/components/home/BenefitsSection.jsx */

import HomeSectionWrapper from "./HomeSectionWrapper";
import { TrendingUp, Clock, Users, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: <TrendingUp size={22} aria-hidden/>,
    title: "Plus de demandes qualifiées",
    description:
      "Des visiteurs qui comprennent rapidement votre offre et savent comment vous contacter.",
  },
  {
    icon: <Users size={22} aria-hidden/>,
    title: "Une image plus crédible",
    description:
      "Un site cohérent qui rassure dès les premières secondes et valorise votre activité.",
  },
  {
    icon: <Clock size={22} aria-hidden/>,
    title: "Un gain de temps concret",
    description:
      "Moins d’allers-retours, des demandes mieux cadrées et une organisation simplifiée.",
  },
  {
    icon: <Sparkles size={22} aria-hidden/>,
    title: "Une base prête à évoluer",
    description:
      "Votre site peut évoluer facilement avec votre activité, sans repartir de zéro.",
  },
];

export default function BenefitsSection() {
  return (
    <HomeSectionWrapper
      id="benefices"
      title="Ce que ça change concrètement pour vous"
    >
      <p className="text-base sm:text-lg lg:text-xl text-gray-300">
        L’objectif n’est pas seulement d’avoir un site, mais un outil utile
        pour votre activité, pensé pour générer des résultats et simplifier votre organisation.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="bg-[#1f1f1f] rounded-2xl p-6 h-full shadow-lg flex flex-col"
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#007AFF]/10 text-[#007AFF]">
              {benefit.icon}
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-gray-100 mb-2">
              {benefit.title}
            </h3>

            <p className="text-sm sm:text-base text-gray-300 flex-1">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </HomeSectionWrapper>
  );
}