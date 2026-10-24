// src/components/home/ContactTeaser.jsx

import { ArrowUpRight } from "lucide-react";

import Button from "../UI/Button";
import Section from "../layout/Section";
import SectionWrapper from "../layout/SectionWrapper";

export default function ContactTeaser() {
  return (
    <Section id="contact" labelledBy="contact-title" bgColor="#222222">
      <SectionWrapper>
        <div
          className="
            relative isolate overflow-hidden
            rounded-3xl
            border border-white/10
            bg-[#1A1A1A]
            px-6 py-10
            sm:px-10 sm:py-14
            lg:px-16 lg:py-16
          "
        >
          {/* Décor bleu et violet */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute -right-24 -top-32
              h-80 w-80
              rounded-full
              bg-[#007AFF]/15
              blur-[100px]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute -bottom-40 right-20
              h-80 w-80
              rounded-full
              bg-[#9B59B6]/15
              blur-[100px]
            "
          />

          {/* Contenu */}
          <div className="relative z-10 max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#5AC8FA]"
              />

              <span
                className="
                  text-xs font-semibold
                  uppercase tracking-[0.18em]
                  text-[#5AC8FA]
                "
              >
                UN PROJET EN TÊTE ?
              </span>
            </div>

            <h2
              id="contact-title"
              className="
                text-3xl font-bold tracking-tight text-white
                sm:text-4xl
                lg:text-5xl
              "
            >
              Parlons de votre projet.
            </h2>

            <p
              className="
                mt-5 max-w-2xl
                text-base leading-relaxed text-gray-300
                sm:text-lg
              "
            >
              Vous avez une idée, un besoin ou simplement une question ?
              Échangeons sur votre projet pour trouver ensemble
              une solution adaptée à votre activité.
            </p>

            <div className="mt-8 sm:mt-10">
              <Button href="/contact">
                <span className="inline-flex items-center gap-2">
                  Discuter de mon projet
                  <ArrowUpRight size={19} aria-hidden="true" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </Section>
  );
}