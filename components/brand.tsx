import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const logoSrc = `${basePath}/autally-logo.png`;

export function BrandMark({ className = "" }: { className?: string }) {
  return <svg className={className} width="32" height="34" viewBox="0 0 617 653" overflow="hidden" aria-hidden="true"><image href={logoSrc} width="2973" height="839" /></svg>;
}

export function Brand({ footer = false }: { footer?: boolean }) {
  return <a className="brand" href="#top" aria-label="Autally home"><Image className="brand-logo" src={logoSrc} width={2973} height={839} alt="Autally" unoptimized loading={footer ? "lazy" : "eager"} /></a>;
}
