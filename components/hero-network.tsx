"use client";

import { useEffect, useRef } from "react";
import { Building2, Utensils, ShoppingBasket, Package, ReceiptText, Calculator, WalletCards, ShieldCheck, type LucideIcon } from "lucide-react";
import { BrandMark } from "./brand";
import { GlassSurface } from "./glass-surface";

const sources: [string, string, LucideIcon][] = [["Hotel #1", "PMS", Building2], ["Restaurant #1", "POS", Utensils], ["Supermarket #1", "POS", ShoppingBasket], ["Restaurant #2", "POS", Utensils], ["Supplier #1", "Invoices", Package], ["Receipt App #1", "Receipts", ReceiptText]];
const applications: [string, LucideIcon][] = [["Expense apps", WalletCards], ["Accounting", Calculator], ["Receipt App #2", ReceiptText]];
type Packet = { route: number; elapsed: number; duration: number; delay: number };

export function HeroNetwork() {
  const stage = useRef<HTMLDivElement>(null);
  const packets = useRef<Packet[]>([]);

  useEffect(() => {
    const root = stage.current;
    if (!root) return;
    const svg = root.querySelector<SVGSVGElement>(".flow-wires")!;
    const tracks = [...svg.querySelectorAll<SVGPathElement>(".packet-track")];
    const dots = [...svg.querySelectorAll<SVGGElement>(".flow-packet")];
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    let frame = 0;
    let lastTime = 0;
    let lengths: number[] = [];
    const newPacket = (delay: number): Packet => ({ route: Math.floor(Math.random() * tracks.length), elapsed: 0, duration: 3800 + Math.random() * 1800, delay });
    if (!packets.current.length) packets.current = [newPacket(0), newPacket(1400), newPacket(2900)];

    const measure = () => {
      const bounds = root.getBoundingClientRect();
      const hub = root.querySelector<HTMLElement>(".map-hub")!.getBoundingClientRect();
      const vertical = window.matchMedia("(max-width: 799px)").matches;
      svg.setAttribute("viewBox", `0 0 ${bounds.width} ${bounds.height}`);
      const center = { x: hub.left - bounds.left + hub.width / 2, y: hub.top - bounds.top + hub.height / 2 };
      const incoming = [...root.querySelectorAll<HTMLElement>(".flow-sources .flow-node")].map(node => {
        const box = node.getBoundingClientRect();
        const x = box.left - bounds.left + (vertical ? box.width / 2 : box.width);
        const y = box.top - bounds.top + (vertical ? box.height : box.height / 2);
        return vertical ? `M${x} ${y} C${x} ${y + 30} ${center.x} ${center.y - 100} ${center.x} ${center.y}` : `M${x} ${y} C${x + 70} ${y} ${center.x - 120} ${center.y} ${center.x} ${center.y}`;
      });
      const outgoing = [...root.querySelectorAll<HTMLElement>(".flow-applications .flow-node")].map(node => {
        const box = node.getBoundingClientRect();
        const x = box.left - bounds.left + (vertical ? box.width / 2 : 0);
        const y = box.top - bounds.top + (vertical ? 0 : box.height / 2);
        return vertical ? `C${center.x} ${center.y + 100} ${x} ${y - 30} ${x} ${y}` : `C${center.x + 120} ${center.y} ${x - 70} ${y} ${x} ${y}`;
      });
      svg.querySelectorAll(".source-wire").forEach((path, i) => path.setAttribute("d", incoming[i]));
      svg.querySelectorAll(".application-wire").forEach((path, i) => path.setAttribute("d", `M${center.x} ${center.y} ${outgoing[i]}`));
      tracks.forEach((path, i) => path.setAttribute("d", `${incoming[Math.floor(i / applications.length)]} ${outgoing[i % applications.length]}`));
      lengths = tracks.map(path => path.getTotalLength());
    };
    const tick = (time: number) => {
      const delta = lastTime ? Math.min(time - lastTime, 64) : 0;
      lastTime = time;
      packets.current.forEach((packet, i) => {
        packet.elapsed += delta;
        const progress = (packet.elapsed - packet.delay) / packet.duration;
        if (progress > 1) { packets.current[i] = newPacket(400 + Math.random() * 1200); dots[i].setAttribute("opacity", "0"); return; }
        if (progress < 0 || !lengths[packet.route]) { dots[i].setAttribute("opacity", "0"); return; }
        const point = tracks[packet.route].getPointAtLength(progress * lengths[packet.route]);
        dots[i].setAttribute("transform", `translate(${point.x} ${point.y})`);
        dots[i].setAttribute("opacity", String(Math.min(progress * 15, (1 - progress) * 15, 1)));
      });
      frame = window.requestAnimationFrame(tick);
    };
    const syncPlayback = () => {
      window.cancelAnimationFrame(frame);
      lastTime = 0;
      const running = visible && !document.hidden && !preference.matches;
      root.dataset.flowRunning = String(running);
      if (running) frame = window.requestAnimationFrame(tick);
    };
    const resize = new ResizeObserver(measure);
    resize.observe(root);
    root.querySelectorAll(".flow-node, .map-hub").forEach(node => resize.observe(node));
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; syncPlayback(); }, { threshold: 0.1 });
    observer.observe(root);
    preference.addEventListener("change", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);
    measure();
    syncPlayback();
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect(); resize.disconnect();
      preference.removeEventListener("change", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
    };
  }, []);

  return <figure className="hero-network exchange-map continuous-exchange">
    <div className="flow-toolbar"><span>Many businesses. One exchange.</span></div>
    <div className="flow-labels" aria-hidden="true"><span>Businesses with the data</span><span>The company’s applications</span></div>
    <div className="flow-stage" ref={stage} role="img" aria-label="Illustrative network: Hotel 1, Restaurants 1 and 2, Supermarket 1, Supplier 1 and Receipt App 1 provide invoices and receipts through Autally Exchange to expense apps, accounting and Receipt App 2. Receipt apps can both provide and retrieve data. Hotels are the pilot focus; the other connections illustrate the longer-term vision.">
      <svg className="flow-wires" aria-hidden="true"><g className="flow-lines">{sources.map(([name]) => <path key={name} className="source-wire" />)}{applications.map(([name]) => <path key={name} className="application-wire" />)}</g><g fill="none" stroke="none">{sources.flatMap(([source]) => applications.map(([app]) => <path className="packet-track" key={`${source}-${app}`} />))}</g>{[0, 1, 2].map(i => <g className="flow-packet" key={i} opacity="0"><circle r="8" fill="var(--mint)" fillOpacity=".25" /><circle r="4" fill="#08745c" /></g>)}</svg>
      <div className="flow-nodes flow-sources" aria-hidden="true">{sources.map(([name, system, Icon]) => <div className="flow-node" key={name}><Icon size={19} strokeWidth={1.5} /><span>{name}<small>({system})</small></span></div>)}</div>
      <div className="map-hub liquid-hub" aria-hidden="true"><GlassSurface variant="hub" /><BrandMark /><strong>Autally</strong><span>Exchange</span><ShieldCheck size={17} className="hub-permission" /></div>
      <div className="flow-nodes flow-applications" aria-hidden="true">{applications.map(([name, Icon]) => <div className="flow-node" key={name}><Icon size={19} strokeWidth={1.5} /><span>{name}</span></div>)}</div>
    </div>
    <div className="flow-benefits">
      <section aria-labelledby="hotel-benefit"><h3 id="hotel-benefit">Hotel stays</h3><p><strong>Less chasing after checkout.</strong> The pilot aims to get hotel invoices into the company’s expense app, with fewer follow-ups for hotel teams.</p></section>
      <section aria-labelledby="purchase-benefit"><h3 id="purchase-benefit">Everyday business purchases</h3><p><strong>Less paperwork to reconcile.</strong> Restaurant, shop and supplier receipts could follow the same path into authorized accounting tools.</p></section>
      <section aria-labelledby="app-benefit"><h3 id="app-benefit">Connected receipt apps</h3><p><strong>Provide receipts. Retrieve what’s missing.</strong> Apps could share the receipts they hold and retrieve others, with authorization, while keeping their own customer experience.</p></section>
    </div>
    <figcaption><ShieldCheck size={15} aria-hidden="true" /><span>Illustrative network, not live traffic. Hotels first; other businesses show the longer-term vision. Sources control what they share.</span></figcaption>
  </figure>;
}
