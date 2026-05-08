// src/components/portfolio/projectDetail/ProjectStackSection.jsx

import Section from "../../layout/Section";

const labelByCategory = (category) => {
  if (category === "frontend") return "Front-end";
  if (category === "backend") return "Back-end";
  if (category === "database") return "Base de données";
  if (category === "test") return "Tests";
  if (category === "deployment") return "Déploiement";
  if (category === "emails") return "Emails";
  return category;
};

export default function ProjectStackSection({ stack }) {
  if (!stack) return null;

  const entries = Object.entries(stack).filter(
    ([, items]) => Array.isArray(items) && items.length > 0
  );

  if (entries.length === 0) return null;

  return (
    <Section title="Détails techniques (pour les curieux)">
      <div className="space-y-6 mt-6">
        {entries.map(([category, items]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold capitalize text-gray-100">
              {labelByCategory(category)}
            </h3>

            <div className="flex flex-wrap gap-2 mt-2">
              {items.map((tech, i) => (
                <span
                  key={i}
                  className="bg-[#2a2a2a] border border-[#3a3a3a] px-3 py-1 rounded-md text-sm text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}