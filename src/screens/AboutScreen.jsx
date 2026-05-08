// src/screens/AboutScreen.jsx

import AboutIntro from "../components/about/AboutIntro";
import AboutJourney from "../components/about/AboutJourney";
import AboutMethod from "../components/about/AboutMethod";
import AboutRole from "../components/about/AboutRole";
import CtaFinal from "../components/patterns/CtaFinal";
import FaqSection from "../components/patterns/FaqSection";
import PageTitle from "../components/UI/PageTitle";
import { aboutFaq } from "../data/faqs";

export default function AboutScreen() {

  return (
    <>
      <PageTitle>À propos</PageTitle>

      <AboutIntro />
      <AboutRole />
      <AboutJourney />
      <AboutMethod />

      {/* FAQ */}
      <FaqSection
        title="FAQ — À propos"
        faq={aboutFaq}
        ariaLabelledby="faq-about-title"
      />

      {/* CTA final */}
      <CtaFinal
        title="Envie de collaborer ?"
        tagline="Discutons ensemble de votre projet et voyons comment le concrétiser."
        primary={{ href: "/contact", text: "Me contacter" }}
        secondary={{ href: "/realisations", text: "Voir des projets réalisés" }}
      />
    </>
  );
}