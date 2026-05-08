// src/components/howIWork/HowIWorkNoCodeComparison.jsx

import Section from "../layout/Section";

export default function HowIWorkNoCodeComparison() {
  return (
    <Section title="Pourquoi ne pas utiliser un outil clé en main ?">
      <p className="text-base sm:text-lg lg:text-xl text-gray-300">
        Des solutions comme Wix, WordPress.com ou des offres tout-en-un peuvent convenir pour démarrer rapidement.
        Mais dès qu’un site doit être clair, bien référencé et évoluer dans le temps, leurs limites apparaissent.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="bg-[#1e1e1e] border border-[#2f2f2f] rounded-xl p-5">
          <h3 className="text-gray-100 font-semibold mb-3">Solutions clé en main</h3>
          <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
            <li>• Structure souvent figée</li>
            <li>• SEO limité ou peu maîtrisable</li>
            <li>• Performances variables</li>
            <li>• Dépendance à une plateforme</li>
            <li>• Évolutions parfois coûteuses ou bloquées</li>
          </ul>
        </div>

        <div className="bg-[#1e1e1e] border border-[#2f2f2f] rounded-xl p-5">
          <h3 className="text-gray-100 font-semibold mb-3">Ma méthode</h3>
          <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
            <li>• Structure pensée pour vos clients</li>
            <li>• SEO propre dès la base</li>
            <li>• Site rapide et léger</li>
            <li>• Vous êtes propriétaire de votre site</li>
            <li>• Évolutif sans tout refaire</li>
          </ul>
        </div>
      </div>

      <p className="text-sm text-gray-400 mt-6">
        L’objectif n’est pas d’utiliser “plus de technique”, mais la bonne solution
        pour un site fiable, durable et adapté à votre activité.
      </p>
    </Section>
  );
}