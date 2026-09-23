import { ArrowUpRight } from "lucide-react";

export const contactEmail = "tomas@autally.com";
export const contactHref = `mailto:${contactEmail}?subject=${encodeURIComponent("Autally hotel pilot")}`;

export function PilotContact() {
  return <div className="pilot-contact">
    <a className="button button-primary" href="https://www.linkedin.com/company/autally" target="_blank" rel="noopener noreferrer"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2ZM8 19H5V9h3ZM6.5 7.7a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 19h-3v-5.3c0-1.3-.5-2-1.5-2-1.1 0-1.7.8-1.7 2V19h-3V9h2.9v1.4A3.2 3.2 0 0 1 15.5 9c2.3 0 3.5 1.4 3.5 4.2Z" /></svg>Contact on LinkedIn<ArrowUpRight size={15} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
    <p className="pilot-button-note">Prefer email? <a href={contactHref}>{contactEmail}</a></p>
  </div>;
}
