// src/components/portfolio/PortfolioIntro.jsx

import Section from "../layout/Section";

export default function PortfolioIntro() {
  return (
    <Section>
      <p className="text-left text-base sm:text-lg lg:text-xl text-gray-300">
        Quelques projets représentatifs : sites vitrines et applications web.
        Chaque fiche détaille le contexte, les objectifs et les choix clés (UX, SEO,
        performance, évolutivité).
      </p>
    </Section>
  );
}