// src/screens/portfolio/PortfolioScreen.jsx

import { projects } from "../../data/projectsData";
import CtaFinal from "../../components/patterns/CtaFinal";

import PortfolioGrid from "../../components/portfolio/PortfolioGrid";
import PageHero from "@/components/layout/PageHero";

export default function PortfolioScreen() {
  const applications = projects.filter((p) => p.category === "application");
  const sites = projects.filter((p) => p.category === "site");

  return (
    <>
      <PageHero
        id="portfolio-hero"
        eyebrow="PORTFOLIO"
        title="Réalisations"
        description="Quelques projets représentatifs : sites vitrines et applications web. Chaque fiche détaille le contexte, les objectifs et les choix clés (UX, SEO, performance, évolutivité)."
      />

      <PortfolioGrid title="Applications web" projects={applications} />
      <PortfolioGrid title="Sites web" projects={sites} />

      <CtaFinal
        title="Comment se déroule un projet ?"
        tagline="Découvrez ma méthode, les différentes étapes d’un projet et les choix techniques qui permettent de construire une solution durable."
        primary={{
          href: "/comment-je-travaille",
          text: "Découvrir ma méthode",
        }}
        secondary={{
          href: "/reservations",
          text: "Réserver un échange",
        }}
      />
    </>
  );
}
