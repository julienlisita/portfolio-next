// src/app/tarifs/page.js

import PricingScreen from "@/screens/PricingScreen";

export const metadata = {
  title: "Tarifs",
  
  description:
    "Découvrez les tarifs pour la création de sites internet, fonctionnalités sur mesure, réservation en ligne, espace administrateur et accompagnement web adapté à votre activité.",

  alternates: {
    canonical: "/tarifs",
  },
};

export default function PricingPage() {
  return <PricingScreen />;
}
