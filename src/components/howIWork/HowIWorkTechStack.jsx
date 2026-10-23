// src/components/howIWork/HowIWorkTechStack.jsx

import Section from "../layout/Section";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../layout/SectionHeading";

import TechCard from "./TechCard";

import { technologies } from "../../data/technologies";

const categories = [
  {
    id: "frontend",
    title: "Front-end",
    color: "#007AFF",
  },
  {
    id: "backend",
    title: "Back-end & données",
    color: "#007AFF",
  },
  {
    id: "deployment",
    title: "Déploiement & outils",
    color: "#007AFF",
  },
  {
    id: "complementary",
    title: "Complément (profil technique)",
    color: "#9B59B6",
    description:
      "Avant le web, j’ai travaillé sur des projets plus techniques (C, C++, Java). Ça renforce ma rigueur et ma capacité à concevoir des solutions robustes.",
  },
];

export default function HowIWorkTechStack() {
  return (
    <Section
      id="how-i-work-tech-stack"
      labelledBy="how-i-work-tech-stack-title"
    >
      <SectionWrapper>
        <SectionHeading
          id="how-i-work-tech-stack-title"
          eyebrow="TECHNOLOGIES"
          title="Mes choix techniques"
          description="Pour garantir performance, SEO et maintenabilité, j’utilise une stack moderne. Si vous n’êtes pas particulièrement technique, cette partie est facultative."
          className="mb-10 sm:mb-12"
        />

        <div className="space-y-12">
          {categories.map((category) => {
            const items = technologies.filter(
              (technology) => technology.category === category.id
            );

            return (
              <div key={category.id}>
                <h3 className="mb-5 text-lg font-semibold text-gray-100">
                  {category.title}
                </h3>

                {category.description && (
                  <p className="mb-6 max-w-4xl text-sm leading-relaxed text-gray-300 sm:text-base">
                    {category.description}
                  </p>
                )}

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
                  {items.map((technology) => (
                    <TechCard
                      key={technology.name}
                      {...technology}
                      color={category.color}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-gray-400">
          Retrouvez également mes projets sur{" "}
          <a
            href="https://github.com/julienlisita"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#5AC8FA] transition-colors hover:underline"
          >
            GitHub
          </a>
          .
        </p>
      </SectionWrapper>
    </Section>
  );
}