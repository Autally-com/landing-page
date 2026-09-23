/** Resolve the static site's mount path at build time. */
export function resolveBasePath({ NODE_ENV, GITHUB_REPOSITORY, NEXT_PUBLIC_BASE_PATH } = {}) {
  if (NEXT_PUBLIC_BASE_PATH) {
    const path = NEXT_PUBLIC_BASE_PATH.replace(/\/+$/, "");
    if (NEXT_PUBLIC_BASE_PATH === "/") return "";
    if (!/^\/[a-zA-Z0-9._-]+(?:\/[a-zA-Z0-9._-]+)*$/.test(path)
      || path.split("/").some((segment) => segment === "." || segment === "..")) {
      throw new Error("NEXT_PUBLIC_BASE_PATH must be '/' or a path such as '/landing-page'.");
    }
    return path;
  }

  if (NODE_ENV !== "production" || !GITHUB_REPOSITORY) return "";
  const [owner, repository] = GITHUB_REPOSITORY.split("/");
  if (!owner || !repository) throw new Error("GITHUB_REPOSITORY must be 'owner/repository'.");
  return repository.toLowerCase() === `${owner.toLowerCase()}.github.io` ? "" : `/${repository}`;
}
