// src/app/admin/layout.js

import Link from "next/link";

import { requireAdmin } from "@/server/guards/requireAdmin";
import { logoutAction } from "./actions";

export const dynamic = "force-dynamic";

export default async function AdminLayout({ children }) {
  await requireAdmin();

  return (
    <div className="min-h-screen bg-[#1e1e1e]">
      <header className="border-b border-[#333] bg-[#252525]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500">
              Administration
            </p>

            <p className="font-semibold">
              Julien Lisita
            </p>
          </div>
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6 text-sm">
              <Link
                href="/admin/reservations"
                className="text-gray-300 hover:text-white"
              >
                Réservations
              </Link>

              <Link
                href="/admin/slots"
                className="text-gray-300 hover:text-white"
              >
                Créneaux
              </Link>
            </nav>

            <form action={logoutAction}>
              <button
                type="submit"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                Se déconnecter
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        {children}
      </main>
    </div>
  );
}