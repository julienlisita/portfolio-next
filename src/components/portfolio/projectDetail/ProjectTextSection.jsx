// src/components/portfolio/projectDetail/ProjectTextSection.jsx

import Section from "../../layout/Section";
import Reveal from "../../animations/Reveal";

export default function ProjectTextSection({ title, text }) {
  if (!text) return null;

  return (
    <Section title={title}>
      <Reveal as="p" className="text-gray-300">{text}</Reveal>
    </Section>
  );
}