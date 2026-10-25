// src/components/home/ProblemSection.jsx

import { ArrowUpRight } from "lucide-react";
import HomeSectionWrapper from "./HomeSectionWrapper";

const problems = [
  {
    number: "01",
    title: "Vous manquez de visibilité",
    description:
      "Votre activité mérite d’être trouvée facilement. Vos futurs clients doivent pouvoir comprendre rapidement ce que vous proposez et pourquoi faire appel à vous.",
  },
  {
    number: "02",
    title: "Vous souhaitez attirer davantage de clients ",
    description:
      "Que vous ayez déjà un site ou non, une présence en ligne claire et professionnelle peut inspirer confiance et faciliter les prises de contact.",
  },
  {
    number: "03",
    title: "Vous perdez du temps sur des tâches répétitives",
    description:
      "Gestion des demandes, rendez-vous, suivi des clients… Des outils adaptés peuvent simplifier votre organisation et vous libérer du temps.",
  },
];

export default function ProblemSection() {
  return (
    <HomeSectionWrapper
      id="problemes"
      eyebrow="VOS ENJEUX"
      title="Des solutions adaptées aux défis de votre activité"
      description="Chaque activité rencontre ses propres défis. Un site ou une application bien pensé peut vous aider à les relever."
    >
      <div className="w-full border-t border-white/10">
        {problems.map((problem) => (
          <div
            key={problem.number}
            className="
              group
              grid grid-cols-1
              gap-2 sm:gap-3
              border-b border-white/10
              py-6 sm:py-8
              md:grid-cols-[70px_1fr_1.2fr_24px]
              md:items-start
              md:gap-6
              transition-colors duration-300
              hover:bg-white/[0.02]
            "
          >
            <span className="text-sm font-semibold text-[#007AFF]">
              {problem.number}
            </span>

            <h3 className="text-lg sm:text-xl font-semibold text-white">
              {problem.title}
            </h3>

            <p className="text-sm sm:text-base leading-relaxed text-gray-400">
              {problem.description}
            </p>

            <ArrowUpRight
              size={20}
              aria-hidden="true"
              className="
                hidden md:block
                text-gray-500
                transition-all duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
                group-hover:text-[#5AC8FA]
              "
            />
          </div>
        ))}
      </div>
    </HomeSectionWrapper>
  );
}