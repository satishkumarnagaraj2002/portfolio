import { NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
};

function isText(value: unknown): value is string {
  return typeof value === "string";
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    const parsed = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return NextResponse.json({ message: "Invalid form submission." }, { status: 400 });
    }
    payload = parsed as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Invalid form submission." }, { status: 400 });
  }

  if (isText(payload.website) && payload.website.trim()) {
    return NextResponse.json({ message: "Submission ignored." });
  }

  const name = isText(payload.name) ? payload.name.trim() : "";
  const email = isText(payload.email) ? payload.email.trim() : "";
  const subject = isText(payload.subject) ? payload.subject.trim() : "";
  const message = isText(payload.message) ? payload.message.trim() : "";
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || name.length > 100 || !emailPattern.test(email) || email.length > 254 || !subject || subject.length > 160 || !message || message.length > 4000) {
    return NextResponse.json({ message: "Please check the form fields and try again." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !from || !to) {
    return NextResponse.json({ message: "Email delivery is not configured yet. No message was sent." }, { status: 503 });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Portfolio contact: ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ message: "Email delivery failed. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ message: "Message sent. Thank you for reaching out." });
}
