// src/components/home/ProjectsPreview.jsx

import HomeSectionWrapper from "./HomeSectionWrapper";
import { projects } from "../../data/projectsData";
import ProjectCard from "../../screens/portfolio/ProjectCard";

export default function ProjectsPreview() {
  const featuredSlugs = ["ccs", "lumiere-darcachon", "thomas-delaunay"];

  const featuredProjects = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <HomeSectionWrapper
      id="portfolio"
      title="Des projets pensés pour des besoins réels"
      link={{ href: "/realisations", text: "Voir d'autres projets" }}
    >
      <p className="text-base sm:text-lg lg:text-xl text-gray-300">
        Des exemples de projets pensés pour répondre à des besoins réels : présenter une activité, générer des contacts, faciliter la réservation ou gérer du contenu.
      </p>

      <div className="w-full grid gap-6 sm:gap-7 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </HomeSectionWrapper>
  );
}
