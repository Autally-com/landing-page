import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const useGitHubPagesPath = process.env.NODE_ENV === "production" && Boolean(repositoryName);
const basePath = useGitHubPagesPath ? `/${repositoryName}` : "";

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
