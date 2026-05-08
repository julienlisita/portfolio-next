// src/components/portfolio/projectDetail/ProjectTextSection.jsx

import Section from "../../layout/Section";

export default function ProjectTextSection({ title, text }) {
  if (!text) return null;

  return (
    <Section title={title}>
      <p className="text-gray-300">{text}</p>
    </Section>
  );
}