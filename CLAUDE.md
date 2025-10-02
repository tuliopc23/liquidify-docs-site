<!-- OPENSPEC:START -->

# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:

- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:

- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is an Astro-based documentation site for the LiqUIdify React component library. Use these commands:

- `bun dev` - Start development server at localhost:4321
- `bun build` - Build production site to ./dist/
- `bun preview` - Preview production build locally
- `bun typecheck` - Run TypeScript type checking
- `bun lint` - Run Biome linter
- `bun format` - Format code with Prettier
- `bun mdlint` - Lint markdown/MDX files
- `bun fix:mdx-layout` - Automatically add layout frontmatter to MDX files

## Architecture Overview

### Documentation Structure

- **src/pages/docs/** - All documentation pages in MDX format
- **src/layouts/DocsLayout.astro** - Main layout with sidebar navigation and top bar
- **src/lib/sidebar.ts** - Dynamic sidebar generation from file system structure
- **tools/add-layout-to-mdx.ts** - Utility to ensure MDX files have proper layout frontmatter

### Content Organization

Documentation follows a structured hierarchy:

- **guides/** - Getting started, installation, importing
- **components/** - Individual component documentation (50+ components)
- **advanced/** - Design, accessibility, performance, migration
- **\_templates/** - Documentation templates

### Key Features

- **Dynamic Sidebar**: Automatically generated from file structure in src/lib/sidebar.ts:30
- **Layout Auto-injection**: MDX files automatically get layout frontmatter via tools script
- **Theme Toggle**: Dark/light mode support built into DocsLayout
- **Search Filter**: Sidebar filtering functionality
- **Mobile Responsive**: Collapsible sidebar for mobile

### Tech Stack

- **Astro 5.x** - Static site generator with MDX support
- **TypeScript** - Type checking enabled with strict config
- **Biome** - Linting (formatter disabled, uses Prettier instead)
- **Prettier** - Code formatting with Astro, Tailwind, and Liquid plugins
- **Bun** - Package manager and runtime

### Code Style & Conventions

- Uses Prettier with 100 character line width
- MDX files should have layout frontmatter pointing to DocsLayout.astro
- Component documentation follows established template in \_templates/component.mdx
- Sidebar navigation auto-sorts alphabetically within groups with preferred order: Guides, Components, Advanced, Contributing, Templates, Meta

## Working with Documentation

When adding new pages:

1. Create MDX files in appropriate src/pages/docs/ subdirectory
2. Run `bun fix:mdx-layout` to ensure proper layout frontmatter
3. Sidebar navigation will automatically include new pages based on file structure

When modifying the sidebar structure, refer to src/lib/sidebar.ts which handles:

- Automatic page discovery via Vite glob imports
- Title extraction from frontmatter or filename
- Hierarchical grouping and sorting
- Special handling for index pages and meta documentation
