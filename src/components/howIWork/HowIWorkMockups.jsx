// src/components/howIWork/HowIWorkMockups.jsx

import { FaFigma } from "react-icons/fa";

import Section from "../layout/Section";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../layout/SectionHeading";

import TechCard from "./TechCard";

export default function HowIWorkMockups() {
  return (
    <Section
      id="how-i-work-mockups"
      labelledBy="how-i-work-mockups-title"
      bgColor="#222222"
    >
      <SectionWrapper>
        <SectionHeading
          id="how-i-work-mockups-title"
          eyebrow="CONCEPTION VISUELLE"
          title="Maquettes (si besoin)"
          description="Selon le projet, on peut valider le rendu via une maquette avant de développer, notamment lorsque vous souhaitez définir précisément le design."
          className="mb-8 sm:mb-10 lg:mb-12"
        />

        <div className="grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          <TechCard
            icon={FaFigma}
            name="Figma"
            description="Maquettes & structure du site"
            color="#007AFF"
          />
        </div>
      </SectionWrapper>
    </Section>
  );
}