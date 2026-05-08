// src/components/contact/ContactIntro.jsx

import ContactForm from "./ContactForm";

export default function ContactIntro() {
  return (
    <div className="lg:col-span-2">
      <p className="text-left text-base sm:text-lg lg:text-xl">
        Je suis toujours ravi de discuter de nouveaux projets ou d’échanger des idées.
        N’hésitez pas à me contacter pour discuter de vos besoins. Je suis basé à Mérignac,
        près de Bordeaux, et je suis toujours à la recherche de nouveaux défis. J’aime
        collaborer avec mes clients pour comprendre leurs besoins et leur fournir des
        solutions personnalisées qui répondent à leurs objectifs.
      </p>

      <div className="mt-10 sm:mt-12 lg:mt-14">
        <ContactForm />
      </div>
    </div>
  );
}