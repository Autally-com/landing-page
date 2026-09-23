import { ArrowRight, ArrowUpRight, CreditCard, ReceiptText, ShieldCheck, HandCoins, GitBranch, Building2 } from "lucide-react";
import { Header } from "@/components/header";
import { Brand, BrandMark } from "@/components/brand";
import { HeroNetwork } from "@/components/hero-network";
import { PilotContact } from "@/components/pilot-contact";
import { ContactForm } from "@/components/contact-form";
import { GlassSurface } from "@/components/glass-surface";

function CTA() {
  return <a className="button button-primary" href="#pilot">Explore a pilot<ArrowUpRight size={17} aria-hidden="true" /></a>;
}

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div id="top" />
    <Header />
    <main id="main" className="focused-page">
      <section className="hero mint-hero" aria-labelledby="hero-title"><div className="container hero-layout">
        <div className="hero-copy">
          <h1 id="hero-title"><span>Automate hotel invoices.</span> <span>Less admin after checkout.</span></h1>
          <div className="hero-intro">
            <p className="hero-lead">Autally Exchange is building a shared network between hotel systems and expense and accounting apps. The pilot aims to get invoices directly to the companies that need them, with less follow-up for hotel teams.</p>
            <div className="hero-actions"><CTA /><a href="#exchange" className="text-link">See the hotel example<ArrowRight size={17} aria-hidden="true" /></a></div>
          </div>
        </div>
        <figure className="hero-journey" aria-label="Illustrative authorized invoice journey: from a hotel or PMS, through Autally Exchange, to the business customer’s expense application.">
          <svg className="hero-ribbon" viewBox="0 0 520 430" preserveAspectRatio="none" aria-hidden="true"><path d="M52 98 C52 152 150 110 150 178 C150 235 350 195 350 265" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" pathLength="1" /></svg>
          <div className="journey-source" aria-hidden="true"><Building2 size={30} strokeWidth={1.5} /><div><strong>Hotel / PMS</strong><span>The invoice at its source</span></div></div>
          <div className="journey-exchange" aria-hidden="true"><GlassSurface variant="hero" /><BrandMark className="journey-mark" /><span>Autally Exchange</span><ArrowRight size={20} /></div>
          <div className="journey-buyer" aria-hidden="true"><ReceiptText size={26} strokeWidth={1.5} /><div><span>For the company</span><strong>The invoice.<br />In their expense app.</strong></div><div className="journey-permission"><ShieldCheck size={15} />With authorized access</div></div>
          <figcaption>Illustrative connection. Network in development.</figcaption>
        </figure>
      </div></section>
      <section className="hero-context container" aria-labelledby="vision-title"><div><h2 id="vision-title">Hotels first. An exchange built for more.</h2><p>Starting with hotels and property management systems (PMS). The vision: a shared exchange connecting purchase data with financial applications, across industries.</p></div><a href="#how-it-works" className="text-link">Explore the network<ArrowRight size={17} aria-hidden="true" /></a></section>

      <section id="exchange" className="section container use-case" aria-labelledby="example-title">
        <div className="section-heading"><h2 id="example-title">The stay is over.<br />The paperwork isn’t.</h2><div className="section-description"><p>A business has the hotel payment on its card statement. Its finance team still needs the invoice to account for the trip.</p></div></div>
        <div className="evidence-display">
          <div className="payment-record">
            <div className="record-heading"><CreditCard size={20} aria-hidden="true" /><span>THE BUSINESS PAID</span></div>
            <p className="transaction-amount">€427.60</p><h3>A hotel stay</h3>
            <p>The payment is recorded.<br />The invoice still needs chasing.</p>
            <div className="record-line"><span>PAYMENT</span><span>Business card</span></div>
            <div className="record-line"><span>INVOICE</span><span className="missing">Not attached</span></div>
          </div>
          <div className="evidence-connector" aria-hidden="true"><ArrowRight size={23} /></div>
          <div className="source-record">
            <div className="record-heading"><ReceiptText size={20} aria-hidden="true" /><span>THE BUSINESS NEEDS</span><span className="authorization"><ShieldCheck size={13} aria-hidden="true" />Authorized retrieval</span></div>
            <h3>The invoice behind the payment.</h3>
            <div className="receipt-table"><div><span>Stay</span><span>Room and breakfast</span></div><div><span>VAT</span><span>Tax breakdown</span></div><div><span>Invoice</span><span>Number and supplier details</span></div></div>
            <div className="evidence-total"><span>Ready to match in its expense app</span><strong>€427.60</strong></div>
          </div>
        </div>
        <p className="illustrative-note">Illustrative workflow. Retrieval depends on participating sources, available data, and authorization.</p>
        <div className="buyer-outcome"><h3>Fewer follow-ups for the hotel.<br />Less chasing for the company.</h3><p>The aim: retrieve the invoice from its source, with authorization, so travellers spend less time collecting paperwork and finance teams can reconcile the stay.</p></div>
      </section>

      <section id="providers" className="section provider-section" aria-labelledby="providers-title"><div className="container">
        <div className="section-heading"><h2 id="providers-title">Make your hotel easier to do business with.</h2><div className="section-description"><p>For hotels and PMS providers, the pilot starts with one practical goal: help business guests get invoices into their company’s tools, with less work for your team.</p></div></div>
        <div className="provider-benefits">
          <article><Building2 size={26} aria-hidden="true" /><h3>Cut invoice follow-ups</h3><p>Give authorized applications a route to the invoice at its source. The goal: fewer resend requests for your team and less paperwork for guests.</p></article>
          <article><GitBranch size={26} aria-hidden="true" /><h3>Connect once. Reach further.</h3><p>We’re designing a shared connection that can serve multiple participating apps. Your platform controls what it shares, with whom, and for what purpose.</p></article>
          <article><HandCoins size={26} aria-hidden="true" /><h3>Explore retrieval rewards</h3><p>We’re exploring compensation for the provider that fulfils a successful, authorized retrieval—whether a hotel, PMS or another source. Terms are still to be defined with pilot partners.</p></article>
        </div>
      </div></section>

      <section id="how-it-works" className="section container network-explainer" aria-labelledby="network-title">
        <div className="section-heading"><h2 id="network-title">One exchange.<br />More ways to connect.</h2><div className="section-description"><p>Hotels are the pilot focus. Over time, restaurant POS systems, receipt apps and payment platforms could also supply data to expense, accounting and banking applications. A participant could both provide and retrieve data.</p></div></div>
        <HeroNetwork />
        <div className="network-questions" id="users">
          <details><summary>Why would competing applications join?<span aria-hidden="true">+</span></summary><p>A receipt app could provide documents it already holds and retrieve others it lacks. Shared access could widen coverage and reduce separate integrations. Each app would keep its own customer experience and decide which requests to fulfil.</p></details>
          <details><summary>What is ready today?<span aria-hidden="true">+</span></summary><p>Autally Exchange is in development. We’re looking for hotels, PMS providers and financial applications to shape an initial pilot. Together, we’ll validate the available invoices, authorization process and integration needed for a useful first connection.</p></details>
        </div>
      </section>

      <section id="pilot" className="pilot-section container liquid-contact" aria-labelledby="join-title">
        <GlassSurface variant="contact" />
        <div className="pilot-content"><h2 id="join-title">Let’s make your hotel<br />business travel ready.</h2><p>Run a hotel or build a PMS? Let’s explore a first connection. Expense, accounting and receipt apps are welcome on either side of the exchange.</p><PilotContact /></div>
        <div className="pilot-details"><ContactForm /></div>
      </section>
    </main>
    <footer className="site-footer container"><Brand footer /><p>Autally Exchange — Connecting commerce data.</p><div className="footer-links"><a href="https://www.linkedin.com/company/autally" target="_blank" rel="noopener noreferrer" aria-label="Autally on LinkedIn (opens in a new tab)"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2ZM8 19H5V9h3ZM6.5 7.7a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 19h-3v-5.3c0-1.3-.5-2-1.5-2-1.1 0-1.7.8-1.7 2V19h-3V9h2.9v1.4A3.2 3.2 0 0 1 15.5 9c2.3 0 3.5 1.4 3.5 4.2Z" /></svg><span>LinkedIn</span></a><a href="#top">Back to top<ArrowUpRight size={14} aria-hidden="true" /></a></div></footer>
  </>;
}
