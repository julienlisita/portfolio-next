// src/screens/portfolio/PortfolioScreen.jsx

import { projects } from "../../data/projectsData";
import PageTitle from "../../components/UI/PageTitle";
import CtaFinal from "../../components/patterns/CtaFinal";

import PortfolioIntro from "../../components/portfolio/PortfolioIntro";
import PortfolioGrid from "../../components/portfolio/PortfolioGrid";

export default function PortfolioScreen() {
  const vitrines = projects.filter((p) => p.category === "vitrines");
  const tools = projects.filter((p) => p.category === "web");

  return (
    <>
      <PageTitle>Réalisations</PageTitle>

      <PortfolioIntro />

      <PortfolioGrid title="Sites vitrines" projects={vitrines} />
      <PortfolioGrid title="Applications web" projects={tools} />

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
