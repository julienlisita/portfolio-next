// src/screens/ContactScreen.jsx

import PageHero from "../components/layout/PageHero";

import ContactContent from "../components/contact/ContactContent";
import ContactMap from "../components/contact/ContactMap";

export default function ContactScreen() {
  return (
    <>
      <PageHero
        id="contact-hero"
        eyebrow="CONTACT"
        title="Parlons de votre projet"
        description="Un site web, une application métier ou une idée à concrétiser ? Parlons de votre projet et de vos besoins pour imaginer une solution adaptée."
      />

      <ContactContent />

      <ContactMap />
    </>
  );
}