// src/screens/services/CustomFeaturesScreen.jsx

import FaqSection from "../../components/patterns/FaqSection";
import CtaFinal from "../../components/patterns/CtaFinal";
import CustomFeaturesIntro from "../../components/services/CustomFeatures/CustomFeaturesIntro";
import CustomFeaturesAudience from "../../components/services/CustomFeatures/CustomFeaturesAudience";
import CustomFeaturesOffer from "../../components/services/CustomFeatures/CustomFeaturesOffer";
import CustomFeaturesUseCases from "../../components/services/CustomFeatures/CustomFeaturesUseCases";
import PageTitle from "../../components/UI/PageTitle";
import { customFeaturesFaq } from "../../data/faqs";

export default function CustomFeaturesScreen() {

  return (
    <>
      <PageTitle>Fonctionnalités & outils sur mesure</PageTitle>
      <CustomFeaturesIntro />
      <CustomFeaturesAudience />
      <CustomFeaturesOffer />
      <CustomFeaturesUseCases />

      <FaqSection title="FAQ — Fonctionnalités sur mesure" faq={customFeaturesFaq} ariaLabelledby="faq-apps-title" />

      <CtaFinal
        title="Discutons de votre besoin"
        tagline="Vous avez une idée, un besoin ou un outil à créer ? Voyons ensemble la solution la plus simple et la plus utile."
        primary={{ href: "/contact", text: "Discuter du projet" }}
        secondary={{ href: "/realisations", text: "Voir des réalisations" }}
      />
    </>
  );
}
