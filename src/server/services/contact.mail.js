// src/server/services/contact.mail.js

const brevoApiKey = process.env.BREVO_API_KEY;
const contactNotificationEmail = process.env.CONTACT_TO_EMAIL;

export async function sendContactAdminEmail({
  name,
  email,
  message,
}) {
  if (!brevoApiKey) {
    console.warn(
      "[sendContactAdminEmail] BREVO_API_KEY manquante, email non envoyé"
    );
    return false;
  }

  if (!contactNotificationEmail) {
    console.warn(
      "[sendContactAdminEmail] CONTACT_TO_EMAIL manquante, email non envoyé"
    );
    return false;
  }

  const htmlContent = `
    <h2>Nouveau message depuis julienlisita.com</h2>

    <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
    <p><strong>Email :</strong> ${escapeHtml(email)}</p>

    <p>
      <strong>Message :</strong><br />
      ${escapeHtml(message).replace(/\n/g, "<br />")}
    </p>

    <hr />

    <p>
      Email envoyé automatiquement depuis le formulaire de contact
      de julienlisita.com.
    </p>
  `;

  const textContent = [
    "Nouveau message depuis julienlisita.com",
    "",
    `Nom : ${name}`,
    `Email : ${email}`,
    "",
    "Message :",
    message,
    "",
    "Email envoyé automatiquement depuis le formulaire de contact de julienlisita.com.",
  ].join("\n");

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",

      headers: {
        "api-key": brevoApiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },

      body: JSON.stringify({
        sender: {
          name: "Julien Lisita – Site web",
          email: "no-reply@julienlisita.com",
        },

        to: [
          {
            email: contactNotificationEmail,
          },
        ],

        replyTo: {
          email,
          name,
        },

        subject: `Nouveau message de ${name}`,

        htmlContent,
        textContent,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");

      console.error(
        "[sendContactAdminEmail] Brevo HTTP error",
        response.status,
        errorText
      );

      return false;
    }

    console.log("[sendContactAdminEmail] email envoyé via Brevo");

    return true;
  } catch (error) {
    console.error(
      "[sendContactAdminEmail] erreur réseau ou Brevo",
      error
    );

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