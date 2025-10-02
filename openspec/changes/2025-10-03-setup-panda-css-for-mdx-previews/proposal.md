# Setup PandaCSS Integration for Styled MDX Previews

## Date

2025-10-03

## Author

opencode

## Summary

React components in MDX documentation previews are not rendering with Panda CSS styles because the generated PandaCSS is not included globally in the Astro site. This proposal outlines setting up PandaCSS in the docs site to enable proper styling for component demos.

## Problem

- Demos like AccordionDemo.tsx use Panda CSS classes from @ark-ui/react and liquidify-react.
- These styles are missing in the docs preview because PandaCSS requires global inclusion of its generated CSS file.
- Current setup lacks PandaCSS configuration and import.

## Why

This change is necessary to make component documentation previews visually accurate and consistent with the Liquidify library's design. Without proper styling, users cannot evaluate components effectively, reducing the docs' value. Integrating PandaCSS aligns the site with the project's styling system, enabling future maintenance.

## Goals

- Ensure all component previews in docs/components/\*.mdx render with correct Panda styles.
- Maintain consistency with Liquidify's styling system.
- Minimize changes to existing structure.
- Prevent style overrides on site elements.

## Proposed Solution

Follow the provided guide with safeguards against style overrides (see design.md):

1. Install PandaCSS: Add `@pandacss/dev` to devDependencies.
2. Create `panda.config.ts` aligned with Liquidify's Panda configuration (fetch from Liquidify repo if needed), including prefixing or layers for isolation.
3. Add script to generate CSS: e.g., `bun panda --clean`.
4. Generate `src/styles/panda.css` and import it in `src/layouts/DocsLayout.astro` after site styles.
5. Wrap previews in scoped divs (e.g., class="component-preview").
6. Update `astro.config.mjs` if necessary for MDX and React integration (already present).
7. Update package.json scripts to include panda generation in build/dev.

## Alternatives Considered

- Inline styles: Not feasible for Panda's atomic CSS approach.
- CDN import: Not recommended for build-time generation.
- Iframe isolation: Overkill for docs previews; global styles are standard.

## Risks and Mitigations

- Config mismatch with Liquidify: Review Liquidify's panda.config.ts.
- Build time increase: Minimal, as Panda generates static CSS.
- Style conflicts: Test all demos post-integration.

## Dependencies

- Access to Liquidify's Panda config for alignment.

## Next Steps

- Draft spec deltas for component-docs capability.
- Implement tasks once approved."
