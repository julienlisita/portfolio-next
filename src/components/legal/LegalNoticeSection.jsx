// src/components/legal/LegalNoticeSection.jsx

import Section from "../layout/Section";

export default function LegalNoticeSection() {
  return (
    <Section title="Mentions légales">
      <p>
        <strong>Éditeur du site :</strong>
        <br />
        Julien Lisita – Développeur web freelance
        <br />
        Adresse : 63 rue Ernest Renan, 33000 Bordeaux
        <br />
        Email : contact@julienlisita.com
        <br />
        Statut juridique : Entreprise individuelle (EI)
        <br />
        SIRET : 933 677 965 00016
        <br />
        TVA non applicable, article 293 B du CGI
      </p>

      <p className="mt-8 sm:mt-10 lg:mt-12">
        <strong>Hébergement :</strong>
        <br />
        Vercel Inc.
        <br />
        440 N Barranca Ave #4133, Covina, CA 91723, USA
        <br />
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#5AC8FA]"
        >
          https://vercel.com
        </a>
      </p>

      <p className="mt-8 sm:mt-10 lg:mt-12">
        <strong>Propriété intellectuelle :</strong>
        <br />
        Tous les contenus de ce site (textes, images, code) sont la propriété de
        Julien Lisita, sauf mention contraire.
      </p>

      <p className="mt-8 sm:mt-10 lg:mt-12">
        <strong>Responsabilité :</strong>
        <br />
        L’éditeur ne peut être tenu responsable des dommages liés à l’utilisation
        du site ou à un dysfonctionnement éventuel.
      </p>
    </Section>
  );
}