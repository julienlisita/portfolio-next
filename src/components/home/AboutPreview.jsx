// src/components/home/AboutPreview.jsx

import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";

import Button from "../UI/Button";
import Section from "../layout/Section";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../layout/SectionHeading";

export default function AboutPreview() {
  return (
    <Section
      id="about"
      labelledBy="about-title"
      bgColor="#1D1D1D"
    >
      <SectionWrapper>
        <div
          className="
            grid grid-cols-1
            lg:grid-cols-[0.85fr_1.15fr]
            items-center
            gap-8 sm:gap-10 lg:gap-16
          "
        >
          {/* Photo */}
          <div
            className="
              relative
              order-2 lg:order-1
              w-full
              max-w-md lg:max-w-none
              mx-auto
              overflow-hidden
              rounded-2xl
              bg-[#252525]
            "
          >
            <div className="relative aspect-[4/5]">
              <Image
                src="/assets/images/homepage-profile.avif"
                alt="Julien Lisita, développeur web freelance à Bordeaux"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            {/* Dégradé discret en bas de la photo */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute inset-x-0 bottom-0
                h-1/3
                bg-linear-to-t
                from-[#1D1D1D]/50
                to-transparent
              "
            />
          </div>

          {/* Présentation */}
          <div
            className="
              order-1 lg:order-2
              flex flex-col items-start
            "
          >
            <SectionHeading
              id="about-title"
              eyebrow="FAISONS CONNAISSANCE"
              title="Derrière chaque projet, un interlocuteur unique"
            />

            {/* Texte */}
            <div className="mt-6 space-y-4 sm:space-y-5">
              <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                Moi, c'est Julien, développeur web freelance basé à Bordeaux.
                J'accompagne les indépendants, artisans et entreprises dans
                la création de solutions web adaptées à leur activité.
              </p>

              <p className="text-base sm:text-lg leading-relaxed text-gray-400">
                En travaillant directement avec moi, vous bénéficiez d'un
                interlocuteur unique, de la première discussion jusqu'à
                la mise en ligne de votre projet.
              </p>
            </div>

            {/* Localisation */}
            <div
              className="
                mt-6
                flex items-center gap-2
                text-sm sm:text-base
                text-gray-400
              "
            >
              <MapPin
                size={18}
                aria-hidden="true"
                className="shrink-0 text-[#5AC8FA]"
              />

              <span>
                Bordeaux · Partout en France et à distance
              </span>
            </div>

            {/* Bouton */}
            <div className="mt-8">
              <Button href="/a-propos" variant="secondary">
                <span className="inline-flex items-center gap-2">
                  En savoir plus sur moi
                </span>
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </Section>
  );
}