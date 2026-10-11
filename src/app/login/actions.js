// src/app/login/actions.js

"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { z } from "zod";

import { createAdminSession } from "@/lib/auth";

const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(1),
});

export async function loginAction(formData) {
  const parsed = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    redirect("/login?error=invalid");
  }

  const { email, password } = parsed.data;

  const adminEmail = process.env.ADMIN_EMAIL;
  const passwordHashBase64 =
    process.env.ADMIN_PASSWORD_HASH_BASE64;

  const passwordHash = passwordHashBase64
    ? Buffer.from(passwordHashBase64, "base64").toString("utf8")
    : null;

  if (!adminEmail || !passwordHash) {
    console.error(
      "[loginAction] Admin credentials are not configured"
    );
    redirect("/login?error=configuration");
  }

  const emailMatches =
    email.toLowerCase() === adminEmail.toLowerCase();

  const passwordMatches = await bcrypt.compare(
    password,
    passwordHash
  );

  if (!emailMatches || !passwordMatches) {
    redirect("/login?error=invalid");
  }

  await createAdminSession();

  redirect("/admin");
}