// src/components/portfolio/PortfolioGrid.jsx

import Section from "../layout/Section";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../layout/SectionHeading";

import ProjectCard from "./ProjectCard";

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
          />
        )}

        <div className="grid w-full gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug || project.title}
              {...project}
            />
          ))}
        </div>
      </SectionWrapper>
    </Section>
  );
}