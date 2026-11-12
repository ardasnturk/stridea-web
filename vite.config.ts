import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";
import { defineConfig, type Plugin } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { APP_NAME, SITE_URL } from "./src/config";

/**
 * Fills the HTML entries from `src/config.ts`: `%APP_NAME%`, `%SITE_URL%`, and the
 * canonical / og:url tags (only when a site URL is set).
 */
function siteMeta(): Plugin {
  return {
    name: "site-meta",
    transformIndexHtml(html) {
      return html
        .replaceAll("%APP_NAME%", APP_NAME)
        .replaceAll("%SITE_URL%", SITE_URL ?? "")
        .replace(/<!--site-url-meta:(\w+)-->/, (_match, page: string) => {
          if (!SITE_URL) return "";
          const url = `${SITE_URL}/${page === "home" ? "" : `${page}/`}`;
          return `<link rel="canonical" href="${url}" />\n    <meta property="og:url" content="${url}" />`;
        });
    },
  };
}

// One HTML file per page so /privacy/, /terms/ and /support/ work on GitHub Pages without a router.
export default defineConfig({
  base: "/",
  plugins: [siteMeta(), react(), tailwindcss(), tsconfigPaths()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        privacy: resolve(__dirname, "privacy/index.html"),
        terms: resolve(__dirname, "terms/index.html"),
        support: resolve(__dirname, "support/index.html"),
      },
    },
  },
});
