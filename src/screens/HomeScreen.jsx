// src/screens/HomeScreen.jsx

import LandingSection from "../components/home/LandingSection";
import AboutPreview from "../components/home/AboutPreview";
import ServicesPreview from "../components/home/ServicesPreview";
import SkillsPreview from "../components/home/SkillsPreview";
import ProjectsPreview from "../components/home/ProjectsPreview";
import ContactTeaser from "../components/home/ContactTeaser";
import { MapPin } from "lucide-react";
import AudiencePreview from "../components/home/AudiencePreview";
import WhyWorkWithMe from "../components/home/WhyWorkWithMe";
import TarifsTeaser from "../components/home/TarifsTeaser";
import HomeSectionWrapper from "../components/home/HomeSectionWrapper";
import ProblemSection from "../components/home/ProblemSection";
import BenefitsSection from "../components/home/BenefitsSection";

export default function HomeScreen() {
  return (
    <>
      <LandingSection />
      <ProblemSection/>
      <ServicesPreview />
      <BenefitsSection />
      <ProjectsPreview />
      <TarifsTeaser/>
      <WhyWorkWithMe />
      <AudiencePreview />
      <AboutPreview />
      <SkillsPreview />
      <ContactTeaser />
      {/* Localisation */}
      <HomeSectionWrapper className="text-base sm:text-lg lg:text-xl">
        <p className="flex flex-col items-center text-center gap-2">
          <MapPin className="text-[#007AFF] mx-auto" size={32} />
          <span>Mérignac</span>
          <span>Disponible sur Bordeaux Métropole & à distance</span>
        </p>
      </HomeSectionWrapper>
    </>
  );
}
