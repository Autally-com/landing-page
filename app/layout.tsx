import type { Metadata, Viewport } from "next";
import "@fontsource-variable/instrument-sans";
import "@fontsource-variable/inter";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "@fontsource/ibm-plex-mono/latin-500.css";
import "./globals.css";
import "./refinement.css";
import "./liquid-glass.css";
import "./motion.css";
import "./hero.css";
import "./network-contact.css";

export const metadata: Metadata = {
  title: "Autally Exchange — Hotel Invoice Pilot",
  description: "Explore a hotel invoice pilot with Autally Exchange: a shared network in development connecting hotel systems with authorized expense and accounting applications.",
  openGraph: {
    title: "Autally Exchange",
    description: "Hotels first. An exchange built for more. Explore a pilot connecting hotel invoices with authorized expense and accounting applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary", title: "Autally Exchange", description: "Hotels first. An exchange built for more. Explore a pilot connecting hotel invoices with authorized expense and accounting applications." },
};

export const viewport: Viewport = { themeColor: "#FAFAF8", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
