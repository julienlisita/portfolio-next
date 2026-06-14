// src/app/services/page.js

import ServicesScreen from "@/screens/services/ServicesScreen";

export const metadata = {
  title: "Services",
  
  description:
    "Création de sites internet, fonctionnalités sur mesure et suivi dans le temps. Découvrez les services proposés pour aider indépendants, artisans et petites entreprises à développer leur activité.",
  
    alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesScreen />;
}
