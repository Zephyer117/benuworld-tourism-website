import nodemailer from "nodemailer";
import { getContact, getSettings } from "@/lib/data";
import type { Inquiry } from "@/lib/types";

const SUBJECT_LABELS: Record<string, string> = {
  "inbound-tourism": "Inbound tourism",
  "outbound-tourism": "Outbound tourism",
  investment: "Foreign investment",
  education: "Teaching / curriculum",
  general: "General inquiry",
  partnership: "Partnership",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function isMailConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

export async function resolveInquiryInbox() {
  const envInbox = process.env.INQUIRY_EMAIL?.trim();
  if (envInbox) return envInbox;
  const [settings, contact] = await Promise.all([getSettings(), getContact()]);
  return (
    settings.inquiryEmail?.trim() ||
    contact.email?.trim() ||
    "info@benuworld.com"
  );
}

function transporter() {
  const port = Number(process.env.SMTP_PORT || 587);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function sendInquiryEmails(inquiry: Inquiry) {
  if (!isMailConfigured()) {
    throw new Error("SMTP is not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS in .env.local.");
  }

  const inbox = await resolveInquiryInbox();
  const from = process.env.SMTP_FROM || process.env.SMTP_USER || inbox;
  const practice = SUBJECT_LABELS[inquiry.subject] || inquiry.subject || "Inquiry";
  const message = inquiry.message || "";
  const mail = transporter();

  await mail.sendMail({
    from,
    to: inbox,
    replyTo: inquiry.email,
    subject: `[BenuWorld] ${practice} — ${inquiry.name}`,
    text: [
      `New inquiry from ${inquiry.name}`,
      `Email: ${inquiry.email}`,
      `Phone: ${inquiry.phone || "—"}`,
      `Practice: ${practice}`,
      "",
      message,
    ].join("\n"),
    html: `
      <h2>New BenuWorld inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(inquiry.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(inquiry.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(inquiry.phone || "—")}</p>
      <p><strong>Practice:</strong> ${escapeHtml(practice)}</p>
      <p><strong>Brief:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
    `,
  });

  if (inquiry.email && process.env.INQUIRY_CONFIRM !== "false") {
    await mail.sendMail({
      from,
      to: inquiry.email,
      subject: "We received your inquiry — BenuWorld",
      text: `Hello ${inquiry.name},\n\nWe received your ${practice.toLowerCase()} brief and will reply from the office email.\n\nBenuWorld`,
      html: `<p>Hello ${escapeHtml(inquiry.name)},</p><p>We received your ${escapeHtml(practice.toLowerCase())} brief and will reply from the office email.</p><p>BenuWorld</p>`,
    });
  }

  return inbox;
}
