#!/usr/bin/env bun

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const componentsDocsDir = join(process.cwd(), "src/pages/docs/components");

async function processFile(filePath: string) {
  const content = await readFile(filePath, "utf-8");
  if (!content.includes("liquidify-react/ark-ui/")) return false;

  // Replace client:load with client:only="react" in this file
  const updated = content.replace(/client:load/g, 'client:only="react"');

  if (updated !== content) {
    await writeFile(filePath, updated);
    console.log(`🔁 Updated hydration to client:only in: ${filePath}`);
    return true;
  }
  return false;
}

async function main() {
  const entries = await readdir(componentsDocsDir);
  const mdxFiles = entries.filter((f) => f.endsWith(".mdx"));
  let count = 0;
  for (const name of mdxFiles) {
    const filePath = join(componentsDocsDir, name);
    const changed = await processFile(filePath);
    if (changed) count++;
  }
  console.log(`\nDone. Updated ${count} files.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
