// src/server/guards/requireAdmin.js

import { redirect } from "next/navigation";

import { getAdminSession } from "@/lib/auth";

export async function requireAdmin() {
  const session = await getAdminSession();

  if (!session) {
    redirect("/login");
  }

  return session;
}