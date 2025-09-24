## ADDED Requirements

### Requirement: Component Documentation Baseline

LiqUIdify documentation SHALL provide consistent, accessible, and copy‑pasteable pages for each component, using correct import paths and live examples.

#### Scenario: Page structure and conventions

- **WHEN** a new component docs page is created or updated
- **THEN** it SHALL include frontmatter with `layout: ../../../layouts/DocsLayout.astro`
- **AND** use `ComponentShowcase` for examples with code toggle and copy
- **AND** include sections: Import, Basic Usage, Variants (if applicable), API Reference, Accessibility
- **AND** all React examples SHALL use `client:load`

#### Scenario: Import path correctness

- **WHEN** documenting a custom component (e.g., `button`, `badge`)
- **THEN** imports SHALL use `liquidify-react/<component>`
- **WHEN** documenting an Ark‑UI wrapper component (e.g., `accordion`, `tabs`, `dialog`)
- **THEN** imports SHALL use `liquidify-react/ark-ui/<component>`

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
