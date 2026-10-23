// src/components/contact/ContactContent.jsx

import Section from "../layout/Section";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../layout/SectionHeading";

import ContactIntro from "./ContactIntro";
import ContactDetails from "./ContactDetails";
import ContactLocation from "./ContactLocation";

export default function ContactContent() {
  return (
    <Section
      id="contact-content"
      labelledBy="contact-content-title"
    >
      <SectionWrapper>
        <SectionHeading
          id="contact-content-title"
          eyebrow="ÉCHANGEONS"
          title="Comment souhaitez-vous me contacter ?"
          className="mb-8 sm:mb-10 lg:mb-12"
        />

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {/* Formulaire et réservation */}
          <div className="lg:col-span-2">
            <ContactIntro />
          </div>

          {/* Coordonnées et localisation */}
          <aside className="space-y-6">
            <ContactDetails />

            <ContactLocation />
          </aside>
        </div>
      </SectionWrapper>
    </Section>
  );
}