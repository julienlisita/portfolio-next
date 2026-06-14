// src/app/a-propos/page.js

import AboutScreen from "@/screens/AboutScreen";

export const metadata = {
  title: "A propos",
  
  description:
    "Découvrez mon parcours, mon approche du développement web et ma façon d’accompagner les indépendants, artisans et petites entreprises dans leurs projets web.",
  
    alternates: {
    canonical: "/a-propos",
  },
};

export default function AboutPage() {
  return <AboutScreen />;
}
