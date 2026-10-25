"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };
      setStatus(result.message ?? (response.ok ? "Message sent." : "Message could not be sent."));
      if (response.ok) form.reset();
    } catch {
      setStatus("The contact service could not be reached. No message was sent.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>Name<input name="name" autoComplete="name" maxLength={100} required /></label>
      <label>Email<input name="email" type="email" autoComplete="email" maxLength={254} required /></label>
      <label>Subject<input name="subject" maxLength={160} required /></label>
      <label>Message<textarea name="message" rows={5} maxLength={4000} required /></label>
      <label className="website-field" aria-hidden="true">Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <button className="button button-lime" type="submit" disabled={submitting}>{submitting ? "Sending…" : "Send message"}</button>
      <p className="form-status" role="status" aria-live="polite">{status}</p>
    </form>
  );
}