import "server-only";
import nodemailer from "nodemailer";

// SMTP settings come from the environment (see .env.example). Use the
// mailbox provider that hosts studio@ufanstudio.com (Zoho, Google Workspace…).

function getTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error("SMTP is not configured: set SMTP_HOST, SMTP_USER and SMTP_PASS.");
  }
  const port = Number(SMTP_PORT ?? 465);
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

type Mail = {
  to: string;
  replyTo: string;
  subject: string;
  text: string;
};

export async function sendMail({ to, replyTo, subject, text }: Mail) {
  const from = process.env.SMTP_FROM ?? process.env.SMTP_USER;
  await getTransport().sendMail({ from, to, replyTo, subject, text });
}
