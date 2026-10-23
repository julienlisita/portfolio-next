"use client";

// src/components/common/CtaFinal.jsx

import { useId } from "react";
import { motion, useReducedMotion } from "motion/react";

import Button from "../UI/Button";
import SectionTitle from "../UI/SectionTitle";

import Section from "../layout/Section";
import SectionWrapper from "../layout/SectionWrapper";

const glow = {
  initial: "0px 0px 0px rgba(0,0,0,0)",
  visible:
    "0px 0px 12px rgba(90,200,250,0.4), 0px 0px 12px rgba(90,200,250,0.4)",
};

export default function CtaFinal({
  title,
  tagline,
  primary,
  secondary,
}) {
  const reducedMotion = useReducedMotion();
  const reactId = useId();

  const headingId = `${reactId}-title`;

  return (
    <Section
      labelledBy={headingId}
      className="relative"
    >
      <SectionWrapper>
        <motion.div
          initial={
            reducedMotion
              ? false
              : { boxShadow: glow.initial }
          }
          whileInView={{
            boxShadow: glow.visible,
          }}
          viewport={{ once: true }}
          transition={{
            duration: reducedMotion ? 0 : 0.6,
            delay: reducedMotion ? 0 : 0.5,
          }}
          whileHover={
            reducedMotion
              ? undefined
              : {
                  boxShadow: [
                    "0px 0px 10px rgba(90,200,250,0.35)",
                    "0px 0px 18px rgba(90,200,250,0.55)",
                    "0px 0px 10px rgba(90,200,250,0.35)",
                  ],
                  transition: {
                    duration: 1.2,
                    repeat: Infinity,
                  },
                }
          }
          className="
            rounded-xl
            bg-linear-to-r
            from-[#1e1e1e] to-[#2a2a2a]
            px-6 py-8
            text-center
            sm:px-8 sm:py-10
            lg:px-12 lg:py-12
          "
        >
          {/* Titre */}
          <SectionTitle
            id={headingId}
            align="center"
          >
            {title}
          </SectionTitle>

          {/* Description */}
          {tagline && (
            <p
              className="
                mx-auto mt-4 mb-6
                max-w-2xl
                text-base leading-relaxed
                text-gray-300
                sm:text-lg
              "
            >
              {tagline}
            </p>
          )}

          {/* Actions */}
          {(primary || secondary) && (
            <div
              className="
                flex flex-wrap
                items-center justify-center
                gap-4
              "
            >
              {primary && (
                <Button
                  href={primary.href}
                  variant="primary"
                  className="w-auto"
                >
                  {primary.text}
                </Button>
              )}

              {secondary && (
                <Button
                  href={secondary.href}
                  variant="secondary"
                  className="w-auto"
                >
                  {secondary.text}
                </Button>
              )}
            </div>
          )}
        </motion.div>
      </SectionWrapper>
    </Section>
  );
}