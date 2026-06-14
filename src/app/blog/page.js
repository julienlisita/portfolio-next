// src/app/blog/page.js

import BlogScreen from "@/screens/blog/BlogScreen";

export const metadata = {
  title: "Blog",
  
  description:
    "Conseils, réflexions et ressources autour de la création de sites web, du SEO, de l’UX et des outils utiles pour les indépendants et petites entreprises.",
  
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return <BlogScreen />;
}
