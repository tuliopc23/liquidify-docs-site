# Component Documentation Template

This template provides a structure for documenting LiqUIdify React components with live examples.

## Available Components

Currently available components in liquidify-react v0.6.9:
- `badge` - Status indicators and labels
- `button` - Interactive buttons
- `card` - Content containers
- `iconButton` - Icon-based buttons
- `icons` - Icon collection
- `symbolTile` - Apple-style symbol tiles

## Template Structure

```mdx
---
layout: ../../../layouts/DocsLayout.astro
---

import { ComponentName } from "liquidify-react/component-name"
import { ComponentShowcase } from "../../../components/ComponentShowcase"

# ComponentName

Brief description of the component and its use cases.

## Import

```tsx
import { ComponentName } from "liquidify-react/component-name"
```

## Basic Usage

<ComponentShowcase
  title="Basic Example"
  description="Simple usage demonstration"
  code={`<ComponentName>
  Example content
</ComponentName>`}
  client:load
>
  <ComponentName client:load>
    Example content
  </ComponentName>
</ComponentShowcase>

## Variants

<ComponentShowcase
  title="Component Variants"
  description="Different visual styles"
  code={`<div style={{ display: "flex", gap: "1rem" }}>
  <ComponentName variant="primary">Primary</ComponentName>
  <ComponentName variant="secondary">Secondary</ComponentName>
</div>`}
  client:load
>
  <ComponentName variant="primary" client:load>Primary</ComponentName>
  <ComponentName variant="secondary" client:load>Secondary</ComponentName>
</ComponentShowcase>

## API Reference

### Props
- List all props with types and descriptions
- Include default values where applicable

### Accessibility
- Keyboard navigation details
- Screen reader support
- ARIA attributes used
```

## ComponentShowcase Props

The enhanced ComponentShowcase component supports:

- `title` - Header title for the example
- `description` - Brief description of what the example shows
- `code` - Code string to display (with copy functionality)
- `showCode` - Toggle code visibility (default: true)
- `background` - 'default' | 'dark' | 'light' | 'transparent'
- `align` - 'left' | 'center' | 'right' (default: center)
- `spacing` - 'tight' | 'normal' | 'loose' (default: normal)
- `client:load` - Required for Astro client-side hydration

## Usage Notes

1. Always add `client:load` to React components in MDX
2. Use the correct import path from liquidify-react exports
3. Provide both live examples and code blocks
4. Include comprehensive API documentation
5. Document accessibility features