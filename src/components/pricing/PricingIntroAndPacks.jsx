// src/components/pricing/PricingIntroAndPacks.jsx

import Section from "../layout/Section";

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
    <Section>
      <p className="text-left text-base sm:text-lg lg:text-xl mt-4 mb-4 text-gray-300">
        Les tarifs dépendent du niveau de personnalisation, du contenu à intégrer
        et des fonctionnalités nécessaires. Voici des repères pour vous situer
        avant un devis personnalisé.
      </p>

      <div className="grid lg:grid-cols-3 gap-6 mt-6">
        {packs.map((pack) => (
          <div
            key={pack.title}
            className="bg-[#2a2a2a] p-5 rounded-2xl text-gray-200 border border-[#2f2f2f] flex flex-col"
          >
            <h3 className="font-semibold text-gray-100 text-lg mb-1 text-center">
              {pack.title}
            </h3>

            <p className="text-sm text-[#007AFF] text-center font-medium mb-3">
              {pack.subtitle}
            </p>

            <p className="text-sm text-gray-400 text-center mb-4">
              {pack.description}
            </p>

            <ul className="text-sm text-gray-300 space-y-2 flex-1">
              {pack.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

            <p className="text-[#5AC8FA] font-bold text-base mt-5 text-center">
              {pack.price}
            </p>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-400 mt-4">
        Ces tarifs sont indicatifs. Le devis final dépend du nombre de pages,
        du contenu fourni, du niveau de design souhaité et des fonctionnalités à intégrer.
      </p>
    </Section>
  );
}