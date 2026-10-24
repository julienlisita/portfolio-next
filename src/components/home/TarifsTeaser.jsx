// src/components/home/TarifsTeaser.jsx

import { Clock3, Code2 } from "lucide-react";

import Button from "../UI/Button";
import Section from "../layout/Section";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../layout/SectionHeading";

export default function TarifsTeaser() {
  return (
    <Section id="tarifs" labelledBy="tarifs-title">
      <SectionWrapper>
        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">

          {/* En-tête */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <SectionHeading
              id="tarifs-title"
              eyebrow="MES TARIFS"
              title="Des tarifs clairs, adaptés à votre projet"
              description="Chaque projet est différent. Je vous propose une solution adaptée à vos objectifs et à votre budget, avec un devis détaillé avant de commencer."
            />

            <div className="shrink-0">
              <Button href="/tarifs" variant="secondary">
                Découvrir mes tarifs
              </Button>
            </div>
          </div>

          {/* Bloc tarifaire */}
          <div
            className="
              grid grid-cols-1 lg:grid-cols-3
              overflow-hidden
              rounded-2xl
              border border-white/10
              bg-[#1D1D1D]
            "
          >
            {/* Site vitrine */}
            <div className="flex flex-col p-6 sm:p-8 lg:p-10">
              <span className="text-sm font-medium text-gray-400">
                Création de site vitrine
              </span>

              <div className="mt-4">
                <span className="block text-xs uppercase tracking-wider text-gray-500">
                  À partir de
                </span>

                <span className="mt-1 block text-4xl sm:text-5xl font-bold tracking-tight text-[#5AC8FA]">
                  900 €
                </span>
              </div>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-gray-400">
                Un site professionnel, responsive et conçu pour
                présenter votre activité et faciliter les prises de contact.
              </p>
            </div>

            {/* Applications sur mesure */}
            <div
              className="
                flex flex-col
                border-t border-white/10
                lg:border-t-0 lg:border-l
                p-6 sm:p-8 lg:p-10
              "
            >
              <div className="flex items-center gap-3 text-[#5AC8FA]">
                <Code2 size={22} aria-hidden="true" />

                <span className="text-sm font-medium text-gray-400">
                  Applications et fonctionnalités
                </span>
              </div>

              <h3 className="mt-6 text-2xl sm:text-3xl font-bold text-white">
                Sur devis
              </h3>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-gray-400">
                Des fonctionnalités et applications personnalisées
                selon les besoins et la complexité de votre projet.
              </p>
            </div>

            {/* Délais */}
            <div
              className="
                flex flex-col
                border-t border-white/10
                lg:border-t-0 lg:border-l
                p-6 sm:p-8 lg:p-10
              "
            >
              <div className="flex items-center gap-3 text-[#5AC8FA]">
                <Clock3 size={22} aria-hidden="true" />

                <span className="text-sm font-medium text-gray-400">
                  Délais de réalisation
                </span>
              </div>

              <h3 className="mt-6 text-2xl sm:text-3xl font-bold text-white">
                2 à 4 semaines
              </h3>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-gray-400">
                Pour un site vitrine, selon les fonctionnalités
                souhaitées et la disponibilité des contenus.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </Section>
  );
}