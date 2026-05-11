// src/components/legal/PrivacyPolicySection.jsx

import Section from "../layout/Section";

export default function PrivacyPolicySection() {
  return (
    <Section title="Politique de confidentialité">
      <p>
        <strong>Collecte des données :</strong>
        <br />
        Ce site ne collecte pas de données personnelles automatiquement. Les seules
        données enregistrées sont celles envoyées volontairement via le formulaire
        de contact (nom, email, message).
      </p>

      <p className="mt-8 sm:mt-10 lg:mt-12">
        <strong>Utilisation des données :</strong>
        <br />
        Les données sont utilisées uniquement pour répondre aux messages et ne sont
        jamais partagées avec des tiers.
      </p>

      <p className="mt-8 sm:mt-10 lg:mt-12">
        <strong>Cookies :</strong>
        <br />
        Ce site n’utilise pas de cookies de suivi ni de publicité.
      </p>

      <p className="mt-8 sm:mt-10 lg:mt-12">
        <strong>Droits des utilisateurs :</strong>
        <br />
        Vous pouvez demander l’accès, la modification ou la suppression de vos
        données en m’écrivant à contact@julienlisita.com.
      </p>
    </Section>
  );
}