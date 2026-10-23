// src/components/contact/ContactIntro.jsx

import Button from "../UI/Button";
import ContactForm from "./ContactForm";

export default function ContactIntro() {
  return (
    <div>
      {/* Réservation */}
      <div>
        <p className="mb-4 font-semibold text-gray-200">
          Comment souhaitez-vous échanger ?
        </p>

        <div className="flex flex-col items-start gap-2">
          <Button
            href="/reservations"
            variant="primary"
          >
            Réserver un échange
          </Button>

          <p className="text-sm text-gray-500">
            30 min par téléphone, sur rendez-vous.
          </p>
        </div>

        {/* Séparateur */}
        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#3a3a3a]" />

          <span className="text-sm text-gray-500">
            ou
          </span>

          <div className="h-px flex-1 bg-[#3a3a3a]" />
        </div>

        <p className="text-sm text-gray-400">
          Envoyez-moi un message via le formulaire ci-dessous.
        </p>
      </div>

      {/* Formulaire */}
      <div className="mt-6">
        <ContactForm />
      </div>
    </div>
  );
}