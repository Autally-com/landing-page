import type { Metadata, Viewport } from "next";
import "@fontsource-variable/instrument-sans";
import "@fontsource-variable/inter";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "@fontsource/ibm-plex-mono/latin-500.css";
import "./globals.css";
import "./refinement.css";
import "./liquid-glass.css";
import "./motion.css";

export const metadata: Metadata = {
  title: "Autally Exchange — Hotel Invoices for Business Buyers",
  description: "Help business buyers get hotel invoices and travel receipts. Autally is building a permissioned network for hotels, PMS, POS, receipt platforms, and financial applications.",
  openGraph: {
    title: "Autally Exchange",
    description: "Put hotel invoices where business buyers need them. Explore joining the Autally Exchange network.",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary", title: "Autally Exchange", description: "Put hotel invoices where business buyers need them. Explore joining the Autally Exchange network." },
};

export const viewport: Viewport = { themeColor: "#FAFAF8", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
