"use client";

// src/components/layout/PageHero.jsx

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import Section from "./Section";
import SectionWrapper from "./SectionWrapper";
import PageTitle from "@/components/UI/PageTitle";

export default function PageHero({
  id,
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  children,
  caption,
  className = "",
}) {
  const reducedMotion = useReducedMotion();

  const headingId = id ? `${id}-title` : undefined;

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reducedMotion ? 0 : 22,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <Section
      id={id}
      labelledBy={headingId}
      className={`relative isolate overflow-hidden bg-transparent ${className}`}
    >
      <SectionWrapper>
        {/* Introduction */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: reducedMotion ? 0 : 0.12,
          }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Catégorie */}
          {eyebrow && (
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center justify-center gap-3"
            >
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#5AC8FA]"
              />

              <span className="text-xs font-semibold tracking-[0.18em] text-[#5AC8FA] sm:text-sm">
                {eyebrow}
              </span>

              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#5AC8FA]"
              />
            </motion.div>
          )}

          {/* Titre */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <PageTitle id={headingId}>
              {title}
            </PageTitle>
          </motion.div>

          {/* Description */}
          {description && (
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg"
            >
              {description}
            </motion.p>
          )}

          {/* Actions */}
          {(primaryAction || secondaryAction) && (
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              {/* CTA principal */}
              {primaryAction && (
                <Link
                  href={primaryAction.href}
                  className="
                    group inline-flex min-h-12
                    items-center justify-center gap-2
                    rounded-xl bg-[#5AC8FA]
                    px-6 py-3
                    text-sm font-semibold text-[#1C1C1C]
                    transition-all duration-300
                    hover:bg-[#83D6FB]
                    hover:shadow-[0_0_30px_rgba(90,200,250,0.2)]
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-[#5AC8FA]
                  "
                >
                  {primaryAction.label}

                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                    className="
                      transition-transform
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </Link>
              )}

              {/* CTA secondaire */}
              {secondaryAction && (
                <Link
                  href={secondaryAction.href}
                  className="
                    group inline-flex min-h-12
                    items-center justify-center gap-2
                    rounded-xl border border-white/15
                    px-6 py-3
                    text-sm font-medium text-white
                    transition-all duration-300
                    hover:border-white/30
                    hover:bg-white/[0.04]
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-[#5AC8FA]
                  "
                >
                  {secondaryAction.label}

                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Contenu visuel optionnel */}
        {children && (
          <div className="mt-16 sm:mt-20 lg:mt-24">
            {children}
          </div>
        )}

        {/* Légende optionnelle */}
        {caption && (
          <div
            className="
              mt-7 flex flex-wrap
              items-center justify-center gap-x-3 gap-y-2
              text-center text-xs text-gray-400
              sm:text-sm
            "
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#5AC8FA]"
            />

            {typeof caption === "string" ? (
              <span>{caption}</span>
            ) : (
              caption
            )}
          </div>
        )}
      </SectionWrapper>
    </Section>
  );
}