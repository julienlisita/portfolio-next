// src/components/home/WhyWorkWithMe.jsx

import HomeSectionWrapper from "./HomeSectionWrapper";
import { Check } from "lucide-react";

const points = [
{
    title: "Un accompagnement clair",
    description:
      "Je vous aide à cadrer le besoin, prioriser les fonctionnalités utiles et avancer étape par étape.",
  },
  {
    title: "Une solution pensée pour vos utilisateurs",
    description:
      "Structure, contenus et parcours sont conçus pour faciliter la compréhension et la prise de contact.",
  },
  {
    title: "Une base rapide et durable",
    description:
      "Le site est développé proprement, avec une attention portée à la performance, au SEO et à l’évolutivité.",
  },
  {
    title: "Des échanges simples et transparents",
    description:
      "Vous savez ce qui est prévu, pourquoi c’est fait et comment votre projet avance.",
  },
];

export default function WhyWorkWithMe() {
  return (
    <HomeSectionWrapper
      id="pourquoi"
      title="Une façon de travailler simple et efficace"
    >
      <p className="text-base sm:text-lg lg:text-xl text-gray-300">
        Mon objectif est de vous accompagner avec une méthode simple, des choix expliqués clairement et une solution pensée pour durer.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {points.map((point) => (
          <div
            key={point.title}
            className="flex items-start gap-3 bg-[#1f1f1f] rounded-2xl p-4 sm:p-5"
          >
            <Check
              className="mt-1 flex-shrink-0 text-[#007AFF]"
              size={20}
            />
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-1 text-gray-100">
                {point.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </HomeSectionWrapper>
  );
}