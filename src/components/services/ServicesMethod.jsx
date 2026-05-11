// src/components/services/ServicesMethod.jsx

import Section from "../layout/Section";
import Button from "../UI/Button";

const steps = [
  { t: "Échange initial", d: "Nous clarifions vos besoins, vos objectifs et les priorités du projet." },
  { t: "Conception", d: "Je vous propose une structure claire, un parcours cohérent et une direction visuelle adaptée." },
  { t: "Développement", d: "Je développe le site ou les fonctionnalités, avec des points réguliers pour valider l’avancement." },
  { t: "Mise en ligne", d: "Votre site est publié, testé et accessible sur tous les supports." },
  { t: "Suivi & maintenance", d: "Je peux rester disponible pour les ajustements, la maintenance ou les futures évolutions." },
];

export default function ServicesMethod() {
  return (
    <Section id="method" title="Ma méthode de travail" className="text-base sm:text-lg lg:text-xl text-gray-300">
      <p>Un projet avance mieux quand les étapes sont claires. Vous savez ce qui est prévu, ce qui est en cours et ce qui reste à valider.</p>

      <p className="text-sm text-gray-400 mt-2">
        Pour les plus curieux, je détaille mon approche et mes choix techniques ici :{" "}
        <Button variant="text" href="/comment-je-travaille">
          voir comment je travaille ›
        </Button>
      </p>

      <div className="relative mt-6">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-[#2f2f2f]" />

        {steps.map((s, i) => (
          <div key={s.t} className="pl-12 pb-6">
            <div className="relative">
              <span className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#2a2a2a] text-[#007AFF] text-xs font-semibold">
                {i + 1}
              </span>
              <h4 className="text-gray-100 font-semibold">{s.t}</h4>
            </div>
            <p className="text-gray-400 text-sm mt-1">{s.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}