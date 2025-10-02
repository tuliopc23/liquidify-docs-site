import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,

  include: ["./src/**/*.{js,jsx,ts,tsx,astro}", "./node_modules/liquidify-react/**/*.{js,jsx}"],

  exclude: [],

  outdir: "styled-system",

  jsxFramework: "react",

  emitPackage: true,

  outExtension: "js",

  theme: {
    extend: {},
  },

  conditions: {
    extend: {},
  },
});
