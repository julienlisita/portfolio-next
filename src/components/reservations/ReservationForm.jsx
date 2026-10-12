// src/components/reservations/reservationForm.jsx

"use client";

import { useState } from "react";

import { sendReservation } from "@/app/reservations/actions";
import Button from "@/components/UI/Button";
import FloatingInput from "@/components/form/FloatingInput";
import FloatingTextarea from "@/components/form/FloatingTextarea";

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
    <form
      action={sendReservation}
      className="
        w-full
        bg-[#2a2a2a]
        rounded-2xl
        p-6 sm:p-8
        space-y-8
        transition-all duration-300
        focus-within:shadow-[0_0_14px_rgba(0,122,255,0.35)]
      "
    >
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <section>
        <h2 className="mb-4 text-lg sm:text-xl font-semibold text-white">
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
                  className={`
                    rounded-xl border p-4
                    text-left
                    transition-all duration-200
                    ${
                      selected
                        ? "border-[#5AC8FA] bg-[#5AC8FA]/10 shadow-[0_0_8px_rgba(90,200,250,0.25)]"
                        : "border-[#3a3a3a] bg-[#1f1f1f] hover:border-[#5AC8FA]/70"
                    }
                  `}
                >
                  <span
                    className={
                      selected ? "text-[#5AC8FA]" : "text-gray-200"
                    }
                  >
                    {formatSlot(slot.startAt, slot.endAt)}
                  </span>
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

      <div className="space-y-6">
        <FloatingInput
          label="Nom"
          name="clientName"
          type="text"
          required
        />

        <FloatingInput
          label="Email"
          name="clientEmail"
          type="email"
          required
        />

        <FloatingTextarea
          label="Votre projet (optionnel)"
          name="message"
          rows={5}
        />
      </div>

      <div className="text-center">
        <Button
          type="submit"
          variant="primary"
          disabled={!selectedSlotId || slots.length === 0}
          className="disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
        >
          Réserver ce créneau
        </Button>
      </div>
    </form>
  );
}