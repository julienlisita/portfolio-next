// src/components/home/ProjectsPreview.jsx

import HomeSectionWrapper from "./HomeSectionWrapper";
import { projects } from "../../data/projectsData";
import ProjectCard from "../portfolio/ProjectCard";
import Reveal from "../animations/Reveal";
import { STAGGER } from "@/lib/motion";

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
      reveal
      eyebrow="MES RÉALISATIONS"
      title="Des projets pensés pour des besoins réels"
      description="Découvrez quelques exemples de sites et d'applications conçus pour répondre à des objectifs concrets : présenter une activité, faciliter les prises de contact, gérer des réservations ou organiser du contenu."
      link={{
        href: "/realisations",
        text: "Voir d'autres projets",
      }}
    >
      <div className="grid w-full grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {featuredProjects.map((project, index) => (
          // `flex` : la carte reste étirée à la hauteur de la rangée, comme avant
          <Reveal key={project.slug} delay={index * STAGGER} className="flex">
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>
    </HomeSectionWrapper>
  );
}