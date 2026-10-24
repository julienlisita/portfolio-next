// src/components/services/CustomFeatures/CustomFeaturesHero.jsx

import PageHero from "@/components/layout/PageHero";
import CustomFeaturesMockup from "./CustomFeaturesMockup";

export default function CustomFeaturesHero() {
  return (
    <PageHero
      id="custom-features-hero"
      eyebrow="APPLICATIONS & OUTILS SUR MESURE"
      title="Des outils web qui s'adaptent à votre activité."
      description="Réservations, gestion de clients, suivi de demandes ou automatisation : je développe des applications web adaptées à votre façon de travailler pour simplifier votre quotidien."
      caption="Exemple illustratif d'une application de gestion sur mesure"
    >
      <CustomFeaturesMockup />
    </PageHero>
  );
}