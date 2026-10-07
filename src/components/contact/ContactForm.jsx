// src/components/contact/ContactForm.jsx

import Button from "../UI/Button";
import FloatingInput from "../form/FloatingInput";
import FloatingTextarea from "../form/FloatingTextarea";
import { sendContact } from "@/app/contact/actions";

export default function ContactForm() {
  return (
    <form
      name="contact"
      action={sendContact}
      className="
        w-full max-w-2xl
        bg-[#2a2a2a]
        rounded-2xl
        p-8
        space-y-6
        transition-all duration-300
        focus-within:shadow-[0_0_14px_rgba(0,122,255,0.35)]
        focus-within:border-[#5AC8FA]
      "
    >
      {/* Honeypot anti-spam */}
      <input
        type="text"
        name="company"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />
      <FloatingInput
        label="Nom"
        name="name"
        type="text"
        required
      />
      <FloatingInput
        label="Email"
        name="email"
        type="email"
        required
      />

      <FloatingTextarea
        label="Message"
        name="message"
        required
      />
      <div className="text-center">
        <Button type="submit" variant="primary">
          Envoyer
        </Button>
      </div>
    </form>
  );
}