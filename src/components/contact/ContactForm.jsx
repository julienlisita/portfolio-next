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
      className="space-y-6"
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