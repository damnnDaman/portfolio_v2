// actions/sendEmail.ts
"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const apiKey = "re_Cy3VPeva_Cw6LHd1zv7sQBf74Aj4jCm7e";
if (!apiKey) {
  throw new Error("Missing RESEND_API_KEY environment variable");
}

const resend = new Resend(apiKey);

export async function sendEmail(formData: FormData) {
  // pull & normalize your inputs
  const senderEmailRaw = formData.get("senderEmail");
  const messageRaw = formData.get("message");

  const senderEmail = typeof senderEmailRaw === "string" ? senderEmailRaw : "";
  const message = typeof messageRaw === "string" ? messageRaw : "";

  // validation
  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "dmkumar2507@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, { senderEmail, message }),
    });
    return { data };
  } catch (err: unknown) {
    return { error: getErrorMessage(err) };
  }
}
