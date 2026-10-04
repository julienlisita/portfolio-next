//  src/app/contact/actions.js

"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { sendContactAdminEmail } from "@/server/services/contact.mail";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Nom requis")
    .max(100, "Nom trop long"),

  email: z
    .string()
    .trim()
    .email("Email invalide"),

  message: z
    .string()
    .trim()
    .min(10, "Message trop court")
    .max(5000, "Message trop long"),

  company: z.string().optional(),
});

export async function sendContact(formData) {
  // Honeypot anti-spam
  if (formData.get("company")) {
    console.warn("[sendContact] spam détecté via honeypot");

    redirect("/merci");
  }

  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    company: formData.get("company"),
  });

  if (!parsed.success) {
    console.error(
      "[sendContact] validation error",
      parsed.error.flatten()
    );

    redirect("/contact?error=validation");
  }

  const data = parsed.data;

  const sent = await sendContactAdminEmail({
    name: data.name,
    email: data.email,
    message: data.message,
  });

  if (!sent) {
    console.error("[sendContact] échec de l'envoi de l'email");

    redirect("/contact?error=send");
  }

  redirect("/merci");
}