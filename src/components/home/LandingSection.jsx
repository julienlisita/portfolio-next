// src/components/home/LandingSection.jsx

'use client';

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Button from "../UI/Button";
import styles from "./LandingSection.module.css";
import HeroBookingAnimation from "./HeroBookingAnimation";

export default function LandingSection() {
  const reduce = useReducedMotion();

  const name = "Julien Lisita";
  const eyebrow = "Pour indépendants, artisans et petites entreprises";
  const location = "Bordeaux & à distance";
  const title = `Sites web & outils
    pour développer
    votre activité`;   

  const tagline = "Je conçois des sites clairs, rapides et évolutifs, avec des outils utiles quand votre activité en a besoin : réservation, espace admin, gestion de contenus…";

  const VISUAL_SRC = "/assets/mockups/portfolio-services-ipad.png";

  const fadeUp = useMemo(
    () =>
      reduce
        ? {}
        : {
            initial: { y: 18, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { duration: 0.55, ease: "easeOut" },
          },
    [reduce]
  );

  const fade = useMemo(
    () =>
      reduce
        ? {}
        : {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.45, ease: "easeOut" },
          },
    [reduce]
  );

const spotlightStyle = {
  background:
    "radial-gradient(700px 360px at 50% 22%, rgba(90,200,250,0.12), transparent 60%)",
};

// variante desktop (halo décalé vers le mockup)
const spotlightStyleDesktop = {
  background:
    "radial-gradient(900px 520px at 70% 50%, rgba(90,200,250,0.14), transparent 60%)",
};

  return (
    <section
      id="landing"
      className="relative min-h-svh bg-[#222222] overflow-hidden"
    >
      {/* Spotlight */}
      <div
        className="pointer-events-none absolute inset-0"
        style={spotlightStyle}
      >
        <div className="hidden lg:block absolute inset-0" style={spotlightStyleDesktop} />
      </div>

      {/* Container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 min-h-svh">
        {/* GRID */}
        <div
          className="
            min-h-svh
            grid
            grid-rows-[auto_auto]
            lg:grid-rows-1
            lg:grid-cols-[1.12fr_0.88fr]
            content-center
            items-center
            gap-1 sm:gap-12 lg:gap-12
            py-8 sm:py-12 lg:py-0
            pb-16 sm:pb-20 lg:pb-0
          "
        >
          {/* TEXT */}
          <div
            className="
              text-center lg:text-left
              flex flex-col
              space-y-4 sm:space-y-5
            "
          >
            <motion.img
              src="/assets/logos/site/logo-blur.png"
              alt="Logo initiales Julien Lisita"
              width={112}
              height={112}
              className="
                mx-auto lg:mx-0
                h-16 w-16
                sm:h-20 sm:w-20
                mb-2 sm:mb-3
              "
              {...(!reduce && {
                initial: { opacity: 0, scale: 0.94 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.45, ease: "easeOut" },
              })}
            />

            <motion.p
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white tracking-tight"
              {...(!reduce && { transition: { ...fade.transition, delay: 0.05 } })}
            >
              {name}
            </motion.p>

            <motion.div
              className="space-y-1"
              {...fade}
              {...(!reduce && { transition: { ...fade.transition, delay: 0.1 } })}
            >
              <p className="text-sm sm:text-base text-gray-300">
                {eyebrow}
              </p>
              <p className="text-sm sm:text-base text-gray-400">
                {location}
              </p>
            </motion.div>

            <motion.h1
              className={`text-white text-3xl sm:text-4xl lg:text-[3rem] xl:text-[3.2rem] font-extrabold leading-[1.18] tracking-tight whitespace-pre-line ${styles.neonTitleStrong}`}
              {...fadeUp}
              {...(!reduce && { transition: { ...fadeUp.transition, delay: 0.16 } })}
            >
              {title}
            </motion.h1>

            <motion.p
              className={`max-w-2xl text-base sm:text-lg md:text-xl ${styles.tagline}`}
              {...fade}
              {...(!reduce && { transition: { ...fade.transition, delay: 0.24 } })}
            >
              {tagline}
            </motion.p>
            <motion.div
              className="pt-2 flex justify-center lg:justify-start"
              {...fade}
              {...(!reduce && { transition: { ...fade.transition, delay: 0.3 } })}
            >
              <Button href="/contact" variant="primary">
                Discutons de votre projet
              </Button>
            </motion.div>
          </div>

          <div className="mt-5 sm:mt-8 lg:mt-0 w-full max-w-65 sm:max-w-90 lg:max-w-107.5 justify-self-center lg:justify-self-end">
            <HeroBookingAnimation />
          </div>

        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-3 sm:bottom-5 left-0 right-0 flex flex-col items-center"
        {...fade}
        {...(!reduce && { transition: { ...fade.transition, delay: 0.7 } })}
      >
        <a
          href="#problemes"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#problemes")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group"
          aria-label="Aller à la section suivante"
        >
          <ArrowDown
            className={`h-10 w-10 sm:h-12 sm:w-12 text-[#5AC8FA] ${styles.pulseArrow}`}
            aria-hidden
          />
        </a>
        <p className="text-gray-500 text-xs mt-1">Faites défiler ou cliquez</p>
      </motion.div>
    </section>
  );
}