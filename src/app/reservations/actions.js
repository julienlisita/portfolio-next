// src/app/reservations/actions.js

"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

import {
  getSlotById,
  createReservationFromPublicSafe,
  isReservationRateLimited,
} from "@/server/services/reservations.service";

import {
  sendReservationAdminEmail,
  sendReservationConfirmationEmail,
} from "@/server/services/reservations.mail";

const schema = z.object({
  website: z.string().max(0).optional(),

  slotId: z.coerce.number().int().positive(),

  clientName: z
    .string()
    .trim()
    .min(2, "Nom trop court")
    .max(100),

  clientEmail: z
    .string()
    .trim()
    .email("Email invalide"),

  message: z
    .string()
    .trim()
    .max(2000)
    .optional()
    .transform((value) => value || undefined),
});

export async function sendReservation(formData) {
  const parsed = schema.safeParse({
    website: formData.get("website"),
    slotId: formData.get("slotId"),
    clientName: formData.get("clientName"),
    clientEmail: formData.get("clientEmail"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    console.error(
      "[sendReservation] validation error",
      parsed.error.flatten()
    );
    return;
  }

  const data = parsed.data;

  // Honeypot
  if (data.website) {
    return;
  }

  const hdrs = await headers();

  const clientIp =
    hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    hdrs.get("x-real-ip") ??
    null;

  if (await isReservationRateLimited(clientIp)) {
    redirect("/reservations?error=too-many-requests");
  }

  const result = await createReservationFromPublicSafe({
    slotId: data.slotId,
    clientName: data.clientName,
    clientEmail: data.clientEmail,
    message: data.message,
    clientIp,
  });

  if (!result.ok) {
    if (result.reason === "slot-unavailable") {
      redirect("/reservations?error=slot-unavailable");
    }

    redirect("/reservations?error=unknown");
  }

  // Envoi des emails après l'enregistrement de la réservation.
  // Une erreur Brevo ne doit pas annuler la réservation.
  try {
    const slot = await getSlotById(data.slotId);

    if (!slot) {
      console.warn(
        "[sendReservation] réservation enregistrée mais créneau introuvable"
      );
    } else {
      await Promise.all([
        sendReservationConfirmationEmail({
          clientEmail: data.clientEmail,
          clientName: data.clientName,
          slotStart: slot.startAt,
          slotEnd: slot.endAt,
        }),

        sendReservationAdminEmail({
          clientName: data.clientName,
          clientEmail: data.clientEmail,
          message: data.message,
          slotStart: slot.startAt,
          slotEnd: slot.endAt,
        }),
      ]);
    }
  } catch (error) {
    console.error(
      "[sendReservation] erreur lors de l'envoi des emails",
      error
    );
  }

  redirect("/reservations/merci");
}