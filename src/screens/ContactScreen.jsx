// src/screens/ContactScreen.jsx

import PageTitle from "../components/UI/PageTitle";
import Section from "../components/layout/Section";

import ContactIntro from "../components/contact/ContactIntro";
import ContactDetails from "../components/contact/ContactDetails";
import ContactLocation from "../components/contact/ContactLocation";
import ContactMap from "../components/contact/ContactMap";

export default function ContactScreen() {
  return (
    <>
      <PageTitle>Contact</PageTitle>

      <Section title="Discutons de vos besoins">
        <div className="grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-3">
          <ContactIntro />

          <aside className="lg:col-span-1 space-y-6">
            <ContactDetails />
            <ContactLocation />
          </aside>
        </div>
      </Section>

      <Section title="Carte">
        <ContactMap />
      </Section>
    </>
  );
}