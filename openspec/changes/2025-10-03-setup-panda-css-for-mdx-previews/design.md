# Design: PandaCSS Integration Without Style Overrides

## Overview

This design outlines integrating PandaCSS into the Astro docs site to style React component previews in MDX files, while preventing overrides to the site's existing global styles (e.g., HIG typography, custom CSS in styles.css).

## Key Principles

- **Atomic and Scoped Classes**: PandaCSS generates atomic CSS classes (e.g., `bg_blue_500`). These are utility-based and low-specificity, reducing override risks if site styles use higher specificity or different selectors.
- **Global but Isolated Import**: Import PandaCSS output globally but wrap previews in a scoped container (e.g., `<div class="preview">`) to apply styles only within demos.
- **No Conflicts with Existing Styles**:
  - Site uses custom CSS (styles/hig-typography.css, public/styles.css).
  - Ensure Panda config excludes or prefixes classes that might clash.
  - Use CSS layers or namespaces if needed for separation.

## Architecture

1. **Panda Config Alignment**:
   - Base on Liquidify's `panda.config.ts` (fetch from repo: https://github.com/liquidify/liquidify).
   - Set `globalCss` to generate into a dedicated file.
   - Use `conditions` and `patterns` to match only component-specific classes.

2. **Import Strategy**:
   - Generate `src/styles/panda.css`.
   - In `src/layouts/DocsLayout.astro`, import it after site styles: `<link rel="stylesheet" href="/styles/panda.css" />`.
   - For previews: Wrap MDX imports in `<div class="component-preview" data-theme="docs">...</div>`.
   - Define `.component-preview { /* Panda styles apply here */ }` with higher specificity if needed.

3. **Style Isolation Techniques**:
   - **CSS Layers**: In panda.css, use `@layer components { ... }` for Panda utilities, and ensure site styles are in `@layer base` or `reset`.
   - **Shadow DOM**: For advanced isolation, render previews in web components with shadow roots (but avoid for simplicity; global is fine for docs).
   - **Prefixing**: Configure Panda with `prefix: 'panda-'` to namespace classes (e.g., `panda-bg_blue_500`).

4. **Testing for Conflicts**:
   - Compare rendered CSS: Inspect elements in dev tools for unintended overrides.
   - Run A/B tests: Toggle Panda import and verify site navigation/docs text unchanged.
   - Use tools like `biome lint` and manual review of generated CSS.

## Trade-offs

- **Global vs. Isolated**: Global is simplest and matches guide; isolation adds complexity but prevents leaks.
- **Prefixing**: Adds verbosity to class names in components but guarantees no conflicts.
- **Performance**: Minimal impact; atomic CSS is efficient.

## Recommendations

- Start with global import + preview wrappers.
- If conflicts arise, enable prefixing in panda.config.ts.
- Document in guides/installing.mdx."
