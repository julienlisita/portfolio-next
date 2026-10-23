// src/components/legal/LegalNoticeSection.jsx

import Section from "../layout/Section";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../layout/SectionHeading";

export default function LegalNoticeSection() {
  return (
    <Section
      id="legal-notice"
      labelledBy="legal-notice-title"
    >
      <SectionWrapper>
        <SectionHeading
          id="legal-notice-title"
          title="Mentions légales"
          align="left"
          className="mb-8 sm:mb-10 lg:mb-12"
        />

        <div className="max-w-4xl space-y-8 text-base leading-relaxed text-gray-300 sm:space-y-10">
          {/* Éditeur */}
          <div>
            <h3 className="mb-3 font-semibold text-gray-100">
              Éditeur du site
            </h3>

            <address className="space-y-1 not-italic">
              <p>Julien Lisita – Développeur web freelance</p>
              <p>63 rue Ernest Renan, 33000 Bordeaux</p>

              <p>
                <a
                  href="mailto:contact@julienlisita.com"
                  className="text-[#5AC8FA] transition-colors hover:underline"
                >
                  contact@julienlisita.com
                </a>
              </p>
            </address>

            <div className="mt-3 space-y-1">
              <p>Statut juridique : Entreprise individuelle (EI)</p>
              <p>SIRET : 933 677 965 00016</p>
              <p>TVA non applicable, article 293 B du CGI</p>
            </div>
          </div>

          {/* Hébergement */}
          <div>
            <h3 className="mb-3 font-semibold text-gray-100">
              Hébergement
            </h3>

            <address className="space-y-1 not-italic">
              <p>Vercel Inc.</p>
              <p>440 N Barranca Ave #4133, Covina, CA 91723, USA</p>
            </address>

            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-[#5AC8FA] transition-colors hover:underline"
            >
              Site de Vercel
            </a>
          </div>

          {/* Propriété intellectuelle */}
          <div>
            <h3 className="mb-3 font-semibold text-gray-100">
              Propriété intellectuelle
            </h3>

            <p>
              Tous les contenus de ce site (textes, images, code) sont la
              propriété de Julien Lisita, sauf mention contraire.
            </p>
          </div>

          {/* Responsabilité */}
          <div>
            <h3 className="mb-3 font-semibold text-gray-100">
              Responsabilité
            </h3>

            <p>
              L’éditeur ne peut être tenu responsable des dommages liés
              à l’utilisation du site ou à un dysfonctionnement éventuel.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </Section>
  );
}