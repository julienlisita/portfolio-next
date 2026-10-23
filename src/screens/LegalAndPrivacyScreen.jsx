// src/screens/legal/LegalAndPrivacyScreen.jsx

import PageHero from "@/components/layout/PageHero";

import LegalNoticeSection from "@/components/legal/LegalNoticeSection";
import PrivacyPolicySection from "@/components/legal/PrivacyPolicySection";

export default function LegalAndPrivacyScreen() {
  return (
    <>
      <PageHero
        id="legal-hero"
        eyebrow="INFORMATIONS LÉGALES"
        title="Mentions légales & confidentialité"
        description="Retrouvez les informations relatives à l'édition et à l'hébergement de ce site, ainsi qu'à la protection de vos données personnelles."
      />

      <LegalNoticeSection />

      <PrivacyPolicySection />
    </>
  );
}