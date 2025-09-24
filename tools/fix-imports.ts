#!/usr/bin/env bun

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const componentsDir = join(process.cwd(), "src/pages/docs/components");

async function fixImportsInFile(filepath: string) {
  let content = await readFile(filepath, "utf-8");
  let modified = false;

  // Fix ark-ui imports
  const arkUiPattern = /from\s+["']liquidify-react\/ark-ui\/(\w+)["']/g;
  if (arkUiPattern.test(content)) {
    content = content.replace(arkUiPattern, 'from "liquidify-react/$1"');
    modified = true;
  }

  // Change client:only="react" to client:load
  const clientPattern = /client:only=["']react["']/g;
  if (clientPattern.test(content)) {
    content = content.replace(clientPattern, "client:load");
    modified = true;
  }

  if (modified) {
    await writeFile(filepath, content);
    console.log(`✅ Fixed: ${filepath}`);
    return true;
  }
  return false;
}

async function main() {
  const files = await readdir(componentsDir);
  const mdxFiles = files.filter((f) => f.endsWith(".mdx"));

  let fixedCount = 0;
  for (const file of mdxFiles) {
    const filepath = join(componentsDir, file);
    const fixed = await fixImportsInFile(filepath);
    if (fixed) fixedCount++;
  }

  console.log(`\n✨ Fixed ${fixedCount} files`);
}

main().catch(console.error);