// src/screens/HowIWorkScreen.jsx

import PageTitle from "../components/UI/PageTitle";

import { FaReact, FaNodeJs, FaGitAlt, FaJava } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiNetlify,
  SiVercel,
  SiRender,
  SiTypescript,
  SiC,
  SiCplusplus,
} from "react-icons/si";

import CtaFinal from "../components/patterns/CtaFinal";
import FaqSection from "../components/patterns/FaqSection";
import HowIWorkIntro from "../components/howIWork/HowIWorkIntro";
import HowIWorkMethod from "../components/howIWork/HowIWorkMethod";
import HowIWorkNoCodeComparison from "../components/howIWork/HowIWorkNoCodeComparison";
import HowIWorkOutcomes from "../components/howIWork/HowIWorkOutcomes";
import HowIWorkMockups from "../components/howIWork/HowIWorkMockups";
import HowIWorkTechStack from "../components/howIWork/HowIWorkTechStack";
import { howIWorkFaq } from "../data/faqs";


export default function HowIWorkScreen() {

  const technologies = [
    // Frontend
    { icon: FaReact, name: "React", description: "Interfaces dynamiques", category: "frontend" },
    { icon: SiNextdotjs, name: "Next.js", description: "Performance & SEO (SSR/SSG)", category: "frontend" },
    { icon: SiTypescript, name: "TypeScript", description: "Plus fiable, moins de bugs", category: "frontend" },
    { icon: SiTailwindcss, name: "Tailwind CSS", description: "UI rapide à itérer", category: "frontend" },

    // Backend & data
    { icon: FaNodeJs, name: "Node.js", description: "Logique serveur", category: "backend" },
    { icon: SiExpress, name: "Express", description: "API & logique métier", category: "backend" },
    { icon: SiPrisma, name: "Prisma", description: "ORM moderne et type-safe", category: "backend" },
    { icon: SiPostgresql, name: "PostgreSQL", description: "Base fiable", category: "backend" },

    // Déploiement & outils
    { icon: SiVercel, name: "Vercel", description: "Hébergement optimisé", category: "deployment" },
    { icon: SiNetlify, name: "Netlify", description: "Déploiement statique", category: "deployment" },
    { icon: SiRender, name: "Render", description: "Déploiement full-stack", category: "deployment" },
    { icon: FaGitAlt, name: "Git / GitHub", description: "Versionnage & suivi", category: "deployment" },

    // Complémentaires
    { icon: SiC, name: "C", description: "Rigueur & performance", category: "complementary" },
    { icon: SiCplusplus, name: "C++", description: "Logique applicative", category: "complementary" },
    { icon: FaJava, name: "Java", description: "Conception robuste", category: "complementary" },
  ];

   return (
    <>
      <PageTitle>Ma méthode & mes choix techniques</PageTitle>

      <HowIWorkIntro />
      <HowIWorkMethod />
      <HowIWorkNoCodeComparison />
      <HowIWorkOutcomes />
      <HowIWorkMockups />
      <HowIWorkTechStack technologies={technologies} />

      <FaqSection title="FAQ — Méthode" faq={howIWorkFaq} ariaLabelledby="faq-skills-title" />

      <CtaFinal
        title="On en parle ?"
        tagline="Expliquez-moi votre activité et vos objectifs : je vous propose la bonne approche."
        primary={{ href: "/contact", text: "Discuter de votre projet" }}
        secondary={{ href: "/tarifs", text: "Voir les tarifs" }}
      />
    </>
  );
}