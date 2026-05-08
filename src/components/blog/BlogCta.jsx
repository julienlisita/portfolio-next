// src/components/blog/BlogCta.jsx

import Section from "../layout/Section";
import Button from "../UI/Button";

export default function BlogCta() {
  return (
    <Section>
      <div className="bg-[#1e1e1e] border border-[#2f2f2f] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-sm text-gray-300">
          Un projet de site ? Je peux vous conseiller et vous faire une proposition adaptée.
        </p>

        <div className="flex items-center gap-3">
          <Button href="/contact" variant="text">
            Me contacter ›
          </Button>

          <a href="/realisations" className="text-sm text-gray-400 hover:underline">
            Voir des réalisations ›
          </a>
        </div>
      </div>
    </Section>
  );
}