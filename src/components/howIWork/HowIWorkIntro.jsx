// src/components/howIWork/HowIWorkIntro.jsx

import Section from "../layout/Section";

export default function HowIWorkIntro() {
  return (
    <>
      <Section>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300">
          De l’échange initial à la mise en ligne, je vous explique comment je travaille
          et en quoi mes choix techniques permettent d’obtenir un site fiable, performant
          et évolutif.
        </p>
      </Section>

      <Section>
        <div className="flex justify-center mt-6">
          <img
            src="/assets/images/me-working.avif"
            alt="Julien Lisita en train de travailler"
            className="rounded-xl shadow-lg w-full max-w-[520px] h-auto object-cover"
            width="520"
            height="320"
            loading="lazy"
            decoding="async"
          />
        </div>
      </Section>
    </>
  );
}