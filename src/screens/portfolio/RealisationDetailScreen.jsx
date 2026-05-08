// src/screens/portfolio/PortfolioDetailPage.jsx

'use client';

import PageTitle from "../../components/UI/PageTitle";
import { projects } from "../../data/projectsData";
import Section from "../../components/layout/Section";
import CtaFinal from "../../components/patterns/CtaFinal";

import ProjectNotFound from "../../components/portfolio/projectDetail/ProjectNotFound";
import ProjectHero from "../../components/portfolio/projectDetail/ProjectHero";
import ProjectTextSection from "../../components/portfolio/projectDetail/ProjectTextSection";
import ProjectListSection from "../../components/portfolio/projectDetail/ProjectListSection";
import ProjectStackSection from "../../components/portfolio/projectDetail/ProjectStackSection";
import ProjectLinksSection from "../../components/portfolio/projectDetail/ProjectLinksSection";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function PortfolioDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <ProjectNotFound />;

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
        title="Vous voulez un site dans ce style ?"
        tagline="Expliquez-moi votre activité et vos objectifs, je vous propose une solution adaptée."
        primary={{ href: "/contact", text: "Me contacter" }}
        secondary={{ href: "/services", text: "Voir mes services" }}
      />
    </>
  );
}

