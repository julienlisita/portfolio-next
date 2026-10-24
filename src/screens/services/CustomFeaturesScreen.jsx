// src/screens/services/CustomFeaturesScreen.jsx

import FaqSection from "../../components/patterns/FaqSection";
import CtaFinal from "../../components/patterns/CtaFinal";
import { customFeaturesFaq } from "../../data/faqs";
import CustomFeaturesHero from "@/components/services/CustomFeatures/CustomFeaturesHero";
import CustomFeaturesShowcase from "@/components/services/CustomFeatures/CustomFeaturesShowcase";
import CustomFeaturesWorkflow from "@/components/services/CustomFeatures/CustomFeaturesWorkflow";
import CustomFeaturesEvolution from "@/components/services/CustomFeatures/CustomFeaturesEvolution";

export default function CustomFeaturesScreen() {

  return (
    <>
      <CustomFeaturesHero />

      <CustomFeaturesShowcase />

      <CustomFeaturesWorkflow />

      <CustomFeaturesEvolution />

      <FaqSection title="FAQ — Fonctionnalités sur mesure" faq={customFeaturesFaq} ariaLabelledby="faq-apps-title" />

      <CtaFinal
        title="Découvrez des solutions concrètes"
        tagline="Découvrez des applications et outils web réalisés pour répondre à des besoins métier."
        primary={{ href: "/realisations", text: "Voir mes réalisations" }}
        secondary={{ href: "/reservations", text: "Réserver un échange" }}
      />
    </>
  );
}
