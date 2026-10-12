// src/app/reservations/merci/page.js

import Button from "@/components/UI/Button";
import PageTitle from "@/components/UI/PageTitle";
import Section from "@/components/layout/Section";

export const metadata = {
  title: "Réservation confirmée",
};

export default function ReservationThankYouPage() {
  return (
    <>
      <PageTitle>Réservation confirmée</PageTitle>

      <Section>
        <div className="mx-auto max-w-2xl">
          <div
            className="
              bg-[#2a2a2a]
              rounded-2xl
              p-6 sm:p-8
              text-center
            "
          >
            <h2 className="mb-4 text-xl sm:text-2xl font-semibold text-white">
              Votre rendez-vous est réservé !
            </h2>

            <p className="mb-3 text-base sm:text-lg text-gray-300">
              Votre réservation a bien été enregistrée. Vous allez recevoir un
              email de confirmation avec les détails de votre rendez-vous.
            </p>

            <p className="mb-8 text-sm text-gray-500">
              Si vous ne le trouvez pas, pensez à vérifier vos courriers
              indésirables.
            </p>

            <Button href="/" variant="primary">
              Retour à l’accueil
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}