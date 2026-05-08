// src/components/portfolio/projectDetail/ProjectHero.jsx

import Section from "../../layout/Section";

export default function ProjectHero({ project }) {
  return (
    <Section>
      <div className="flex justify-center">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full max-w-[820px] object-cover rounded-lg"
          loading="lazy"
          decoding="async"
        />
      </div>

      {project.clientType && (
        <p className="mt-6 text-sm text-gray-400">{project.clientType}</p>
      )}

      {project.summary?.length > 0 && (
        <div className="space-y-4 mt-6 text-gray-300">
          {project.summary.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      )}
    </Section>
  );
}