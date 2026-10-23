// src/components/pricing/PricingExamples.jsx

import Section from "../layout/Section";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../layout/SectionHeading";

const examples = [
  {
    title: "Artisan / commerce local",
    description:
      "Site de 4–5 pages pour présenter l’activité, les services, les réalisations, les informations pratiques et recevoir des demandes de devis.",
    price: "≈ 900 à 1 200 €",
  },
  {
    title: "Coach / professionnel indépendant",
    description:
      "Site conçu sur mesure à partir de maquettes, avec présentation des offres, témoignages, prise de contact et animations personnalisées.",
    price: "≈ 1 400 à 2 000 €",
  },
  {
    title: "Cabinet / entreprise de services",
    description:
      "Réservation en ligne avec gestion des créneaux, notifications et espace administrateur pour suivre les demandes.",
    price: "≈ 2 200 à 3 500 €+",
  },
  {
    title: "PME avec besoin métier",
    description:
      "Application interne pour centraliser les clients et dossiers, suivre leur avancement et gérer les informations depuis un tableau de bord.",
    price: "Sur devis",
  },
];

export default function PricingExamples() {
  return (
    <Section
      id="pricing-examples"
      labelledBy="pricing-examples-title"
      bgColor="#222222"
    >
      <SectionWrapper>
        <SectionHeading
          id="pricing-examples-title"
          eyebrow="EXEMPLES CONCRETS"
          title="Quelques exemples de budgets."
          description="Des fourchettes indicatives pour mieux comprendre le budget à prévoir selon le type de projet."
          className="mb-8 sm:mb-10 lg:mb-12"
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {examples.map((example) => (
            <article
              key={example.title}
              className="
                flex h-full flex-col
                rounded-xl border border-[#2f2f2f]
                bg-[#2a2a2a] p-5
              "
            >
              <h3 className="font-semibold text-gray-100">
                {example.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-300">
                {example.description}
              </p>

              <p className="mt-6 border-t border-white/10 pt-4 font-bold text-[#5AC8FA]">
                {example.price}
              </p>
            </article>
          ))}
        </div>
      </SectionWrapper>
    </Section>
  );
}