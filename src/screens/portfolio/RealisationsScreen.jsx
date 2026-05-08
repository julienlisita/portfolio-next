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
        title="Votre projet, le prochain ?"
        tagline="Je vous propose une solution claire, moderne et adaptée à votre activité."
        primary={{ href: "/contact", text: "Discuter de votre projet" }}
        secondary={{ href: "/services", text: "Voir mes services" }}
      />
    </>
  );
}
