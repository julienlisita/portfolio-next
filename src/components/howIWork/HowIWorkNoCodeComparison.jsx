// src/components/howIWork/HowIWorkNoCodeComparison.jsx

import Section from "../layout/Section";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../layout/SectionHeading";

const turnkeyFeatures = [
  "Structure souvent figée",
  "SEO limité ou peu maîtrisable",
  "Performances variables",
  "Dépendance à une plateforme",
  "Évolutions parfois coûteuses ou bloquées",
];

const customFeatures = [
  "Structure pensée pour vos clients",
  "SEO propre dès la base",
  "Site rapide et léger",
  "Vous êtes propriétaire de votre site",
  "Évolutif sans tout refaire",
];

export default function HowIWorkNoCodeComparison() {
  return (
    <Section
      id="how-i-work-comparison"
      labelledBy="how-i-work-comparison-title"
      bgColor="#222222"
    >
      <SectionWrapper>
        <SectionHeading
          id="how-i-work-comparison-title"
          eyebrow="CHOIX DE DÉVELOPPEMENT"
          title="Pourquoi ne pas utiliser un outil clé en main ?"
          description="Des solutions comme Wix, WordPress.com ou des offres tout-en-un peuvent convenir pour démarrer rapidement. Mais dès qu’un site doit être clair, bien référencé et évoluer dans le temps, leurs limites peuvent apparaître."
          className="mb-8 sm:mb-10 lg:mb-12"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-xl border border-[#2f2f2f] bg-[#1e1e1e] p-5 sm:p-6">
            <h3 className="mb-5 font-semibold text-gray-100">
              Solutions clé en main
            </h3>

            <ul className="space-y-3">
              {turnkeyFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm leading-relaxed text-gray-300 sm:text-base"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500"
                  />

                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-[#2f2f2f] bg-[#1e1e1e] p-5 sm:p-6">
            <h3 className="mb-5 font-semibold text-gray-100">
              Ma méthode
            </h3>

            <ul className="space-y-3">
              {customFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm leading-relaxed text-gray-300 sm:text-base"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5AC8FA]"
                  />

                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <p className="mt-6 max-w-4xl text-sm leading-relaxed text-gray-400">
          L’objectif n’est pas d’utiliser « plus de technique », mais la bonne
          solution pour un site fiable, durable et adapté à votre activité.
        </p>
      </SectionWrapper>
    </Section>
  );
}