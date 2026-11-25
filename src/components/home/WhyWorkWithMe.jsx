// src/components/home/WhyWorkWithMe.jsx

import {
  MessageCircle,
  Users,
  Gauge,
  RefreshCw,
} from "lucide-react";

import Button from "../UI/Button";
import Section from "../layout/Section";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../layout/SectionHeading";
import Reveal from "../animations/Reveal";
import { STAGGER } from "@/lib/motion";

const commitments = [
  {
    icon: MessageCircle,
    title: "Des échanges simples et transparents",
    description:
      "Nous échangeons directement tout au long du projet. Vous savez ce qui est prévu, pourquoi et comment votre projet avance.",
  },
  {
    icon: Users,
    title: "Une solution adaptée à votre activité",
    description:
      "Je prends le temps de comprendre votre métier, vos objectifs et vos utilisateurs pour concevoir une solution réellement utile.",
  },
  {
    icon: Gauge,
    title: "Une attention portée à la qualité",
    description:
      "Performance, accessibilité, référencement et qualité du code sont pris en compte dès la conception.",
  },
  {
    icon: RefreshCw,
    title: "Un projet pensé pour durer",
    description:
      "Je privilégie des solutions fiables, maintenables et capables d'évoluer avec votre activité.",
  },
];

export default function WhyWorkWithMe() {
  return (
    <Section
      id="pourquoi"
      labelledBy="pourquoi-title"
      bgColor="#1D1D1D"
    >
      <SectionWrapper>
        <div
          className="
            grid grid-cols-1
            lg:grid-cols-[0.85fr_1.15fr]
            gap-10 lg:gap-20
          "
        >
          {/* Présentation */}
          <div className="flex flex-col items-start">
            <SectionHeading
              id="pourquoi-title"
              eyebrow="MON APPROCHE"
              title="Un accompagnement humain, des solutions pensées pour durer"
              description="Chaque projet commence par une discussion. Mon rôle est de comprendre vos besoins, de vous conseiller et de construire une solution adaptée à votre activité."
              reveal
            />

            <Reveal delay={STAGGER} className="mt-8">
              <Button
                href="/comment-je-travaille"
                variant="secondary"
              >
                Découvrir ma méthode
              </Button>
            </Reveal>
          </div>

          {/* Engagements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {commitments.map((commitment, index) => {
              const Icon = commitment.icon;

              return (
                <Reveal
                  key={commitment.title}
                  delay={(index % 2) * STAGGER}
                  className="
                    group
                    flex flex-col
                    rounded-2xl
                    border border-white/10
                    bg-white/[0.025]
                    p-4 sm:p-5 lg:p-6
                    transition-colors duration-300
                    hover:bg-white/[0.05]
                  "
                >
                  {/* Icône */}
                  <div
                    className="
                      mb-3 sm:mb-5
                      flex h-11 w-11
                      items-center justify-center
                      rounded-xl
                      bg-blue/10
                      text-blue
                    "
                  >
                    <Icon size={22} aria-hidden="true" />
                  </div>

                  {/* Titre */}
                  <h3 className="text-lg font-semibold text-white">
                    {commitment.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-2 sm:mt-3
                      text-sm sm:text-base
                      leading-relaxed text-gray-400
                    "
                  >
                    {commitment.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </SectionWrapper>
    </Section>
  );
}