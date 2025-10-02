# Fix Component Rendering and Apply Apple HIG Typography

## Why

The liquidify-react library recently fixed a critical build issue where the package.json was pointing to a non-existent `components/` directory instead of the correct `dist/` directory. This caused all components to render without styles in the documentation site. Now that the library has been corrected (v0.6.18+), the documentation site requires two updates:

1. **Update all import paths** across documentation to use the correct paths that work with the fixed library build
2. **Apply Apple HIG typography standards** to all documentation pages for proper visual hierarchy, spacing, and readability

The first issue prevents components from rendering with their proper styles. The second ensures the documentation itself follows the same design principles as the library it documents.

## What Changes

### Import Path Corrections

- Update all component import statements in MDX files to use correct paths:
  - Custom components: `liquidify-react/<component>` (e.g., `liquidify-react/button`)
  - Ark-UI wrappers: `liquidify-react/ark-ui/<component>` (e.g., `liquidify-react/ark-ui/accordion`)
- Fix demo component imports in `src/components/demos/` to use correct paths
- Verify styles import statement (`import "liquidify-react/styles"`) is correctly documented

### Apple HIG Typography & Spacing

- Apply consistent typography hierarchy based on Apple Human Interface Guidelines:
  - **Large Title**: 34px (2.125rem) - Section headers
  - **Title 1**: 28px (1.75rem) - Page titles
  - **Title 2**: 22px (1.375rem) - Major sections
  - **Title 3**: 20px (1.25rem) - Subsections
  - **Headline**: 17px (1.0625rem) - Content emphasis
  - **Body**: 17px (1.0625rem) - Regular text
  - **Callout**: 16px (1rem) - Secondary text
  - **Subheadline**: 15px (0.9375rem) - Captions
  - **Footnote**: 13px (0.8125rem) - Fine print
  - **Caption**: 12px (0.75rem) - Smallest text

- Implement HIG-compliant spacing:
  - Consistent vertical rhythm using 8px grid system
  - Proper content padding and margins
  - Clear visual separation between sections
  - Comfortable reading line-height (1.47 for body text)

- Apply HIG organizational principles:
  - Clear visual hierarchy with size and weight
  - Generous whitespace for clarity
  - Scannable content structure
  - Emphasis through typography, not color alone

### Files Affected

- All MDX files in `src/pages/docs/**/*.mdx` (~70 pages)
- Demo components in `src/components/demos/**/*.tsx`
- Layout file `src/layouts/DocsLayout.astro` (for global typography styles)
- Potentially `src/components/ComponentShowcase.tsx` for example styling

## Impact

### Positive Impact

- ✅ Components will render with proper styles in documentation
- ✅ Examples will be functional and visually accurate
- ✅ Documentation will follow the same design principles as the library
- ✅ Improved readability and visual hierarchy
- ✅ Professional, Apple-quality documentation appearance
- ✅ Better content scannability and comprehension

### Breaking Changes

- **None** - This is a documentation-only change that fixes broken functionality and improves presentation

### Affected Specs

- `component-docs` - Modified to include typography and rendering requirements

### Affected Code

- `src/pages/docs/**/*.mdx` - Import path corrections and typography markup
- `src/components/demos/**/*.tsx` - Import path corrections
- `src/layouts/DocsLayout.astro` - Typography CSS implementation
- Potentially create new CSS file for HIG typography tokens

### Testing Required

- Visual verification of all component pages
- Verify components render with styles
- Check typography hierarchy on various screen sizes
- Validate examples still copy correctly
- Test code blocks match live examples

### Documentation Updates

- Update IMPORT_REFERENCE.md if needed
- Update guides with any new typography guidelines
- Document HIG typography system in design guide
