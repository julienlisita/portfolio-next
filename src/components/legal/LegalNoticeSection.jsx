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
        Adresse : 12 Avenue Pierre Mendes-France, 33700 Mérignac
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
        Netlify, Inc.
        <br />
        2325 3rd Street, Suite 296, San Francisco, CA 94107, USA
        <br />
        <a
          href="https://www.netlify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#5AC8FA]"
        >
          https://www.netlify.com
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