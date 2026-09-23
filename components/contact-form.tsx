"use client";

import { useState, type FormEvent } from "react";
import { Mail, Copy } from "lucide-react";
import { contactEmail } from "./pilot-contact";

export function ContactForm() {
  const [draft, setDraft] = useState<{ href: string; body: string } | null>(null);
  const [status, setStatus] = useState("");

  function prepareDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? "").trim();
    for (const key of ["name", "email", "message"]) {
      const field = form.elements.namedItem(key) as HTMLInputElement | HTMLTextAreaElement;
      if (!value(key)) { field.setCustomValidity("Please fill in this field."); field.reportValidity(); return; }
    }
    const body = [`Name: ${value("name")}`, `Email: ${value("email")}`, ...(value("company") ? [`Company: ${value("company")}`] : []), ...(value("phone") ? [`Phone: ${value("phone")}`] : []), "", value("message")].join("\n");
    const href = `mailto:${contactEmail}?subject=${encodeURIComponent("Autally pilot enquiry")}&body=${encodeURIComponent(body)}`;
    setDraft({ href, body });
    setStatus("Your draft is ready. Open it in your email app, then send it when you’re ready.");
  }

  async function copyDraft() {
    if (!draft) return;
    try { await navigator.clipboard.writeText(draft.body); setStatus(`Message copied. Paste it into an email to ${contactEmail}.`); }
    catch { setStatus(`Copying wasn’t available. You can open the email draft or email ${contactEmail} directly.`); }
  }

  return <form className="contact-form" action={`mailto:${contactEmail}`} method="post" encType="text/plain" onSubmit={prepareDraft} onInput={event => {
    const field = event.target;
    if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) field.setCustomValidity("");
    setDraft(null); setStatus("");
  }} aria-labelledby="contact-form-title" aria-describedby="contact-form-help">
    <h3 id="contact-form-title">Tell us what you have in mind.</h3>
    <p className="contact-form-intro" id="contact-form-help">A first connection, a question, or a partnership idea. We’d like to hear it.</p>
    <div className="contact-fields">
      <label htmlFor="contact-name">Name<input id="contact-name" name="name" autoComplete="name" required maxLength={120} placeholder="Your name" /></label>
      <label htmlFor="contact-email">Email<input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" /></label>
      <label htmlFor="contact-company">Company <span>(optional)</span><input id="contact-company" name="company" autoComplete="organization" maxLength={160} placeholder="Company name" /></label>
      <label htmlFor="contact-phone">Phone <span>(optional)</span><input id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} placeholder="Including country code" /></label>
      <label htmlFor="contact-message" className="contact-message">Message<textarea id="contact-message" name="message" rows={4} required maxLength={4000} placeholder="Tell us about your business and the workflow you’d like to improve." /></label>
    </div>
    <p className="contact-form-note">This form prepares an email to {contactEmail}. You’ll send it from your email app.</p>
    {draft ? <div className="contact-form-actions"><a className="button button-primary" href={draft.href}>Open email draft<Mail size={17} aria-hidden="true" /></a><button type="button" className="copy-message" onClick={copyDraft}><Copy size={15} aria-hidden="true" />Copy message</button></div> : <button type="submit" className="button button-primary">Prepare email<Mail size={17} aria-hidden="true" /></button>}
    <p className="contact-status" role="status">{status}</p>
    <noscript>Please email <a href={`mailto:${contactEmail}`}>{contactEmail}</a> to get in touch.</noscript>
  </form>;
}
