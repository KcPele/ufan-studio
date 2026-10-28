"use server";

import { budgetRanges, projectTypes } from "@/content/contact";
import { site } from "@/content/site";
import { sendMail } from "@/lib/mail";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
  /** Submitted values, so the form can refill itself after a failed attempt. */
  values?: Record<string, string>;
};

const field = (data: FormData, key: string) => String(data.get(key) ?? "").trim();

export async function submitEnquiry(_prev: ContactState, data: FormData): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field.
  if (field(data, "website")) {
    return { status: "success", message: "Thank you. Your enquiry has been sent." };
  }

  const name = field(data, "name");
  const organisation = field(data, "organisation");
  const email = field(data, "email");
  const projectType = field(data, "projectType");
  const budget = field(data, "budget");
  const message = field(data, "message");

  const values = { name, organisation, email, projectType, budget, message };
  const errors: ContactState["errors"] = {};
  if (!name) errors.name = "Please tell us your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please enter a valid email address.";
  if (message.length < 10) errors.message = "Please tell us a little about the project.";
  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please check the highlighted fields.", errors, values };
  }

  const text = [
    `Name: ${name}`,
    `Organisation: ${organisation || "-"}`,
    `Email: ${email}`,
    `Project type: ${projectTypes.includes(projectType) ? projectType : "-"}`,
    `Budget: ${budgetRanges.includes(budget) ? budget : "-"}`,
    "",
    message,
  ].join("\n");

  try {
    await sendMail({
      to: process.env.CONTACT_TO ?? site.email,
      replyTo: email,
      subject: `New enquiry from ${name}${organisation ? `, ${organisation}` : ""}`,
      text,
    });
  } catch (error) {
    console.error("Contact form email failed", error);
    return {
      status: "error",
      message: `Sorry, your message could not be sent. Please email us directly at ${site.email}.`,
      values,
    };
  }

  return { status: "success", message: "Thank you. Your enquiry has been sent and we will reply within two working days." };
}
