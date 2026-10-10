"use client";

import { useState } from "react";

import { sendReservation } from "@/app/reservations/actions";

const TZ = "Europe/Paris";

function formatSlot(start, end) {
  const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
    timeZone: TZ,
    weekday: "long",
    day: "2-digit",
    month: "long",
  });

  const timeFormatter = new Intl.DateTimeFormat("fr-FR", {
    timeZone: TZ,
    hour: "2-digit",
    minute: "2-digit",
  });

  const startDate = new Date(start);
  const endDate = new Date(end);

  return `${dateFormatter.format(startDate)}, ${timeFormatter.format(
    startDate
  )} - ${timeFormatter.format(endDate)}`;
}

export default function ReservationForm({ slots }) {
  const [selectedSlotId, setSelectedSlotId] = useState(null);

  return (
    <form action={sendReservation} className="space-y-8">
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <section>
        <h2 className="mb-4 text-xl font-semibold">
          Choisissez un créneau
        </h2>

        {slots.length === 0 ? (
          <p className="text-gray-400">
            Aucun créneau disponible pour le moment.
          </p>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            {slots.map((slot) => {
              const selected = selectedSlotId === slot.id;

              return (
                <button
                  key={slot.id}
                  type="button"
                  onClick={() => setSelectedSlotId(slot.id)}
                  className={`rounded-xl border p-4 text-left transition ${
                    selected
                      ? "border-cyan-400 bg-cyan-400/10"
                      : "border-[#444] bg-[#252525] hover:border-[#666]"
                  }`}
                >
                  {formatSlot(slot.startAt, slot.endAt)}
                </button>
              );
            })}
          </div>
        )}

        <input
          type="hidden"
          name="slotId"
          value={selectedSlotId ?? ""}
        />
      </section>

      <div>
        <label
          htmlFor="clientName"
          className="mb-2 block text-sm text-gray-300"
        >
          Nom
        </label>

        <input
          id="clientName"
          name="clientName"
          type="text"
          required
          className="w-full rounded-lg border border-[#444] bg-[#252525] px-4 py-3 outline-none focus:border-cyan-400"
        />
      </div>

      <div>
        <label
          htmlFor="clientEmail"
          className="mb-2 block text-sm text-gray-300"
        >
          Email
        </label>

        <input
          id="clientEmail"
          name="clientEmail"
          type="email"
          required
          className="w-full rounded-lg border border-[#444] bg-[#252525] px-4 py-3 outline-none focus:border-cyan-400"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm text-gray-300"
        >
          Votre projet{" "}
          <span className="text-gray-500">(optionnel)</span>
        </label>

        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Quelques mots sur votre projet, vos besoins ou vos disponibilités..."
          className="w-full resize-none rounded-lg border border-[#444] bg-[#252525] px-4 py-3 outline-none focus:border-cyan-400"
        />
      </div>

      <button
        type="submit"
        disabled={!selectedSlotId || slots.length === 0}
        className="rounded-lg bg-white px-5 py-3 font-medium text-black disabled:cursor-not-allowed disabled:opacity-40"
      >
        Réserver ce créneau
      </button>
    </form>
  );
}