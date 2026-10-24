// src/components/home/SkillsPreview.jsx

import {
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiRailway,
  SiExpress,
  SiPostgresql,
  SiNetlify,
  SiSequelize,
  SiVercel,
} from "react-icons/si";

import HomeSectionWrapper from "./HomeSectionWrapper";
import SkillCard from "./SkillCard";

const skillsData = [
  {
    title: "Interfaces modernes",
    description:
      "Je conçois des interfaces modernes, rapides et adaptées à tous les écrans, à partir de maquettes Figma, pour offrir une expérience fluide et agréable.",
    icons: [
      <FaFigma key="figma" />,
      <SiTypescript key="typescript" />,
      <SiNextdotjs key="nextjs" />,
      <SiTailwindcss key="tailwind" />,
    ],
  },
  {
    title: "Services web & données",
    description:
      "Je développe des solutions pour gérer vos contenus, utilisateurs et données, avec une architecture fiable, sécurisée et évolutive.",
    icons: [
      <FaNodeJs key="nodejs" />,
      <SiExpress key="express" />,
      <SiSequelize key="sequelize" />,
      <SiPostgresql key="postgresql" />,
    ],
  },
  {
    title: "Mise en ligne & fiabilité",
    description:
      "Je prends en charge la mise en ligne de votre projet sur des plateformes adaptées, en veillant à ses performances et à sa facilité de maintenance.",
    icons: [
      <SiNetlify key="netlify" />,
      <SiRailway key="railway" />,
      <SiVercel key="vercel" />,
      <FaGitAlt key="git" />,
    ],
  },
];

export default function SkillsPreview() {
  return (
    <HomeSectionWrapper
      id="competences"
      eyebrow="TECHNOLOGIES & SAVOIR-FAIRE"
      title="Une base technique fiable"
      description="Je sélectionne les technologies adaptées à chaque projet pour concevoir des sites et applications performants, sécurisés et capables d’évoluer dans la durée."
    >
      <div
        className="
          grid grid-cols-1
          gap-10 sm:gap-12
          lg:grid-cols-3 lg:gap-10
        "
      >
        {skillsData.map((skill) => (
          <SkillCard
            key={skill.title}
            title={skill.title}
            description={skill.description}
            icons={skill.icons}
          />
        ))}
      </div>
    </HomeSectionWrapper>
  );
}