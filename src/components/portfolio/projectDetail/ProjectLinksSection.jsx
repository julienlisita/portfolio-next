// src/components/portfolio/projectDetail/ProjectLinksSection.jsx

import Section from "../../layout/Section";

export default function ProjectLinksSection({ project }) {
  const hasLinks = Boolean(
    project.liveSite ||
      (project.demo && project.demo.length) ||
      (project.sourceCode && project.sourceCode.length)
  );

  if (!hasLinks) return null;

  return (
    <Section title="Liens">
      <div className="flex flex-wrap justify-between gap-8 mt-6">
        {project.liveSite && (
          <div className="flex-1 min-w-[220px]">
            <h4 className="text-lg font-semibold text-white mb-2">Site en ligne</h4>
            <a
              href={project.liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline break-all"
            >
              {project.liveSite}
            </a>
          </div>
        )}

        {project.demo?.length > 0 && (
          <div className="flex-1 min-w-[220px]">
            <h4 className="text-lg font-semibold text-white mb-2">Démo</h4>
            <ul className="space-y-1">
              {project.demo.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.sourceCode?.length > 0 && (
          <div className="flex-1 min-w-[220px]">
            <h4 className="text-lg font-semibold text-white mb-2">Code source</h4>
            <ul className="space-y-1">
              {project.sourceCode.map((repo, i) => (
                <li key={i}>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    {repo.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  );
}