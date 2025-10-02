#!/usr/bin/env bun
import { readFile, writeFile } from "node:fs/promises";
import { dirname, relative, sep } from "node:path";
import { Glob } from "bun";

// Compute relative path from an mdx file to src/layouts/DocsLayout.astro
function layoutRel(fromFile: string) {
  const fromDir = dirname(fromFile);
  const rel = relative(fromDir, "src/layouts/DocsLayout.astro");
  return rel.split(sep).join("/");
}

async function ensureLayout(file: string) {
  const content = await readFile(file, "utf8");
  const hasFM = content.trimStart().startsWith("---\n");

  if (!hasFM) {
    const rel = layoutRel(file);
    const injected = `---\nlayout: ${rel}\n---\n\n${content}`;
    await writeFile(file, injected, "utf8");
    return true;
  }

  // If has frontmatter, inject layout if missing
  const end = content.indexOf("\n---", 4);
  if (end === -1) return false;
  const fm = content.slice(0, end + 4);
  if (/\nlayout\s*:\s*/.test(fm)) return false;

  const rel = layoutRel(file);
  const updated = fm.replace(/---\n$/, `layout: ${rel}\n---\n`) + content.slice(end + 4);
  await writeFile(file, updated, "utf8");
  return true;
}

async function main() {
  const glob = new Glob("src/pages/docs/**/*.mdx");
  let changed = 0;
  for await (const file of glob.scan(".")) {
    const did = await ensureLayout(String(file));
    if (did) changed++;
  }
  console.log(`Updated ${changed} files with layout frontmatter.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
