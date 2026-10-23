// src/components/howIWork/HowIWorkMethod.jsx

import Section from "../layout/Section";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../layout/SectionHeading";

import Button from "../UI/Button";

const steps = [
  {
    title: "Échange initial",
    description:
      "On clarifie vos objectifs, votre cible, vos pages et vos priorités (et votre budget).",
    bonus:
      "Livrable : un mini-cadrage (plan + périmètre + prochaines étapes).",
  },
  {
    title: "Conception",
    description:
      "Je vous conseille sur la structure et le design. Soit à partir de votre maquette, soit je propose une base simple et cohérente.",
    bonus:
      "Livrable : structure de page + contenu conseillé (et maquette Figma si besoin).",
  },
  {
    title: "Développement",
    description:
      "Je développe votre site et je vous montre l’avancement régulièrement, par petites itérations.",
    bonus: "Livrable : démos / validations progressives.",
  },
  {
    title: "Mise en ligne",
    description:
      "Votre site est accessible à vos clients, optimisé pour mobile et prêt pour le référencement.",
    bonus:
      "Livrable : mise en ligne + réglages SEO de base + conseils.",
  },
  {
    title: "Suivi & maintenance",
    description:
      "Je reste disponible pour les corrections, mises à jour, optimisations et petites évolutions.",
    bonus:
      "Option : forfait mensuel ou interventions ponctuelles.",
  },
];

export default function HowIWorkMethod() {
  return (
    <Section
      id="method"
      labelledBy="method-title"
    >
      <SectionWrapper>
        <SectionHeading
          id="method-title"
          eyebrow="MON PROCESSUS"
          title="Ma méthode de travail"
          description="Un parcours simple, avec des points de validation à chaque étape."
          className="mb-8 sm:mb-10 lg:mb-12"
        />

        <ol className="relative max-w-4xl border-l border-[#2f2f2f] pl-8 sm:pl-10">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative pb-8 last:pb-0"
            >
              <span
                aria-hidden="true"
                className="
                  absolute -left-[45px] top-0
                  flex h-7 w-7
                  items-center justify-center
                  rounded-full
                  border border-[#2f2f2f]
                  bg-[#2a2a2a]
                  text-xs font-semibold
                  text-[#5AC8FA]
                  sm:-left-[53px]
                "
              >
                {index + 1}
              </span>

              <h3 className="text-base font-semibold text-gray-100 sm:text-lg">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-300 sm:text-base">
                {step.description}
              </p>

              <p className="mt-2 text-xs leading-relaxed text-gray-400 sm:text-sm">
                {step.bonus}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-8">
          <Button href="/services" variant="text">
            Voir mes services ›
          </Button>
        </div>
      </SectionWrapper>
    </Section>
  );
}