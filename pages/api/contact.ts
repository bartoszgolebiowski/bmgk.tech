import type { NextApiRequest, NextApiResponse } from "next";
import Mailjet from "node-mailjet";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
  company?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_MESSAGE_LENGTH = 10;
const MAX_MESSAGE_LENGTH = 5000;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

/**
 * Accepts both parsed JSON objects and raw JSON strings, so the endpoint does
 * not depend on the request Content-Type header being set correctly.
 */
const parseBody = (body: unknown): Partial<ContactPayload> | null => {
  if (!body) {
    return null;
  }

  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch {
      return null;
    }
  }

  if (typeof body === "object") {
    return body as Partial<ContactPayload>;
  }

  return null;
};

const sendContactEmail = async (payload: ContactPayload) => {
  const apiKey = process.env.API_KEY_EMAIL_1;
  const apiSecret = process.env.API_KEY_EMAIL_2;

  if (!apiKey || !apiSecret) {
    throw new Error("Mailjet credentials are not configured");
  }

  const mailjet = new Mailjet({ apiKey, apiSecret });

  return mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: process.env.CONTACT_FROM_EMAIL || "noreply@bmgk.tech",
          Name: "BMGK.tech",
        },
        To: [
          {
            Email:
              process.env.CONTACT_TO_EMAIL || "mariusz.kaleta@bmgk.tech",
            Name: "Mariusz",
          },
        ],
        ReplyTo: {
          Email: payload.email,
          Name: payload.name,
        },
        Subject: `BMGK.tech — wiadomość od ${payload.name}`,
        TextPart: `${payload.name} (${payload.email})\n\n${payload.message}`,
        HTMLPart: `
          <h2>Nowa wiadomość z formularza BMGK.tech</h2>
          <p><strong>Imię:</strong> ${escapeHtml(payload.name)}</p>
          <p><strong>E-mail:</strong> ${escapeHtml(payload.email)}</p>
          <p><strong>Wiadomość:</strong></p>
          <p>${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>
        `,
        CustomID: "bmgk-contact-form",
      },
    ],
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res
      .status(405)
      .json({ status: "error", message: "Method not allowed" });
  }

  const body = parseBody(req.body);

  if (!body) {
    return res
      .status(400)
      .json({ status: "error", message: "Invalid request body" });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const message = String(body.message || "").trim();
  const company = String(body.company || "").trim();

  // Honeypot field — only bots fill it in. Pretend everything went fine.
  if (company) {
    return res.status(200).json({ status: "success" });
  }

  if (!name || name.length > 100) {
    return res
      .status(400)
      .json({ status: "error", message: "Invalid name" });
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 200) {
    return res
      .status(400)
      .json({ status: "error", message: "Invalid email address" });
  }

  if (message.length < MIN_MESSAGE_LENGTH || message.length > MAX_MESSAGE_LENGTH) {
    return res
      .status(400)
      .json({ status: "error", message: "Invalid message" });
  }

  try {
    await sendContactEmail({ name, email, message });
    return res.status(200).json({ status: "success" });
  } catch (error) {
    console.error("Contact form error:", error);
    return res
      .status(500)
      .json({ status: "error", message: "Email could not be sent" });
  }
}
