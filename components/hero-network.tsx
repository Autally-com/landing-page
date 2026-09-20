"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, ReceiptText, Calculator, WalletCards, ShieldCheck, ArrowRight, type LucideIcon } from "lucide-react";
import { BrandMark } from "./brand";
import { GlassSurface } from "./glass-surface";

const sources: [string, LucideIcon][] = [["Hotel / PMS", Building2], ["POS systems", ReceiptText], ["Receipt apps", ReceiptText]];
const applications: [string, LucideIcon][] = [["Expense apps", WalletCards], ["Accounting", Calculator], ["Receipt apps", ReceiptText]];
const routes = [
  { name: "Hotel", source: 0, destination: 0, description: "A hotel invoice could reach the business buyer’s authorized expense app." },
  { name: "Restaurant", source: 1, destination: 1, description: "A restaurant receipt could reach the business buyer’s authorized accounting app." },
  { name: "Receipt app", source: 2, destination: 2, description: "A receipt held by one platform could reach another app authorized by the business buyer." },
];
const positions = [50, 150, 250];

export function HeroNetwork() {
  const [selected, setSelected] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const canvas = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!canvas.current || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRevealed(true);
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    observer.observe(canvas.current);
    return () => observer.disconnect();
  }, []);
  const route = routes[selected];
  const leftPath = (y: number) => `M240 ${y} H300 Q330 ${y} 330 ${y < 150 ? y + 24 : y > 150 ? y - 24 : y} V150 H430`;
  const rightPath = (y: number) => `M570 150 H670 V${y < 150 ? y + 24 : y > 150 ? y - 24 : y} Q670 ${y} 700 ${y} H760`;
  return <figure className="hero-network exchange-map">
    <div className="map-toolbar"><span>Explore a connection</span><div className="route-picker" role="group" aria-label="Illustrative data routes">{routes.map((item, i) => <button type="button" key={item.name} aria-pressed={selected === i} onClick={() => setSelected(i)}>{item.name}<ArrowRight size={14} aria-hidden="true" /></button>)}</div><span className="map-example">Illustrative exchange</span></div>
    <div className="map-columns-labels" aria-hidden="true"><span>Data providers</span><span>The business buyer’s applications</span></div>
    <div className="map-canvas" ref={canvas} data-route-revealed={revealed} role="img" aria-label={`${sources[route.source][0]} connects through Autally Exchange to ${applications[route.destination][0]}. ${route.description} Sources remain in control.`}>
      <svg className="map-wires" viewBox="0 0 1000 300" preserveAspectRatio="none" aria-hidden="true"><g fill="none" stroke="var(--line)" strokeWidth="1.2">{positions.map(y => <path key={`left${y}`} d={leftPath(y)} />)}{positions.map(y => <path key={`right${y}`} d={rightPath(y)} />)}</g><g key={selected} className="selected-route" fill="none" stroke="var(--mint)" strokeWidth="3"><path pathLength="1" className="route-in" d={leftPath(positions[route.source])} /><path pathLength="1" className="route-out" d={rightPath(positions[route.destination])} /></g></svg>
      <div className="map-nodes map-sources" aria-hidden="true">{sources.map(([label, Icon], i) => <div className={`network-node map-node ${route.source === i ? "is-connected" : ""}`} key={label}><Icon size={19} strokeWidth={1.5} /><span>{label}</span><span className="map-port" /></div>)}</div>
      <div className="map-hub liquid-hub" aria-hidden="true"><GlassSurface variant="hub" /><BrandMark /><strong>Autally</strong><span>Exchange</span><ShieldCheck size={17} className="hub-permission" /><span key={`in-${selected}`} className="mobile-route route-in" /><span key={`out-${selected}`} className="mobile-route route-out" /></div>
      <div className="map-nodes map-applications" aria-hidden="true">{applications.map(([label, Icon], i) => <div className={`network-node map-node ${route.destination === i ? "is-connected" : ""}`} key={label}><Icon size={19} strokeWidth={1.5} /><span>{label}</span><span className="map-port" /></div>)}</div>
    </div>
    <div className="route-explanation" aria-live="polite"><span>For the business buyer</span><p>{route.description}</p></div>
    <figcaption><ShieldCheck size={15} aria-hidden="true" /><span>Sources decide what can be shared, with whom, and for which authorized purpose.</span></figcaption>
  </figure>;
}
