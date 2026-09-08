import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { documentTitle, site } from "./src/data/site.js";

function htmlMetaPlugin() {
  return {
    name: "html-meta-from-site",
    transformIndexHtml(html) {
      return html
        .replaceAll("%DOCUMENT_TITLE%", documentTitle)
        .replaceAll("%SITE_DESCRIPTION%", site.description)
        .replaceAll("%SITE_URL%", site.url);
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), htmlMetaPlugin()],
  // GitHub Pages project site: https://heerachoi.github.io/portfolio-site/
  base: "/portfolio-site/",
});
