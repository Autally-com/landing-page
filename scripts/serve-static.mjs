import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const outputDirectory = resolve(fileURLToPath(new URL("../out", import.meta.url)));
const args = process.argv.slice(2);
const portArgumentIndex = args.findIndex((arg) => arg === "--port" || arg === "-p");
const inlinePort = args.find((arg) => arg.startsWith("--port="))?.split("=", 2)[1];
const barePort = args.find((arg) => /^\d+$/.test(arg));
const port = Number.parseInt(portArgumentIndex >= 0 ? args[portArgumentIndex + 1] : inlinePort ?? barePort ?? process.env.PORT ?? "3000", 10);
const mountPath = (process.env.STATIC_BASE_PATH ?? "").replace(/\/+$/, "");

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("Port must be an integer between 1 and 65535.");
}

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function fileForRequest(requestUrl) {
  let pathname = decodeURIComponent(new URL(requestUrl, "http://127.0.0.1").pathname);
  if (mountPath) {
    if (pathname !== mountPath && !pathname.startsWith(`${mountPath}/`)) return null;
    pathname = pathname.slice(mountPath.length) || "/";
  }
  const relativePath = pathname.replace(/^\/+/, "") || "index.html";
  const candidate = resolve(join(outputDirectory, relativePath));
  if (candidate !== outputDirectory && !candidate.startsWith(`${outputDirectory}${process.platform === "win32" ? "\\" : "/"}`)) {
    return null;
  }
  return candidate.endsWith(`${process.platform === "win32" ? "\\" : "/"}`) ? join(candidate, "index.html") : candidate;
}

const server = createServer(async (request, response) => {
  try {
    let filePath = fileForRequest(request.url ?? "/");
    if (!filePath) {
      response.writeHead(403).end("Forbidden");
      return;
    }

    let fileStats;
    try {
      fileStats = await stat(filePath);
    } catch {
      fileStats = null;
    }
    if (fileStats?.isDirectory()) filePath = join(filePath, "index.html");

    const finalStats = await stat(filePath);
    if (!finalStats.isFile()) throw new Error("Not a file");
    response.writeHead(200, { "Cache-Control": "no-cache", "Content-Type": contentTypes[extname(filePath).toLowerCase()] ?? "application/octet-stream" });
    createReadStream(filePath).pipe(response);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("Not found");
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Serving ${outputDirectory} at http://127.0.0.1:${port}`);
});
