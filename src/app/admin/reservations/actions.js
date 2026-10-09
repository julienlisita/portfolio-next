// src/app/admin/reservations/actions.js

"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { cancelReservationAdmin } from "@/server/services/reservations.service";

const cancelSchema = z.object({
  reservationId: z.coerce.number().int().positive(),
});

export async function cancelReservationAction(formData) {
  const parsed = cancelSchema.safeParse({
    reservationId: formData.get("reservationId"),
  });

  if (!parsed.success) {
    console.error(
      "[cancelReservationAction] invalid payload",
      parsed.error.flatten()
    );
    return;
  }

  try {
    await cancelReservationAdmin(parsed.data.reservationId);
  } catch (err) {
    console.error("[cancelReservationAction] error", err);
    return;
  }

  revalidatePath("/admin/reservations");
  revalidatePath("/admin/slots");
  revalidatePath("/reservations");
}