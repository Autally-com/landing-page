"use client";

import { useEffect, useId, useRef, useState } from "react";
import { LiquidGlass } from "simple-liquid-glass";

/** Decorative optics only: content and controls remain in the normal DOM above it. */
export function GlassSurface({ variant }: { variant: "hub" | "contact" | "hero" }) {
  const backdrop = useRef<HTMLDivElement>(null);
  const surface = useRef<HTMLDivElement>(null);
  const [arrived, setArrived] = useState(false);
  const [settled, setSettled] = useState(false);
  const gradient = useId().replaceAll(":", "");
  const hub = variant !== "contact";
  const compact = variant === "hero";
  useEffect(() => {
    if (hub || !surface.current || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setArrived(true);
        observer.disconnect();
      }
    }, { threshold: 0.35 });
    observer.observe(surface.current);
    return () => observer.disconnect();
  }, [hub]);
  return <div ref={surface} className={`glass-surface glass-surface-${variant}`} data-arrived={arrived} data-settled={settled} aria-hidden="true">
    <div className="glass-backdrop" ref={backdrop}>
      <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice" onAnimationEnd={event => {
        if (event.animationName === "contact-ribbon-arrival") setSettled(true);
      }}>
        <defs>
          <linearGradient id={gradient} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#eefbf6" /><stop offset=".38" stopColor="#ccf0e7" /><stop offset=".72" stopColor="#ccf0e7" /><stop offset="1" stopColor="#eefbf6" /></linearGradient>
        </defs>
        <path d={hub ? "M200 580 C100 200 850 430 660 -120" : "M-100 550 C180 120 390 670 690 260 S960 70 1150 180"} fill="none" stroke={`url(#${gradient})`} strokeWidth={hub ? 210 : 145} />
        {!hub && <path d="M-100 510 C180 80 390 625 650 245 S960 30 1150 140" fill="none" stroke="#eefbf6" strokeOpacity=".5" strokeWidth="4" />}
      </svg>
    </div>
    <LiquidGlass className="glass-optic" backdropRef={backdrop} renderer="auto"
      radius={compact ? 12 : hub ? 24 : 32} refraction="lens" lensProfile="material" displacementScale={compact ? 16 : hub ? 32 : 24}
      frost={hub ? 0.25 : 0.12} blur={hub ? 4 : 1.5} saturation={100} quality="low" aberrationIntensity={0}
      glassColor={hub ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.42)"}
      borderColor="rgba(255,255,255,0.85)" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }} />
    <div className="glass-shine" />
  </div>;
}
