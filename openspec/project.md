# Project Context

## Purpose

LiqUIdify is an Apple Design Language–inspired React component library built primarily as thin wrappers over Ark UI primitives plus a few custom components. This repository hosts the documentation site built with Astro + MDX. The goal is to provide high‑quality, accessible documentation with live, copy‑pasteable examples for all components, clear installation/import guidance, and advanced usage notes (design, accessibility, performance, migration).

## Tech Stack

- TypeScript 5.x
- React 19
- Astro 5.x with `@astrojs/react` and `@astrojs/mdx`
- Documentation UI helpers: custom `ComponentShowcase` React component
- Library: `liquidify-react@0.6.9` (uses Panda CSS internally, exports Ark‑UI wrappers and custom components)
- UI deps: `@ark-ui/react`, `framer-motion`, `lucide-react`
- Tooling: Bun (scripts), Biome (lint), Prettier (format), markdownlint (MD/MDX), TypeScript (typecheck)

## Project Conventions

### Code Style

- Prettier as formatter (100‑char line width) with Astro and Tailwind plugins
- Biome for linting; markdownlint for `.md/.mdx`
- Verbose, readable TypeScript; prefer full words over abbreviations
- MDX pages must start with frontmatter including `layout: ../../../layouts/DocsLayout.astro` (auto‑injected via `bun fix:mdx-layout`)

### Architecture Patterns

- Pages live under `src/pages/docs/**` and are auto‑discovered for the sidebar by `src/lib/sidebar.ts` via `import.meta.glob`
- `src/layouts/DocsLayout.astro` provides the app shell (top bar, sidebar, content area) and includes `public/script.js` for filtering, theming, and mobile sidebar behavior
- Live examples are authored with `src/components/ComponentShowcase.tsx` and styled by `src/components/ComponentShowcase.css`
- All React examples in MDX require `client:load` for hydration

### Testing Strategy

- Static checks: `bun typecheck`, `bun lint`, `bun mdlint`
- Build verification: `bun build` followed by `bun preview`
- Manual smoke tests: open `/docs/components/*` and confirm examples render, code copy works, and sidebar links are present
- Accessibility spot checks: keyboard navigation in examples; verify ARIA attributes as documented

### Git Workflow

- Trunk‑based on `main`; create short‑lived feature branches per change
- Small, incremental PRs; keep changes scoped to one concern
- Commit messages: imperative mood, concise summary; reference OpenSpec change IDs when applicable
- Do not commit secrets or large binaries

## Domain Context

- Design language follows Apple HIG (typography, spacing, clarity)
- Components wrap Ark UI primitives for accessibility‑first behavior; LiqUIdify layers visual styles and ergonomics
- Documentation emphasizes correct import paths, minimal reproducible examples, and accessibility guidance

## Important Constraints

- Use correct import paths:
  - Custom components (e.g., `button`, `badge`): `liquidify-react/<component>`
  - Ark‑UI wrappers (e.g., `accordion`, `tabs`): `liquidify-react/ark-ui/<component>`
- Every MDX page must include layout frontmatter; run `bun fix:mdx-layout` after adding files
- All live React examples in MDX must use `client:load`
- Keep examples copy‑pasteable; ensure the code block matches the live example
- Sidebar navigation is derived from file structure; use meaningful filenames and titles

## External Dependencies

- `liquidify-react` (primary library documented)
- `@ark-ui/react` (primitive foundation)
- `astro`, `@astrojs/react`, `@astrojs/mdx`
- `framer-motion`, `lucide-react`
- `astro-expressive-code` (code block styling)

## Development Commands

- `bun dev` – Start local dev server (Astro)
- `bun build` – Build static site to `./dist`
- `bun preview` – Preview build locally
- `bun typecheck` – TypeScript checks
- `bun lint` – Biome lint
- `bun mdlint` – Markdown/MDX lint
- `bun fix:mdx-layout` – Inject/ensure layout frontmatter in MDX files
