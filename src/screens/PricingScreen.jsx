// src/screens/PricingScreen.jsx

import PricingIntroAndPacks from "../components/pricing/PricingIntroAndPacks";
import PricingOptions from "../components/pricing/PricingOptions";
import PricingExamples from "../components/pricing/PricingExamples";
import FaqSection from "../components/patterns/FaqSection";
import CtaFinal from "../components/patterns/CtaFinal";
import { pricingFaq } from "../data/faqs";
import PageHero from "@/components/layout/PageHero";

export default function PricingScreen() {

  return (
    <>
      <PageHero
        id="pricing-hero"
        eyebrow="TARIFS & PRESTATIONS"
        title="Des tarifs adaptés à votre projet."
        description="Les tarifs dépendent du niveau de personnalisation, du contenu à intégrer et des fonctionnalités nécessaires. Voici des repères pour vous situer avant un devis personnalisé."
      />
      <PricingIntroAndPacks />
      <PricingOptions />
      <PricingExamples />
      <FaqSection title="FAQ — Tarifs" faq={pricingFaq} ariaLabelledby="faq-pricing-title" />

      <CtaFinal
        title="Qui se cache derrière vos projets ?"
        tagline="Découvrez mon parcours, mon expérience et l’approche que j’apporte à chaque collaboration."
        primary={{ href: "/a-propos", text: "En savoir plus sur moi" }}
        secondary={{ href: "/reservations", text: "Réserver un échange" }}
      />
    </>
  );
}
