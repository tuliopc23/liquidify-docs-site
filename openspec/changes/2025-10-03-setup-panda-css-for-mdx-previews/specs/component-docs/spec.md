# Spec Delta: Enhanced Styled Previews for Components

This spec delta extends the component-docs capability to include PandaCSS styling for interactive previews in MDX files.

## ADDED Requirements

#### Requirement: Global PandaCSS Integration with Isolation

The docs site must include PandaCSS generated styles globally but with isolation mechanisms to prevent overriding existing site styles like HIG typography.

#### Scenario: Styled Demo Rendering Without Site Override

Given an MDX file in `pages/docs/components/` importing a demo like `<div class="component-preview"><ButtonBasicDemo /></div>`, when the page is rendered in dev or build mode, then the demo applies Panda CSS classes (e.g., `bg_blue_500`, `px_4`) correctly within the preview, and site-wide elements (e.g., navigation, headings) retain their original styles without Panda interference.

#### Scenario: Isolated Build-Time Generation

Given `panda.config.ts` configured for prefixing (e.g., 'panda-') or CSS layers, when running build or dev with panda script, then `panda.css` is generated and imported after site styles in the layout, and Panda utilities only affect elements with preview classes, with no global style leaks.

#### Requirement: Scoped Previews for Components

All MDX component demos must be wrapped in a dedicated class for style scoping.

#### Scenario: Preview Scoping

Given a demo in MDX: `<div class="component-preview"><AccordionDemo /></div>`, when rendered, then Panda styles apply inside `.component-preview`, and styles do not leak to parent MDX or site content.

## MODIFIED Requirements

#### Requirement: Enhanced Preview Integration

Existing component documentation previews must incorporate PandaCSS and scoping to ensure styled rendering without conflicts.

#### Scenario: Updated Legacy Demos

Given an existing MDX file like Button.mdx with unstyled `<ButtonBasicDemo />`, when updated to include wrapper and Panda enabled, then the demo renders with correct styles, and surrounding docs content (e.g., prose text) remains unchanged.

## Related Capabilities

- component-docs (extended)"
