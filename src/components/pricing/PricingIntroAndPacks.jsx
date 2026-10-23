// src/components/pricing/PricingIntroAndPacks.jsx

import { Check } from "lucide-react";

import Section from "../layout/Section";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../layout/SectionHeading";

const packs = [
  {
    title: "Site professionnel",
    subtitle: "Pour présenter votre activité clairement",
    price: "À partir de 900 €",
    description:
      "Une solution claire et rapide à mettre en place, basée sur une structure éprouvée et adaptée à votre identité et à votre activité.",
    items: [
      "4 à 5 pages essentielles",
      "Composants et structure éprouvés",
      "Adaptation à votre identité visuelle",
      "Responsive mobile / desktop",
      "Formulaire de contact ou de demande",
      "Performance & base SEO optimisée",
    ],
  },
  {
    title: "Site sur mesure",
    subtitle: "Pour une identité et une expérience plus travaillées",
    price: "À partir de 1 400 €",
    description:
      "Une conception personnalisée à partir de maquettes, avec une direction visuelle, des interactions et une expérience adaptées à votre projet.",
    items: [
      "Conception à partir de maquettes personnalisées",
      "Design et mise en page sur mesure",
      "Animations et interactions avancées",
      "Accompagnement sur la structure et les contenus",
      "Performance & référencement naturel",
      "Développement responsive",
    ],
  },
  {
    title: "Applications & outils sur mesure",
    subtitle: "Pour digitaliser un besoin métier",
    price: "Sur devis",
    description:
      "Des applications et outils web adaptés à votre fonctionnement pour proposer un service en ligne, centraliser vos informations ou simplifier vos processus.",
    items: [
      "Réservation et espaces utilisateurs",
      "Back-office et tableaux de bord",
      "Gestion de clients, dossiers ou interventions",
      "Processus et logique métier",
      "Connexion à des services externes",
      "Prototype fonctionnel ou MVP",
    ],
  },
];

export default function PricingIntroAndPacks() {
  return (
    <Section
      id="pricing-packs"
      labelledBy="pricing-packs-title"
      bgColor="#222222"
    >
      <SectionWrapper>
        <SectionHeading
          id="pricing-packs-title"
          eyebrow="MES OFFRES"
          title="Une solution adaptée à vos besoins."
          description="Du site professionnel à l'application sur mesure, choisissez une solution adaptée à votre activité et à vos objectifs."
          className="mb-8 sm:mb-10 lg:mb-12"
        />

        <div className="grid gap-6 xl:grid-cols-3">
          {packs.map((pack) => (
            <article
              key={pack.title}
              className="
                flex h-full flex-col
                rounded-2xl border border-[#2f2f2f]
                bg-[#2a2a2a] p-5
                text-gray-200
                sm:p-6
              "
            >
              <h3 className="mb-1 text-center text-lg font-semibold text-gray-100">
                {pack.title}
              </h3>

              <p className="mb-3 text-center text-sm font-medium text-[#5AC8FA]">
                {pack.subtitle}
              </p>

              <p className="mb-5 text-center text-sm leading-relaxed text-gray-400">
                {pack.description}
              </p>

              <ul className="flex-1 space-y-3">
                {pack.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-gray-300"
                  >
                    <Check
                      size={16}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-[#5AC8FA]"
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 border-t border-white/10 pt-5 text-center text-base font-bold text-[#5AC8FA]">
                {pack.price}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-gray-400">
          Ces tarifs sont indicatifs. Le devis final dépend du nombre de
          pages, du contenu fourni, du niveau de design souhaité et des
          fonctionnalités à intégrer.
        </p>
      </SectionWrapper>
    </Section>
  );
}