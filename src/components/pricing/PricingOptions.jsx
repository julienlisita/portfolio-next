// src/components/pricing/PricingOptions.jsx

import Section from "../layout/Section";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../layout/SectionHeading";

const commonOptions = [
  {
    title: "Page supplémentaire",
    price: "+120 à 180 € / page",
  },
  {
    title: "Formulaire personnalisé",
    price: "+80 à 150 €",
  },
  {
    title: "Design & maquettes (Figma)",
    price: "+250 à 500 €",
  },
  {
    title: "Aide au contenu",
    price: "+100 à 300 €",
  },
];

const advancedOptions = [
  {
    title: "Zone d’actualités / blog",
    price: "+300 à 600 €",
  },
  {
    title: "Espace administrateur simple",
    price: "+800 € et +",
  },
  {
    title: "Réservation avec espace admin",
    price: "+1 200 à 2 000 €",
  },
  {
    title: "Maintenance mensuelle",
    price: "à partir de 40 € / mois",
  },
];

function OptionsCard({ title, options, note }) {
  return (
    <div className="rounded-xl border border-[#2f2f2f] bg-[#1e1e1e] p-5 sm:p-6">
      <h3 className="font-semibold text-gray-100">
        {title}
      </h3>

      <ul className="mt-5 space-y-4">
        {options.map((option) => (
          <li
            key={option.title}
            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
          >
            <span className="text-sm text-gray-200">
              {option.title}
            </span>

            <span className="text-sm text-gray-400">
              {option.price}
            </span>
          </li>
        ))}
      </ul>

      {note && (
        <p className="mt-5 text-xs leading-relaxed text-gray-500">
          {note}
        </p>
      )}
    </div>
  );
}

export default function PricingOptions() {
  return (
    <Section
      id="pricing-options"
      labelledBy="pricing-options-title"
      bgColor="#222222"
    >
      <SectionWrapper>
        <SectionHeading
          id="pricing-options-title"
          eyebrow="PRESTATIONS COMPLÉMENTAIRES"
          title="Des options selon vos besoins."
          description="Vous n’avez pas besoin de tout : on choisit ensemble les options utiles selon votre activité."
          className="mb-8 sm:mb-10 lg:mb-12"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <OptionsCard
            title="Le plus fréquent"
            options={commonOptions}
          />

          <OptionsCard
            title="Fonctionnalités avancées"
            options={advancedOptions}
            note="Autres possibles : espace admin complet, espace client, paiement, intégrations spécifiques…"
          />
        </div>
      </SectionWrapper>
    </Section>
  );
}