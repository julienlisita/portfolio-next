// src/components/home/AboutPreview.jsx

import HomeSectionWrapper from "./HomeSectionWrapper";

export default function AboutPreview() {
  return (
    <HomeSectionWrapper
      id="about"
      title="Qui je suis et comment je travaille"
      link={{ href: "/a-propos", text: "Découvrir mon parcours" }}
    >
      <div className="flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-10">
        {/* Photo */}
        <div className="w-full sm:w-2/5 lg:w-1/3 rounded-2xl overflow-hidden relative">
          <img
            src="/assets/images/homepage-profile.avif"
            alt="Julien Lisita, développeur web freelance à Bordeaux"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#222222] to-transparent" />
        </div>

        {/* Texte */}
        <div className="w-full sm:flex-1 flex flex-col justify-center">
          <p className="text-base sm:text-lg lg:text-xl leading-snug text-gray-300">
            Je suis Julien, développeur web basé à Bordeaux. J’aide les indépendants,
            artisans et petites entreprises à créer des sites et des outils concrets
            pour développer leur activité.
          </p>

          <p className="text-base sm:text-lg lg:text-xl mt-5 sm:mt-6 text-gray-300">
            Mon rôle ne se limite pas à développer un site : je vous aide à clarifier
            vos besoins, structurer vos contenus et choisir les fonctionnalités vraiment
            utiles pour vos clients.
          </p>

          <p className="text-base sm:text-lg lg:text-xl mt-5 sm:mt-6 text-gray-300">
            Avec une méthode simple et progressive, je conçois des solutions claires,
            rapides et évolutives, pensées pour être faciles à maintenir dans
            la durée.
          </p>
        </div>
      </div>
    </HomeSectionWrapper>
  );
}