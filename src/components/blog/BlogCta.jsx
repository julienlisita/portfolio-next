// src/components/blog/BlogCta.jsx

import Section from "../layout/Section";
import Button from "../UI/Button";

export default function BlogCta() {
  return (
    <Section>
      <div className="bg-[#1e1e1e] border border-[#2f2f2f] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-sm text-gray-300">
          Un projet web en tête ? Découvrez ce que je peux concevoir pour votre activité.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Button href="/services" variant="text">
            Découvrir mes services ›
          </Button>

          <Button href="/reservations" variant="text">
            Réserver un échange ›
          </Button>
        </div>
      </div>
    </Section>
  );
}