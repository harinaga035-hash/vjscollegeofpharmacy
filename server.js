import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "dist");
const port = Number(process.env.PORT || 3000);

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
};

function sendFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  res.writeHead(200, {
    "content-type": types[ext] || "application/octet-stream",
  });
  createReadStream(filePath).pipe(res);
}

createServer((req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url || "/", `http://localhost:${port}`).pathname);
  const requested = path.normalize(path.join(publicDir, urlPath));

  if (!requested.startsWith(publicDir)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  const filePath = existsSync(requested) && statSync(requested).isFile()
    ? requested
    : path.join(publicDir, "index.html");

  if (!existsSync(filePath)) {
    res.writeHead(404);
    res.end("Build not found. Run npm run build first.");
    return;
  }

  sendFile(res, filePath);
}).listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
