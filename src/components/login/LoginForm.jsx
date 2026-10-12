// src/components/login/LoginForm.jsx

import Button from "@/components/UI/Button";
import FloatingInput from "@/components/form/FloatingInput";

import { loginAction } from "@/app/login/actions";

export default function LoginForm({ error }) {
  return (
    <div
      className="
        w-full
        bg-[#2a2a2a]
        rounded-2xl
        p-6 sm:p-8
        transition-all duration-300
        focus-within:shadow-[0_0_14px_rgba(0,122,255,0.35)]
      "
    >
      <p className="mb-8 text-center text-sm sm:text-base text-gray-400">
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

      <form action={loginAction} className="space-y-6">
        <FloatingInput
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="username"
        />

        <FloatingInput
          label="Mot de passe"
          name="password"
          type="password"
          required
          autoComplete="current-password"
        />

        <div className="pt-2 text-center">
          <Button type="submit" variant="primary">
            Se connecter
          </Button>
        </div>
      </form>
    </div>
  );
}