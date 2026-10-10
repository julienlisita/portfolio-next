// src/server/services/reservations.mail.js

const brevoApiKey = process.env.BREVO_API_KEY;
const notificationEmail = process.env.CONTACT_TO_EMAIL;

const TZ = "Europe/Paris";

function formatSlot(start, end) {
  const formatter = new Intl.DateTimeFormat("fr-FR", {
    timeZone: TZ,
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return formatter.formatRange(
    new Date(start),
    new Date(end)
  );
}

export async function sendReservationConfirmationEmail({
  clientEmail,
  clientName,
  slotStart,
  slotEnd,
}) {
  if (!brevoApiKey) {
    console.warn(
      "[sendReservationConfirmationEmail] BREVO_API_KEY manquante"
    );
    return false;
  }

  const slot = formatSlot(slotStart, slotEnd);

  const htmlContent = `
    <h2>Votre rendez-vous est confirmé</h2>

    <p>Bonjour ${escapeHtml(clientName)},</p>

    <p>
      Votre rendez-vous avec Julien Lisita est bien enregistré.
    </p>

    <p>
      <strong>Créneau :</strong><br />
      ${escapeHtml(slot)}
    </p>

    <p>
      Je reviendrai vers vous avec les informations nécessaires
      pour notre échange.
    </p>

    <p>À bientôt,<br />Julien Lisita</p>
  `;

  const textContent = [
    `Bonjour ${clientName},`,
    "",
    "Votre rendez-vous avec Julien Lisita est bien enregistré.",
    "",
    `Créneau : ${slot}`,
    "",
    "Je reviendrai vers vous avec les informations nécessaires pour notre échange.",
    "",
    "À bientôt,",
    "Julien Lisita",
  ].join("\n");

  return sendBrevoEmail({
    to: clientEmail,
    subject: "Confirmation de votre rendez-vous – Julien Lisita",
    htmlContent,
    textContent,
  });
}

export async function sendReservationAdminEmail({
  clientName,
  clientEmail,
  message,
  slotStart,
  slotEnd,
}) {
  if (!notificationEmail) {
    console.warn(
      "[sendReservationAdminEmail] CONTACT_TO_EMAIL manquante"
    );
    return false;
  }

  const slot = formatSlot(slotStart, slotEnd);

  const htmlContent = `
    <h2>Nouvelle réservation sur julienlisita.com</h2>

    <p><strong>Nom :</strong> ${escapeHtml(clientName)}</p>
    <p><strong>Email :</strong> ${escapeHtml(clientEmail)}</p>
    <p><strong>Créneau :</strong> ${escapeHtml(slot)}</p>

    ${
      message
        ? `
          <p>
            <strong>Projet / message :</strong><br />
            ${escapeHtml(message).replace(/\n/g, "<br />")}
          </p>
        `
        : ""
    }

    <hr />

    <p>
      Réservation enregistrée automatiquement depuis julienlisita.com.
    </p>
  `;

  const textContent = [
    "Nouvelle réservation sur julienlisita.com",
    "",
    `Nom : ${clientName}`,
    `Email : ${clientEmail}`,
    `Créneau : ${slot}`,
    "",
    ...(message ? ["Projet / message :", message, ""] : []),
    "Réservation enregistrée automatiquement depuis julienlisita.com.",
  ].join("\n");

  return sendBrevoEmail({
    to: notificationEmail,
    replyTo: {
      email: clientEmail,
      name: clientName,
    },
    subject: `Nouvelle réservation – ${clientName}`,
    htmlContent,
    textContent,
  });
}

async function sendBrevoEmail({
  to,
  subject,
  htmlContent,
  textContent,
  replyTo,
}) {
  if (!brevoApiKey) {
    console.warn("[sendBrevoEmail] BREVO_API_KEY manquante");
    return false;
  }

  try {
    const response = await fetch(
      "https://api.brevo.com/v3/smtp/email",
      {
        method: "POST",

        headers: {
          "api-key": brevoApiKey,
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify({
          sender: {
            name: "Julien Lisita",
            email: "no-reply@julienlisita.com",
          },

          to: [{ email: to }],

          ...(replyTo ? { replyTo } : {}),

          subject,
          htmlContent,
          textContent,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");

      console.error(
        "[sendBrevoEmail] Brevo HTTP error",
        response.status,
        errorText
      );

      return false;
    }

    return true;
  } catch (error) {
    console.error("[sendBrevoEmail] erreur réseau ou Brevo", error);
    return false;
  }
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}