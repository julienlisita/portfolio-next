// src/components/blog/BlogCta.jsx

import Section from "../layout/Section";
import SectionWrapper from "../layout/SectionWrapper";

import Button from "../UI/Button";

export default function BlogCta() {
  return (
    <Section
      id="blog-cta"
      aria-label="Découvrir mes services"
    >
      <SectionWrapper>
        <div
          className="
            flex flex-col gap-5
            rounded-xl
            border border-[#2f2f2f]
            bg-[#1e1e1e]
            p-5 sm:p-6
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <p className="max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base">
            Un projet web en tête ? Découvrez ce que je peux concevoir
            pour votre activité.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              href="/services"
              variant="text"
            >
              Découvrir mes services ›
            </Button>

            <Button
              href="/reservations"
              variant="text"
            >
              Réserver un échange ›
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </Section>
  );
}