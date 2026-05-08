// src/components/pricing/PricingIntroAndPacks.jsx

import Section from "../layout/Section";

const packs = [
  {
    title: "Site vitrine essentiel",
    subtitle: "Pour présenter votre activité clairement",
    price: "À partir de 900 €",
    description:
      "Une base professionnelle pour inspirer confiance, présenter vos services et faciliter la prise de contact.",
    items: [
      "4 à 5 pages essentielles",
      "Design clair adapté à votre activité",
      "Site responsive mobile / desktop",
      "Formulaire de contact ou formulaire adapté (devis, candidature…)",
      "Base SEO propre",
      "Mise en ligne accompagnée",
    ],
  },
  {
    title: "Site vitrine personnalisé",
    subtitle: "Pour un rendu plus spécifique",
    price: "≈ 1 000 à 1 400 €",
    description:
      "Une conception plus poussée si votre activité demande une structure, des contenus ou un design plus travaillés.",
    items: [
      "Structure pensée pour guider vos visiteurs vers le contact",
      "Message clarifié pour mieux expliquer votre activité",
      "Design plus travaillé et cohérent",
      "Accompagnement sur les contenus (textes et organisation)",
      "Optimisation SEO renforcée",
    ],
  },
  {
    title: "Site avec fonctionnalités",
    subtitle: "Pour gagner du temps au quotidien",
    price: "À partir de 1 800 €",
    description:
      "Un site enrichi avec des outils utiles pour simplifier votre organisation ou automatiser certaines tâches.",
    items: [
      "Espace administrateur",
      "Réservation avec gestion des créneaux",
      "Espace client",
      "Gestion de contenus ou de demandes",
      "Notifications",
      "Logique métier selon votre activité",
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