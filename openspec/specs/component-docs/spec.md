# component-docs Specification

## Purpose

TBD - created by archiving change add-core-ark-ui-component-docs. Update Purpose after archive.

## Requirements

### Requirement: Component Documentation Baseline

LiqUIdify documentation SHALL provide consistent, accessible, and copy‑pasteable pages for each component, using correct import paths, live examples, and Apple HIG-compliant typography.

#### Scenario: Page structure and conventions

- **WHEN** a new component docs page is created or updated
- **THEN** it SHALL include frontmatter with `layout: ../../../layouts/DocsLayout.astro`
- **AND** use `ComponentShowcase` for examples with code toggle and copy
- **AND** include sections: Import, Basic Usage, Variants (if applicable), API Reference, Accessibility
- **AND** all React examples SHALL use `client:load`
- **AND** apply Apple HIG typography hierarchy (Title 1 for page title, Title 2 for sections, Title 3 for subsections)

#### Scenario: Import path correctness

- **WHEN** documenting a custom component (e.g., `button`, `badge`, `card`, `modal`)
- **THEN** imports SHALL use `liquidify-react/<component>`
- **WHEN** documenting an Ark‑UI wrapper component (e.g., `accordion`, `tabs`, `dialog`)
- **THEN** imports SHALL use `liquidify-react/ark-ui/<component>` with camelCase directory name
- **WHEN** documenting forms components (e.g., `TextInput`, `Textarea`, `Select`)
- **THEN** imports SHALL use `liquidify-react/forms`
- **WHEN** documenting the SegmentedControl component
- **THEN** imports SHALL use `liquidify-react/segmented-control` (kebab-case)

#### Scenario: Typography hierarchy

- **WHEN** authoring documentation content
- **THEN** page titles SHALL use h1 (maps to HIG Title 1: 28px bold)
- **AND** major sections SHALL use h2 (maps to HIG Title 2: 22px semibold)
- **AND** subsections SHALL use h3 (maps to HIG Title 3: 20px semibold)
- **AND** body text SHALL be 17px with 1.47 line-height
- **AND** spacing between sections SHALL follow 8px grid system
- **AND** visual hierarchy SHALL be clear and scannable

### Requirement: Accordion Documentation

The Accordion component documentation SHALL demonstrate core usage and variants using the Ark‑UI wrapper import path.

#### Scenario: Basic usage renders and code matches

- **WHEN** a user visits `/docs/components/Accordion`
- **THEN** the page SHALL import `{ Accordion }` from `liquidify-react/ark-ui/accordion`
- **AND** a live example SHALL render without errors using `ComponentShowcase`
- **AND** the code block content SHALL match the live example and be copyable

#### Scenario: Accessibility guidance

- **WHEN** reading the Accessibility section
- **THEN** it SHALL describe keyboard navigation and ARIA roles as implemented by Ark‑UI

### Requirement: Client-only Demo Rendering

All interactive Ark-UI wrappers in MDX SHALL render via client-only React demos to avoid SSR runtime errors while preserving real component behavior and styling.

#### Scenario: Hydration strategy

- **WHEN** embedding interactive Ark-UI examples in MDX
- **THEN** the page SHALL import a small demo from `src/components/demos/<Component>Demo.tsx`
- **AND** render it with `client:only="react"`
- **AND** the code block SHALL show the equivalent usage with correct import path

### Requirement: Documentation Coverage

The documentation SHALL include live demos and correct import paths for the initial set of Ark‑UI components.

#### Scenario: Components covered in this change

- **WHEN** reviewing the site
- **THEN** the following components SHALL have client-only demos and corrected imports:
- Accordion, Tabs, Dialog, Popover, Menu, Tooltip, HoverCard, Select, Combobox, NumberInput,
- Checkbox, RadioGroup, Switch, DatePicker, Listbox, Collapsible, PinInput

### Requirement: Tabs Documentation

The Tabs component documentation SHALL include basic usage and at least one variant demonstration.

#### Scenario: Correct import and example

- **WHEN** a user visits `/docs/components/Tabs`
- **THEN** the page SHALL import `{ Tabs }` from `liquidify-react/ark-ui/tabs`
- **AND** a live example SHALL render using `ComponentShowcase` with `client:load`

### Requirement: Dialog Documentation

The Dialog component documentation SHALL include a basic open/close example and accessibility notes.

#### Scenario: Correct import and interactive example

- **WHEN** a user visits `/docs/components/Dialog`
- **THEN** the page SHALL import `{ Dialog }` from `liquidify-react/ark-ui/dialog`
- **AND** a live example SHALL show opening and closing the dialog
- **AND** the code block SHALL match the live example

### Requirement: Documentation Polish and Deployment

The site SHALL present refined visuals and be deployable publicly.

#### Scenario: Visual polish

