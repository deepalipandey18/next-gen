import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Copy user uploaded logo asset directly into public and src/assets directories
const userUploadedLogo = "C:/Users/deepa/.gemini/antigravity/brain/f7be234c-ff54-4cda-9072-c1ce11c47ab0/.user_uploaded/media_1791131013199_f1022690.png";
const publicDir = path.resolve(__dirname, "public");
const assetsDir = path.resolve(__dirname, "src/assets");

try {
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

  if (fs.existsSync(userUploadedLogo)) {
    fs.copyFileSync(userUploadedLogo, path.join(publicDir, "logo.png"));
    fs.copyFileSync(userUploadedLogo, path.join(publicDir, "nextgen-logo.png"));
    fs.copyFileSync(userUploadedLogo, path.join(assetsDir, "logo.png"));
  }
} catch (e) {
  console.warn("Could not copy logo asset:", e);
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: "serve-logo-asset",
      configureServer(server) {
        server.middlewares.use("/api/logo.png", (req, res) => {
          if (fs.existsSync(userUploadedLogo)) {
            res.setHeader("Content-Type", "image/png");
            res.setHeader("Cache-Control", "public, max-age=3600");
            fs.createReadStream(userUploadedLogo).pipe(res);
          } else {
            res.statusCode = 404;
            res.end();
          }
        });
      },
    },
  ],
  server: {
    fs: {
      allow: [
        __dirname,
        "C:/Users/deepa/.gemini/antigravity/brain",
      ],
    },
  },
  esbuild: {
    logOverride: {
      "ignored-directive": "silent",
    },
  },
  logLevel: "info",
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (
          warning.message.includes("Module level directives") ||
          warning.message.includes('"use client"') ||
          warning.message.includes('"was ignored"')
        ) {
          return;
        }

        if (warning.code === "UNRESOLVED_IMPORT") {
          throw new Error(`Build failed due to unresolved import:\n${warning.message}`);
        }

        if (warning.code === "PLUGIN_WARNING" && /is not exported/.test(warning.message)) {
          throw new Error(`Build failed due to missing export:\n${warning.message}`);
        }

        warn(warning);
      },
    },
  },
});