// src/components/home/LandingSection.jsx

'use client';

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Button from "../UI/Button";
import styles from "./LandingSection.module.css";

export default function LandingSection() {
  const reduce = useReducedMotion();

  const name = "Julien Lisita";
  const audience = "Indépendants • Artisans • TPE / PME";
  const location = "Bordeaux & à distance";
  const title = `Sites & applications web sur mesure`;   

  const tagline = "Attirez de nouveaux clients, gagnez du temps et simplifiez votre quotidien grâce à des outils pensés pour votre activité.";


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
        <div
          className="hidden lg:block absolute inset-0"
          style={spotlightStyleDesktop}
        />
      </div>

      <div className="relative mx-auto max-w-7xl min-h-svh px-4 sm:px-8 lg:px-12">
      <div
        className="
          min-h-svh
          grid
          grid-cols-1
          grid-rows-[auto_auto]
          lg:grid-cols-[1.15fr_0.85fr]
          items-center
          content-center
          gap-2 sm:gap-8 lg:gap-16
          pt-20 pb-20
          sm:pt-24 sm:pb-24
          lg:py-0
        "
      >
          {/* Contenu */}
          <div
            className="
              order-2 lg:order-1
              flex flex-col
              text-center lg:text-left
            "
          >
            <motion.p
              className="
                mb-3 lg:mb-5
                text-xl sm:text-2xl lg:text-3xl
                font-semibold
                text-white
                tracking-tight
              "
              {...fade}
              {...(!reduce && {
                transition: { ...fade.transition, delay: 0.05 },
              })}
            >
              {name}
            </motion.p>

            <motion.h1
              className={`
                text-white
                text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem]
                font-extrabold
                leading-[1.15]
                tracking-tight
                whitespace-pre-line
                ${styles.neonTitleStrong}
              `}
              {...fadeUp}
              {...(!reduce && {
                transition: { ...fadeUp.transition, delay: 0.12 },
              })}
            >
              {title}
            </motion.h1>

            <motion.p
              className={`
                mt-6
                max-w-2xl
                mx-auto lg:mx-0
                text-base sm:text-lg
                leading-relaxed
                ${styles.tagline}
              `}
              {...fade}
              {...(!reduce && {
                transition: { ...fade.transition, delay: 0.2 },
              })}
            >
              {tagline}
            </motion.p>

            {/* CTA */}
            <motion.div
              className="
                mt-8
                flex flex-col sm:flex-row
                items-center
                justify-center lg:justify-start
                gap-3
              "
              {...fade}
              {...(!reduce && {
                transition: { ...fade.transition, delay: 0.28 },
              })}
            >
              <Button href="/contact" variant="primary">
                Discuter de votre projet
              </Button>

              <Button href="/portfolio" variant="secondary">
                Voir mes réalisations
              </Button>
            </motion.div>

            {/* Cible + localisation */}
            <motion.div
              className="
                mt-7
                space-y-1
                text-sm sm:text-base
              "
              {...fade}
              {...(!reduce && {
                transition: { ...fade.transition, delay: 0.34 },
              })}
            >
              <p className="text-gray-300">
                {audience}
              </p>

              <p className="text-gray-500">
                {location}
              </p>
            </motion.div>
          </div>

          {/* Logo */}
          <motion.div
            className="
              order-1 lg:order-2
              flex
              items-center
              justify-center
            "
            {...(!reduce && {
              initial: { opacity: 0, scale: 0.92 },
              animate: { opacity: 1, scale: 1 },
              transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.12,
              },
            })}
          >
            <img
              src="/assets/logos/site/logo.png"
              alt="Logo initiales Julien Lisita"
              width={320}
              height={320}
              className="
                h-28 w-28
                sm:h-36 sm:w-36
                lg:h-72 lg:w-72
                xl:h-80 xl:w-80
                object-contain
              "
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="
          absolute
          bottom-3 sm:bottom-5
          left-0 right-0
          flex flex-col
          items-center
        "
        {...fade}
        {...(!reduce && {
          transition: { ...fade.transition, delay: 0.7 },
        })}
      >
        <a
          href="#service"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#service")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group"
          aria-label="Aller à la section suivante"
        >
          <ArrowDown
            className={`
              h-10 w-10 sm:h-12 sm:w-12
              text-[#5AC8FA]
              ${styles.pulseArrow}
            `}
            aria-hidden
          />
        </a>

        <p className="mt-1 text-xs text-gray-500">
          Faites défiler ou cliquez
        </p>
      </motion.div>
    </section>
  );
}