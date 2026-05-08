// src/components/howIWork/HowIWorkMockups.jsx

import Section from "../layout/Section";
import TechCard from "./TechCard";
import { FaFigma } from "react-icons/fa";

export default function HowIWorkMockups() {
  return (
    <Section title="Maquettes (si besoin)">
      <p className="text-base sm:text-lg lg:text-xl text-gray-300">
        Selon le projet, on peut valider le rendu via une maquette avant de développer
        (utile si vous voulez figer un design précis).
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
        <TechCard icon={FaFigma} name="Figma" description="Maquettes & structure du site" color="#007AFF" />
      </div>
    </Section>
  );
}