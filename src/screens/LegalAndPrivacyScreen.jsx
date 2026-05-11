// src/screens/legal/LegalAndPrivacyScreen.jsx

import LegalNoticeSection from "@/components/legal/LegalNoticeSection";
import PrivacyPolicySection from "@/components/legal/PrivacyPolicySection";
import PageTitle from "@/components/UI/PageTitle";

export default function LegalAndPrivacyScreen() {
  return (
    <>
      <PageTitle>Mentions légales & Politique de confidentialité</PageTitle>
      <LegalNoticeSection />
      <PrivacyPolicySection />
    </>
  );
}
