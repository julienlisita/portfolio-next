// src/app/page.js

import HomeScreen from "@/screens/HomeScreen";

export const metadata = {
  title: "Développeur web à Bordeaux – Sites web & outils pour développer votre activité",

  description:
    "Je conçois des sites web clairs, rapides et évolutifs pour indépendants, artisans et petites entreprises. Sites vitrines, réservation, espace admin et outils sur mesure.",

  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <HomeScreen />;
}
