// src/components/portfolio/projectDetail/ProjectHero.jsx

import Section from "../../layout/Section";
import Image from "next/image";

export default function ProjectHero({ project }) {
  return (
    <Section>
      <div className="flex justify-center">
      <Image
        src={project.heroImage}
        alt={`Aperçu du projet ${project.title}`}
        width={820}
        height={615}
        className="w-full max-w-[820px] h-auto rounded-lg"
        sizes="(max-width: 820px) 100vw, 820px"
        loading="eager"
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