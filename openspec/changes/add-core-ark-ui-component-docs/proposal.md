## Why
Most component docs are placeholders. We need authoritative, live, and copy‑pasteable documentation for a first set of Ark‑UI wrapper components to unblock users and establish a repeatable pattern.

## What Changes
- Add a new capability spec `component-docs` describing requirements for LiqUIdify component documentation
- Document 3 core Ark‑UI components with live showcases and correct imports:
  - Accordion
  - Tabs
  - Dialog
- Ensure each page includes: import guidance, basic usage, variants, accessibility notes, and API references
- Wire examples using `ComponentShowcase` with code toggle and copy

## Impact
- Affects docs under `src/pages/docs/components/*`
- Introduces `component-docs` capability spec baseline
- Sets conventions for future component docs (repeatable template)
