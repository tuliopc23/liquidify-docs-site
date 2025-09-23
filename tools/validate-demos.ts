#!/usr/bin/env bun
import { readFile } from "node:fs/promises";
import { readdir } from "node:fs/promises";
import { join } from "node:path";

const pages: Array<{ file: string; arkPath: string; expectClientOnly: boolean }> = [
  { file: "src/pages/docs/components/Accordion.mdx", arkPath: "liquidify-react/ark-ui/accordion", expectClientOnly: true },
  { file: "src/pages/docs/components/Tabs.mdx", arkPath: "liquidify-react/ark-ui/tabs", expectClientOnly: true },
  { file: "src/pages/docs/components/Dialog.mdx", arkPath: "liquidify-react/ark-ui/dialog", expectClientOnly: true },
  { file: "src/pages/docs/components/Popover.mdx", arkPath: "liquidify-react/ark-ui/popover", expectClientOnly: true },
  { file: "src/pages/docs/components/Menu.mdx", arkPath: "liquidify-react/ark-ui/menu", expectClientOnly: true },
];

const demoChunks = [
  "AccordionDemo",
  "TabsDemo",
  "DialogDemo",
  "PopoverDemo",
  "MenuDemo",
];

async function checkPages() {
  const errors: string[] = [];

  for (const { file, arkPath, expectClientOnly } of pages) {
    const content = await readFile(file, "utf8");
    if (!content.includes(arkPath)) {
      errors.push(`${file}: missing ark-ui import path (${arkPath})`);
    }
    if (expectClientOnly && !content.includes('client:only="react"')) {
      errors.push(`${file}: missing client:only="react" for demo rendering`);
    }
  }

  // Check dist bundles for demo chunks (after astro build)
  const distAstro = join("dist", "_astro");
  let entries: string[] = [];
  try {
    entries = await readdir(distAstro);
  } catch (e) {
    errors.push(`dist/_astro missing. Run: bun run build`);
  }
  for (const name of demoChunks) {
    const found = entries.some((f) => f.startsWith(`${name}.`) && f.endsWith('.js'));
    if (!found) errors.push(`dist/_astro: missing compiled chunk for ${name}`);
  }

  if (errors.length) {
    console.error("Demo validation failed:\n" + errors.map((e) => `- ${e}`).join("\n"));
    process.exit(1);
  }
  console.log("OK: Demo pages use ark-ui imports, client-only hydration, and demo chunks built.");
}

checkPages().catch((err) => { console.error(err); process.exit(1); });
