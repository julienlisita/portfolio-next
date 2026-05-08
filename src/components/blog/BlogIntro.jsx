// src/components/blog/BlogIntro.jsx

import Section from "../layout/Section";

export default function BlogIntro() {
  return (
    <Section className="space-y-3">
      <p className="text-gray-300 text-base sm:text-lg">
        Ici je partage des conseils concrets pour les <strong>artisans</strong>,{" "}
        <strong>indépendants</strong> et <strong>petites entreprises</strong> :
        visibilité locale, site vitrine, performance, choix techniques…
      </p>
      <p className="text-sm text-gray-400">
        Objectif : vous aider à y voir clair et à prendre de bonnes décisions pour votre site.
      </p>
    </Section>
  );
}