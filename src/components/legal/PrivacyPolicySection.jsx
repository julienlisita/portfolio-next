// src/components/legal/PrivacyPolicySection.jsx

import Section from "../layout/Section";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../layout/SectionHeading";

export default function PrivacyPolicySection() {
  return (
    <Section
      id="privacy-policy"
      labelledBy="privacy-policy-title"
      bgColor="#222222"
    >
      <SectionWrapper>
        <SectionHeading
          id="privacy-policy-title"
          title="Politique de confidentialité"
          align="left"
          className="mb-8 sm:mb-10 lg:mb-12"
        />

        <div className="max-w-4xl space-y-8 text-base leading-relaxed text-gray-300 sm:space-y-10">
          {/* Collecte des données */}
          <div>
            <h3 className="mb-3 font-semibold text-gray-100">
              Collecte des données
            </h3>

            <p>
              Ce site ne collecte pas de données personnelles automatiquement.
              Les seules données enregistrées sont celles envoyées
              volontairement via le formulaire de contact (nom, email, message).
            </p>
          </div>

          {/* Utilisation des données */}
          <div>
            <h3 className="mb-3 font-semibold text-gray-100">
              Utilisation des données
            </h3>

            <p>
              Les données sont utilisées uniquement pour répondre aux
              messages et ne sont jamais partagées avec des tiers.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h3 className="mb-3 font-semibold text-gray-100">
              Cookies
            </h3>

            <p>
              Ce site n’utilise pas de cookies de suivi ni de publicité.
            </p>
          </div>

          {/* Droits des utilisateurs */}
          <div>
            <h3 className="mb-3 font-semibold text-gray-100">
              Droits des utilisateurs
            </h3>

            <p>
              Vous pouvez demander l’accès, la modification ou la suppression
              de vos données en m’écrivant à{" "}
              <a
                href="mailto:contact@julienlisita.com"
                className="text-[#5AC8FA] transition-colors hover:underline"
              >
                contact@julienlisita.com
              </a>
              .
            </p>
          </div>
        </div>
      </SectionWrapper>
    </Section>
  );
}