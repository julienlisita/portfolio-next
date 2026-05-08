// src/components/portfolio/projectDetail/ProjectNotFound.jsx

import Link from "next/link";
import PageTitle from "../../UI/PageTitle";
import Section from "../../layout/Section";

export default function ProjectNotFound() {
  return (
    <>
      <PageTitle>Projet introuvable</PageTitle>
      <Section>
        <p className="text-gray-300">Ce projet n’existe pas (ou a été déplacé).</p>
        <p className="mt-4">
          <Link href="/realisations" className="text-blue-400 underline">
            ← Retour aux réalisations
          </Link>
        </p>
      </Section>
    </>
  );
}