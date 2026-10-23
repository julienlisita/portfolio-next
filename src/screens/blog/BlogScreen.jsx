// src/screens/blog/BlogScreen.jsx

import PageHero from "../../components/layout/PageHero";

import BlogList from "../../components/blog/BlogList";

export default function BlogScreen() {
  return (
    <>
      <PageHero
        id="blog-hero"
        eyebrow="BLOG"
        title="Conseils & ressources"
        description="Des conseils concrets pour les artisans, indépendants et petites entreprises : visibilité locale, site vitrine, performance et choix techniques. L'objectif : vous aider à prendre les bonnes décisions pour votre site."
      />

      <BlogList />
    </>
  );
}