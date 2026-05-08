// src/components/howIWork/HowIWorkMethod.jsx

import Section from "../layout/Section";
import Button from "../UI/Button";

const steps = [
  {
    t: "Échange initial",
    d: "On clarifie vos objectifs, votre cible, vos pages et vos priorités (et votre budget).",
    bonus: "Livrable : un mini-cadrage (plan + périmètre + prochaines étapes).",
  },
  {
    t: "Conception",
    d: "Je vous conseille sur la structure et le design. Soit à partir de votre maquette, soit je propose une base simple et cohérente.",
    bonus: "Livrable : structure de page + contenu conseillé (et maquette Figma si besoin).",
  },
  {
    t: "Développement",
    d: "Je développe votre site et je vous montre l’avancement régulièrement, par petites itérations.",
    bonus: "Livrable : démos / validations progressives.",
  },
  {
    t: "Mise en ligne",
    d: "Votre site est accessible à vos clients, optimisé pour mobile et prêt pour le référencement.",
    bonus: "Livrable : mise en ligne + réglages SEO de base + conseils.",
  },
  {
    t: "Suivi & maintenance",
    d: "Je reste disponible pour les corrections, mises à jour, optimisations et petites évolutions.",
    bonus: "Option : forfait mensuel ou interventions ponctuelles.",
  },
];

export default function HowIWorkMethod() {
  return (
    <Section id="method" title="Ma méthode de travail" className="text-base sm:text-lg lg:text-xl">
      <p className="text-gray-300">
        Un parcours simple, avec des points de validation à chaque étape.
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
            <p className="text-gray-500 text-xs mt-2">{s.bonus}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center">
        <Button href="/services" variant="text">
          Voir mes services ›
        </Button>
      </div>
    </Section>
  );
}