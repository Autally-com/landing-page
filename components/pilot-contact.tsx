import { Mail } from "lucide-react";

export const contactEmail = "tomas@autally.com";
export const contactHref = `mailto:${contactEmail}?subject=${encodeURIComponent("Interest in Autally Exchange")}`;

export function PilotContact() {
  return <div className="pilot-contact">
    <a className="button button-primary" href={contactHref}>Email Tomas<Mail size={18} aria-hidden="true" /></a>
    <p className="pilot-button-note">{contactEmail}</p>
  </div>;
}
