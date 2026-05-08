// src/components/about/AboutMethod.jsx

import Section from "../layout/Section";
import Button from "../UI/Button";

const pillars = [
  { t: "Écoute", d: "comprendre vos objectifs et contraintes" },
  { t: "Clarté", d: "des choix expliqués simplement" },
  { t: "Itérations", d: "ajustements rapides et visibles" },
  { t: "Suivi", d: "documentation et évolutions possibles" },
];

export default function AboutMethod() {
  return (
    <Section
      title="Une méthode simple et transparente"
      className="text-base sm:text-lg lg:text-xl"
    >
      <p>
        Mon rôle est de vous guider et de transformer votre besoin en un site
        clair et efficace, sans jargon inutile. Vous suivez l’avancement et
        validez chaque étape.
      </p>

      <p className="text-sm text-gray-400 mt-2">
        Pour aller plus loin sur ma méthode de travail :{" "}
        <Button variant="text" to="/comment-je-travaille">
          voir comment je travaille ›
        </Button>
      </p>

      <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-300">
        <li>Analyse du besoin et cadrage du projet</li>
        <li>Structure du site et propositions visuelles</li>
        <li>Développement par itérations courtes avec points réguliers</li>
        <li>Mise en ligne, prise en main et accompagnement</li>
      </ul>

      <p className="mt-6">Ma méthode repose sur quatre piliers :</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {pillars.map((s) => (
          <div key={s.t} className="bg-[#2a2a2a] rounded-lg p-4">
            <p className="font-semibold text-gray-100">{s.t}</p>
            <p className="text-gray-300 text-sm mt-1">{s.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}