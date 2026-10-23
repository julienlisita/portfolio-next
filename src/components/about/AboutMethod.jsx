// src/components/about/AboutMethod.jsx

import Section from "../layout/Section";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../layout/SectionHeading";

import Button from "../UI/Button";

const pillars = [
  {
    title: "Écoute",
    description: "Comprendre vos objectifs et contraintes",
  },
  {
    title: "Clarté",
    description: "Des choix expliqués simplement",
  },
  {
    title: "Itérations",
    description: "Ajustements rapides et visibles",
  },
  {
    title: "Suivi",
    description: "Documentation et évolutions possibles",
  },
];

const steps = [
  "Analyse du besoin et cadrage du projet",
  "Structure du site et propositions visuelles",
  "Développement par itérations courtes avec points réguliers",
  "Mise en ligne, prise en main et accompagnement",
];

export default function AboutMethod() {
  return (
    <Section
      id="about-method"
      labelledBy="about-method-title"
      bgColor="#222222"
    >
      <SectionWrapper>
        <SectionHeading
          id="about-method-title"
          eyebrow="MA FAÇON DE TRAVAILLER"
          title="Une méthode simple et transparente"
          className="mb-8"
        />

        <div className="max-w-4xl space-y-5 text-base leading-relaxed text-gray-300 sm:text-lg">
          <p>
            Mon rôle est de vous guider et de transformer votre besoin en
            un site clair et efficace, sans jargon inutile. Vous suivez
            l’avancement et validez chaque étape.
          </p>

          <p className="text-sm text-gray-400">
            Pour aller plus loin sur ma méthode de travail :{" "}
            <Button
              variant="text"
              href="/comment-je-travaille"
            >
              Voir comment je travaille ›
            </Button>
          </p>

          <ul className="ml-6 list-disc space-y-3 marker:text-[#5AC8FA]">
            {steps.map((step) => (
              <li key={step}>
                {step}
              </li>
            ))}
          </ul>

          <p className="pt-4 font-medium text-gray-100">
            Ma méthode repose sur quatre piliers :
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="
                rounded-xl
                border border-[#2f2f2f]
                bg-[#2a2a2a]
                p-5
              "
            >
              <h3 className="font-semibold text-gray-100">
                {pillar.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-300">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </Section>
  );
}