// src/screens/PricingScreen.jsx

import PageTitle from "../components/UI/PageTitle";

import PricingIntroAndPacks from "../components/pricing/PricingIntroAndPacks";
import PricingOptions from "../components/pricing/PricingOptions";
import PricingExamples from "../components/pricing/PricingExamples";
import FaqSection from "../components/patterns/FaqSection";
import CtaFinal from "../components/patterns/CtaFinal";
import { pricingFaq } from "../data/faqs";

export default function PricingScreen() {

  return (
    <>
      <PageTitle>Tarifs</PageTitle>
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
