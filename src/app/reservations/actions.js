// src/app/reservations/actions.js

"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

import {
  createReservationFromPublicSafe,
  isReservationRateLimited,
} from "@/server/services/reservations.service";

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

  redirect("/reservations/merci");
}