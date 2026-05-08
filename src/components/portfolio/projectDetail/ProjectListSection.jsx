// src/components/portfolio/projectDetail/ProjectListSection.jsx

import Section from "../../layout/Section";

export default function ProjectListSection({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <Section title={title}>
      <ul className="list-disc list-inside space-y-2 mt-6 text-gray-300">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </Section>
  );
}