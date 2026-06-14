// src/app/realisations/page.js

import PortfolioScreen from "@/screens/portfolio/RealisationsScreen";

export const metadata = {
  title: "Realisations",
  
  description:
    "Découvrez des exemples de sites web et projets réalisés : sites vitrines, interfaces modernes et solutions web pensées pour les indépendants, artisans et petites entreprises.",

  alternates: {
    canonical: "/realisations",
  },
};

export default function PortfolioPage() {
  return <PortfolioScreen />;
}
