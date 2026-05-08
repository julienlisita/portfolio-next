// src/components/about/AboutIntro.jsx

import Section from "../layout/Section";

export default function AboutIntro() {
  return (
    <>
      {/* Photo */}
      <div className="flex justify-center my-8">
        <img
          src="/assets/images/profile-pic.avif"
          alt="Portrait de Julien Lisita, développeur web freelance"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width="208"
          height="208"
        />
      </div>

      {/* En bref */}
      <Section className="text-base sm:text-lg lg:text-xl">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-300">
          <li>
            <strong>Spécialités :</strong> React, Next.js, Node.js
          </li>
          <li>
            <strong>Localisation :</strong> Mérignac – Bordeaux (remote possible)
          </li>
          <li>
            <strong>Clients :</strong> artisans, indépendants, commerces, TPE/PME
          </li>
          <li>
            <strong>Approche :</strong> claire, itérative, orientée résultat
          </li>
        </ul>
      </Section>
    </>
  );
}