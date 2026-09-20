"use client";

import { useId, useRef } from "react";
import { LiquidGlass } from "simple-liquid-glass";

/** Decorative optics only: content and controls remain in the normal DOM above it. */
export function GlassSurface({ variant }: { variant: "hub" | "contact" }) {
  const backdrop = useRef<HTMLDivElement>(null);
  const gradient = useId().replaceAll(":", "");
  const hub = variant === "hub";
  return <div className={`glass-surface glass-surface-${variant}`} aria-hidden="true">
    <div className="glass-backdrop" ref={backdrop}>
      <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={gradient} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#eefbf6" /><stop offset=".38" stopColor="#ccf0e7" /><stop offset=".72" stopColor="#ccf0e7" /><stop offset="1" stopColor="#eefbf6" /></linearGradient>
        </defs>
        <path d={hub ? "M200 580 C100 200 850 430 660 -120" : "M-100 550 C180 120 390 670 690 260 S960 70 1150 180"} fill="none" stroke={`url(#${gradient})`} strokeWidth={hub ? 210 : 145} />
        {!hub && <path d="M-100 510 C180 80 390 625 650 245 S960 30 1150 140" fill="none" stroke="#eefbf6" strokeOpacity=".5" strokeWidth="4" />}
      </svg>
    </div>
    <LiquidGlass className="glass-optic" backdropRef={backdrop} renderer="auto"
      radius={hub ? 24 : 32} refraction="lens" lensProfile="material" displacementScale={hub ? 32 : 24}
      frost={hub ? 0.25 : 0.12} blur={hub ? 4 : 1.5} saturation={100} quality="low" aberrationIntensity={0}
      glassColor={hub ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.42)"}
      borderColor="rgba(255,255,255,0.85)" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }} />
    <div className="glass-shine" />
  </div>;
}
