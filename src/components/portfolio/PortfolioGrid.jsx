// src/components/portfolio/PortfolioGrid.jsx

import Section from "../layout/Section";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../layout/SectionHeading";

import ProjectCard from "./ProjectCard";
import Reveal from "../animations/Reveal";
import { STAGGER } from "@/lib/motion";

export default function PortfolioGrid({ title, projects = [] }) {
  const headingId = "portfolio-grid-title";

  return (
    <Section
      labelledBy={title ? headingId : undefined}
    >
      <SectionWrapper>
        {title && (
          <SectionHeading
            id={headingId}
            title={title}
            className="mb-8 sm:mb-10 lg:mb-12"
            reveal
          />
        )}

        <div className="grid w-full gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, index) => (
            // `flex` : la carte reste étirée à la hauteur de la rangée
            <Reveal
              key={project.slug || project.title}
              delay={(index % 3) * STAGGER}
              className="flex"
            >
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </SectionWrapper>
    </Section>
  );
}