#!/usr/bin/env bun

import { readdir, readFile, writeFile, rm } from "node:fs/promises";
import { join } from "node:path";

const componentsDocsDir = join(process.cwd(), "src/pages/docs/components");
const demosDir = join(process.cwd(), "src/components/demos");

const keepDirect = new Set(["button", "badge", "card", "iconButton", "icons", "symbolTile"]);

function replaceToArkUiImports(source: string) {
  // Replace imports like: from "liquidify-react/<name>"
  return source.replace(/from\s+["']liquidify-react\/(\w+)["']/g, (m, name) => {
    if (keepDirect.has(name)) return m; // keep as-is
    return `from "liquidify-react/ark-ui/${name}"`;
  });
}

async function processDir(dir: string, exts: string[]) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isFile()) continue;
    if (!exts.some((ext) => entry.name.endsWith(ext))) continue;
    const file = join(dir, entry.name);
    const before = await readFile(file, "utf-8");
    const after = replaceToArkUiImports(before);
    if (before !== after) {
      await writeFile(file, after);
      console.log(`✅ Rewrote imports in: ${file}`);
    }
  }
}

async function main() {
  await processDir(componentsDocsDir, [".mdx"]);
  await processDir(demosDir, [".tsx"]);
  // Remove temporary test files
  await rm(join(demosDir, "TestAccordion.tsx"), { force: true });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
