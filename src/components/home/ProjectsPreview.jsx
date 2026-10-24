// src/components/home/ProjectsPreview.jsx

import HomeSectionWrapper from "./HomeSectionWrapper";
import { projects } from "../../data/projectsData";
import ProjectCard from "../portfolio/ProjectCard";

const featuredSlugs = [
  "ccs",
  "lumiere-darcachon",
  "thomas-delaunay",
];

export default function ProjectsPreview() {
  const featuredProjects = featuredSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean);

  return (
    <HomeSectionWrapper
      id="portfolio"
      eyebrow="MES RÉALISATIONS"
      title="Des projets pensés pour des besoins réels"
      description="Découvrez quelques exemples de sites et d'applications conçus pour répondre à des objectifs concrets : présenter une activité, faciliter les prises de contact, gérer des réservations ou organiser du contenu."
      link={{
        href: "/realisations",
        text: "Voir d'autres projets",
      }}
    >
      <div className="grid w-full grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </HomeSectionWrapper>
  );
}