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
import CtaFinal from "@/components/patterns/CtaFinal";

export default function HomeScreen() {
  return (
    <>
      <LandingSection />
      <ProblemSection/>
      <ServicesPreview />
      {/* <BenefitsSection /> */}
      <ProjectsPreview />
      <WhyWorkWithMe />
      <TarifsTeaser/>
      {/* <AudiencePreview /> */}
      <AboutPreview />
      <SkillsPreview />
      <CtaFinal
        title="Parlons de votre projet"
        tagline="Vous avez une idée, un besoin ou simplement une question ? Échangeons sur votre projet pour trouver ensemble une solution adaptée à votre activité."
        primary={{
          href: "/contact",
          text: "Discuter de mon projet",
        }}
      />
    </>
  );
}
