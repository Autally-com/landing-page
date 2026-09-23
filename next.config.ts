import type { NextConfig } from "next";
import { resolveBasePath } from "./scripts/base-path.mjs";

const basePath = resolveBasePath(process.env);

const nextConfig: NextConfig = {
  poweredByHeader: false,
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
