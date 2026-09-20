import { Database, Workflow } from "lucide-react";
import { BrandMark } from "./brand";

export function NetworkComparison() {
  return <div className="network-comparison">
    <figure className="comparison-panel"><figcaption><span className="small-label">WITHOUT AUTALLY</span><h3>Every connection starts again.</h3></figcaption>
      <svg className="mesh-diagram" viewBox="0 0 420 190" role="img" aria-label="Many crossing lines between four providers and four applications illustrate separate bilateral integrations."><g stroke="#D8DDDF" strokeWidth="1">{[30, 73, 116, 159].flatMap((y) => [30, 73, 116, 159].map((end) => <line key={`${y}-${end}`} x1="67" y1={y} x2="353" y2={end} />))}</g>{[30, 73, 116, 159].map((y) => <g key={y}><rect x="22" y={y - 14} width="45" height="28" rx="5" fill="#fff" stroke="#CBD3D6"/><rect x="353" y={y - 14} width="45" height="28" rx="5" fill="#fff" stroke="#CBD3D6"/><path d={`M35 ${y}H53M366 ${y}H384`} stroke="#82919B" /></g>)}</svg>
      <p>Separate integrations. Repeated maintenance.</p>
    </figure>
    <figure className="comparison-panel comparison-after"><figcaption><span className="small-label">WITH AUTALLY</span><h3>One connection opens a network.</h3></figcaption>
      <div className="shared-diagram" role="img" aria-label="Data providers connect through Autally Exchange to data users"><div className="diagram-end"><Database /><span>Data<br />providers</span></div><span className="diagram-line" /><div className="diagram-center"><BrandMark /><span>Autally Exchange</span></div><span className="diagram-line" /><div className="diagram-end"><Workflow /><span>Data<br />users</span></div></div>
      <p>Shared infrastructure. Growing possibilities.</p>
    </figure>
  </div>;
}

