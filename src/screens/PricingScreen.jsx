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
        title="Discutons de votre projet"
        tagline="Expliquez-moi votre besoin : je vous propose une solution claire, adaptée et un devis précis après un échange gratuit."
        primary={{ href: "/contact", text: "Demander un devis" }}
        secondary={{ href: "/realisations", text: "Voir des projets" }}
      />
    </>
  );
}
