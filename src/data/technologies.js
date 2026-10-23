// src/data/technologies.js

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

export const technologies = [
  // Front-end
  {
    icon: FaReact,
    name: "React",
    description: "Interfaces dynamiques",
    category: "frontend",
  },
  {
    icon: SiNextdotjs,
    name: "Next.js",
    description: "Performance & SEO (SSR/SSG)",
    category: "frontend",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
    description: "Plus fiable, moins de bugs",
    category: "frontend",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    description: "UI rapide à itérer",
    category: "frontend",
  },

  // Back-end
  {
    icon: FaNodeJs,
    name: "Node.js",
    description: "Logique serveur",
    category: "backend",
  },
  {
    icon: SiExpress,
    name: "Express",
    description: "API & logique métier",
    category: "backend",
  },
  {
    icon: SiPrisma,
    name: "Prisma",
    description: "ORM moderne et type-safe",
    category: "backend",
  },
  {
    icon: SiPostgresql,
    name: "PostgreSQL",
    description: "Base fiable",
    category: "backend",
  },

  // Déploiement
  {
    icon: SiVercel,
    name: "Vercel",
    description: "Hébergement optimisé",
    category: "deployment",
  },
  {
    icon: SiNetlify,
    name: "Netlify",
    description: "Déploiement statique",
    category: "deployment",
  },
  {
    icon: SiRender,
    name: "Render",
    description: "Déploiement full-stack",
    category: "deployment",
  },
  {
    icon: FaGitAlt,
    name: "Git / GitHub",
    description: "Versionnage & suivi",
    category: "deployment",
  },

  // Complémentaires
  {
    icon: SiC,
    name: "C",
    description: "Rigueur & performance",
    category: "complementary",
  },
  {
    icon: SiCplusplus,
    name: "C++",
    description: "Logique applicative",
    category: "complementary",
  },
  {
    icon: FaJava,
    name: "Java",
    description: "Conception robuste",
    category: "complementary",
  },
];