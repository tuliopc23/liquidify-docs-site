// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import expressiveCode from "astro-expressive-code";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    expressiveCode({
      themes: ["github-dark", "github-light"],
      styleOverrides: {
        borderRadius: "12px",
        codeFontFamily:
          "'SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace",
      },
      frames: {
        showCopyToClipboardButton: true,
        extractFileNameFromCode: true,
      },
    }),
    mdx(),
  ],
  vite: {
    resolve: {
      alias: {
        "liquidify-react/styles": path.resolve(
          __dirname,
          "node_modules/liquidify-react/libs/components/dist/liquidify.css",
        ),
      },
    },
  },
});
