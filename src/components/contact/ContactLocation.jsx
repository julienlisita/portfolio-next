// src/components/contact/ContactLocation.jsx

export default function ContactLocation() {
  return (
    <div className="rounded-2xl bg-[#2a2a2a] p-6">
      <h3 className="mb-4 text-lg font-semibold text-white">
        Localisation
      </h3>

      <div className="space-y-2 text-sm leading-relaxed text-gray-200 sm:text-base">
        <p>Basé à Bordeaux</p>

        <p>À distance partout en France</p>

        <p>Déplacements possibles en Gironde sur demande</p>
      </div>
    </div>
  );
}