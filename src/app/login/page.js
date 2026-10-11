// src/app/login/page.js

import { redirect } from "next/navigation";

import { getAdminSession } from "@/lib/auth";

import { loginAction } from "./actions";

export const metadata = {
  title: "Administration",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function LoginPage({ searchParams }) {
  const session = await getAdminSession();

  if (session) {
    redirect("/admin");
  }

  const params = await searchParams;
  const error = params?.error;

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#1e1e1e] px-4">
      <div className="w-full max-w-md rounded-xl border border-[#333] bg-[#252525] p-8">
        <h1 className="mb-2 text-2xl font-semibold">
          Administration
        </h1>

        <p className="mb-8 text-sm text-gray-400">
          Connectez-vous pour accéder au back-office.
        </p>

        {error === "invalid" && (
          <p className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
            Email ou mot de passe incorrect.
          </p>
        )}

        {error === "configuration" && (
          <p className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
            L&apos;authentification administrateur est indisponible.
          </p>
        )}

        <form action={loginAction} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm text-gray-300"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="username"
              className="w-full rounded-lg border border-[#444] bg-[#1e1e1e] px-4 py-3 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm text-gray-300"
            >
              Mot de passe
            </label>

            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full rounded-lg border border-[#444] bg-[#1e1e1e] px-4 py-3 outline-none focus:border-cyan-400"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-white px-5 py-3 font-medium text-black transition hover:bg-gray-200"
          >
            Se connecter
          </button>
        </form>
      </div>
    </main>
  );
}