// src/screens/portfolio/PortfolioDetailPage.jsx

import PageTitle from "../../components/UI/PageTitle";
import Section from "../../components/layout/Section";
import CtaFinal from "../../components/patterns/CtaFinal";

import ProjectHero from "../../components/portfolio/projectDetail/ProjectHero";
import ProjectTextSection from "../../components/portfolio/projectDetail/ProjectTextSection";
import ProjectListSection from "../../components/portfolio/projectDetail/ProjectListSection";
import ProjectStackSection from "../../components/portfolio/projectDetail/ProjectStackSection";
import ProjectLinksSection from "../../components/portfolio/projectDetail/ProjectLinksSection";

import Link from "next/link";

export default function PortfolioDetailScreen({ project }) {
  return (
    <>
      <PageTitle>{project.title}</PageTitle>

      <ProjectHero project={project} />

      <ProjectTextSection title="Contexte" text={project.context} />
      <ProjectListSection title="Objectifs" items={project.goals} />
      <ProjectListSection title="Fonctionnalités principales" items={project.features} />
      <ProjectListSection title="Résultats" items={project.results} />
      <ProjectTextSection title="Mon rôle" text={project.myRole} />

      <ProjectStackSection stack={project.stack} />
      <ProjectLinksSection project={project} />

      <Section title="Le projet en détail">
        <p className="text-gray-300">
          Ce projet a été réalisé avec ma méthode habituelle (performance, SEO, évolutivité).
          <br />
          <Link href="/comment-je-travaille" className="text-blue-400 underline">
            Voir comment je travaille
          </Link>
        </p>
      </Section>

      <CtaFinal
        title="Vous avez un projet similaire ?"
        tagline="Découvrez mes autres réalisations ou échangeons directement autour de votre besoin."
        primary={{
          href: "/realisations",
          text: "Voir d’autres réalisations",
        }}
        secondary={{
          href: "/reservations",
          text: "Réserver un échange",
        }}
      />
    </>
  );
}

