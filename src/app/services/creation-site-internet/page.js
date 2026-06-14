// src/app/services/creation-site-internet/page.js

import WebsiteCreationScreen from "@/screens/services/WebsiteCreationScreen";

export const metadata = {
  title: "Creation de site internet",
  
  description:
    "Création de sites internet clairs, rapides et évolutifs pour indépendants, artisans et petites entreprises. Site vitrine professionnel pensé pour présenter votre activité et générer des demandes.",

  alternates: {
    canonical: "/services/creation-site-internet",
  },
};

export default function WebsiteCreationPage() {
  return <WebsiteCreationScreen />;
}
