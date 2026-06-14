// src/app/services/creation-site-internet-fonctionnalites-sur-mesure/page.js

import CustomFeaturesScreen from "@/screens/services/CustomFeaturesScreen";

export const metadata = {
  title: "Fonctionnalites sur mesure",
  
  description:
    "Ajoutez des outils utiles à votre site web : réservation en ligne, espace administrateur, espace client, gestion de contenus ou logique métier adaptée à votre activité.",

  alternates: {
    canonical:
      "/services/creation-site-internet-fonctionnalites-sur-mesure",
  },
};

export default function CustomFeaturesPage() {
  return <CustomFeaturesScreen />;
}
