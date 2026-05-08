/* src/components/home/ProblemSection.jsx */

import HomeSectionWrapper from "./HomeSectionWrapper";
import { Clock, Search, MousePointerClick } from "lucide-react";

const problems = [
  {
    icon: <Search size={22} aria-hidden/>,
    title: "Peu de visibilité",
    description:
      "Votre activité existe, mais vos clients potentiels ne vous trouvent pas ou ne comprennent pas clairement ce que vous proposez.",
  },
  {
    icon: <MousePointerClick size={22} aria-hidden/>,
    title: "Peu de demandes",
    description:
      "Votre site présente votre activité, mais il ne guide pas assez vos visiteurs vers une prise de contact.",
  },
  {
    icon: <Clock size={22} aria-hidden/>,
    title: "Trop de tâches manuelles",
    description:
      "Réponses répétitives, rendez-vous à organiser, formulaires à traiter… certaines actions pourraient être simplifiées.",
  },
];

export default function ProblemSection() {
  return (
    <HomeSectionWrapper
      id="problemes"
      title="Votre site vous aide-t-il vraiment à développer votre activité ?"
    >
      <p className="text-base sm:text-lg lg:text-xl text-gray-300">
        Un site web ne doit pas seulement être joli ou présent en ligne.
        Il doit inspirer confiance, générer des demandes et simplifier une partie
        de votre organisation.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {problems.map((problem) => (
          <div
            key={problem.title}
            className="bg-[#1f1f1f] rounded-2xl p-6 h-full shadow-lg"
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#007AFF]/10 text-[#007AFF]">
              {problem.icon}
            </div>

            <h3 className="text-lg font-semibold text-gray-100 mb-2">
              {problem.title}
            </h3>

            <p className="text-sm sm:text-base text-gray-300">
              {problem.description}
            </p>
          </div>
        ))}
      </div>
    </HomeSectionWrapper>
  );
}