- **WHEN** viewing pages
- **THEN** spacing, typography, and sidebar interactions feel coherent

#### Scenario: Landing page improvements

- **WHEN** visiting /docs and home
- **THEN** users see clear positioning and navigation cues

#### Scenario: Deployment

- **WHEN** running the deployment flow
- **THEN** the built site is accessible at a stable URL

### Requirement: Apple HIG Typography System

The documentation site SHALL implement Apple Human Interface Guidelines typography standards for consistent, readable, and professional presentation.

#### Scenario: Typography scale implementation

- **WHEN** the site renders documentation pages
- **THEN** it SHALL define CSS custom properties for HIG typography scale:
  - Large Title: 34px
  - Title 1: 28px
  - Title 2: 22px
  - Title 3: 20px
  - Headline: 17px
  - Body: 17px
  - Callout: 16px
  - Subheadline: 15px
  - Footnote: 13px
  - Caption: 12px
- **AND** apply appropriate font weights (Bold for titles, Semibold for headings, Regular for body)
- **AND** use proper line heights (1.25 for headings, 1.47 for body text)

#### Scenario: Spacing and rhythm

- **WHEN** rendering content
- **THEN** it SHALL implement 8px vertical rhythm spacing system
- **AND** provide consistent spacing between sections (24px minimum)
- **AND** use generous whitespace for visual breathing room
- **AND** maintain clear visual separation between content blocks

#### Scenario: Automatic heading styling

- **WHEN** markdown headings are rendered in documentation content
- **THEN** h1 elements SHALL automatically receive Title 1 styling
- **AND** h2 elements SHALL automatically receive Title 2 styling
- **AND** h3 elements SHALL automatically receive Title 3 styling
- **AND** paragraph elements SHALL automatically receive Body text styling
- **AND** these styles SHALL work in both light and dark modes

### Requirement: Correct Import Path Documentation

All documentation pages SHALL use the correct import paths that work with liquidify-react@0.6.18+ where the library build output is in the `dist/` directory.

#### Scenario: Core component imports

- **WHEN** documenting Button, Badge, Card, IconButton, SymbolTile, or Modal
- **THEN** examples SHALL import from `liquidify-react/<component>` path
- **AND** code blocks SHALL show the exact import statement
- **AND** live demos SHALL use the same import path

#### Scenario: Ark-UI wrapper imports

- **WHEN** documenting any of the 47 Ark-UI wrapper components
- **THEN** examples SHALL import from `liquidify-react/ark-ui/<componentName>` with camelCase
- **AND** the path SHALL match the exact casing (e.g., `colorPicker`, not `color-picker`)
- **AND** documentation SHALL include a note about the import path pattern

#### Scenario: Forms and special components

- **WHEN** documenting TextInput, Textarea, or Select (forms version)
- **THEN** examples SHALL import from `liquidify-react/forms`
- **WHEN** documenting SegmentedControl
- **THEN** examples SHALL import from `liquidify-react/segmented-control`

#### Scenario: Styles import

- **WHEN** providing setup instructions or app examples
- **THEN** examples SHALL include `import "liquidify-react/styles";` in app entry point
- **AND** explain this is required once per application

### Requirement: Component Rendering Verification

All component documentation pages SHALL render components with proper styles and functionality after import path corrections.

#### Scenario: Visual verification

- **WHEN** a component page is built and previewed
- **THEN** components SHALL render with liquidify styles (glass effects, proper colors, typography)
- **AND** no CSS variables SHALL be undefined in browser console
- **AND** interactive elements SHALL respond to user interaction
- **AND** animations and transitions SHALL work smoothly

#### Scenario: Demo component functionality

- **WHEN** a user interacts with live examples on component pages
- **THEN** examples SHALL be fully functional (clickable, typeable, selectable, etc.)
- **AND** visual feedback SHALL match the library's design language
- **AND** code blocks SHALL exactly match the rendered example

#### Scenario: Build validation

- **WHEN** building the documentation site
- **THEN** the build SHALL complete without import errors
- **AND** TypeScript validation SHALL pass
- **AND** no module resolution errors SHALL appear
- **AND** all component demos SHALL be included in the build

### Requirement: Typography Documentation

The advanced design guide SHALL document the HIG typography system for contributors and users.

#### Scenario: Typography reference

- **WHEN** a user or contributor consults the design guide
- **THEN** it SHALL document the complete HIG typography scale
- **AND** provide examples of each typography style
- **AND** explain when to use each style (hierarchy guidelines)
- **AND** show code examples for applying typography in documentation

#### Scenario: Spacing guidelines

- **WHEN** documenting content structure best practices
- **THEN** it SHALL explain the 8px grid spacing system
- **AND** provide guidelines for vertical rhythm
- **AND** show examples of proper section spacing
- **AND** illustrate the concept of visual breathing room
