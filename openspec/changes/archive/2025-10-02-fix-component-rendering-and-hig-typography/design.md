# Technical Design: Component Rendering Fix and HIG Typography

## Context

The liquidify-react library (v0.6.16 and earlier) had a build configuration issue where package.json pointed to `components/` directory instead of the actual build output at `dist/`. This caused the npm package to be published without proper exports, resulting in:

- Components rendering without styles (CSS variables undefined)
- Import errors for subpath exports
- Inconsistent module resolution

The library maintainer has corrected this in v0.6.18+ by updating package.json exports to point to the correct `dist/` directory. However, the documentation site may have workarounds or incorrect import patterns that need correction.

Additionally, the documentation should follow the same Apple Human Interface Guidelines that the library itself implements.

### Stakeholders

- Documentation site users (developers)
- Library maintainers (ensure accurate representation)
- Contributors (need clear examples)

### Constraints

- Must maintain backward compatibility with existing links
- Cannot change liquidify-react library code
- Must work with Astro + MDX + React integration
- Must respect existing sidebar navigation structure

## Goals / Non-Goals

### Goals

1. **Fix all import paths** to use correct subpath exports from liquidify-react
2. **Implement Apple HIG typography** across all documentation pages
3. **Ensure components render with styles** in all examples
4. **Maintain consistency** across 70+ documentation pages
5. **Improve readability** through proper hierarchy and spacing
6. **Document typography system** for future contributors

### Non-Goals

- Modifying the liquidify-react library itself (already fixed)
- Changing the documentation site architecture
- Adding new components or features
- Redesigning the sidebar or navigation
- Implementing responsive font scaling (keep fixed sizes per HIG)

## Decisions

### Decision 1: Import Path Strategy

**What**: Use correct subpath imports consistently across all files

**Rationale**:

- Custom components (Button, Badge, Card, etc.): Use `liquidify-react/<component>`
- Ark-UI wrappers: Use `liquidify-react/ark-ui/<component>` with camelCase
- Styles: Always import `liquidify-react/styles` in app entry

**Implementation**:

```tsx
// Custom components
import { Button } from "liquidify-react/button";
import { Badge } from "liquidify-react/badge";
import { Card } from "liquidify-react/card";

// Ark-UI wrappers (note camelCase in path)
import { Accordion } from "liquidify-react/ark-ui/accordion";
import { ColorPicker } from "liquidify-react/ark-ui/colorPicker";
import { NumberInput } from "liquidify-react/ark-ui/numberInput";

// Styles (in app entry)
import "liquidify-react/styles";
```

**Alternatives Considered**:

- Root imports (`import { Button } from "liquidify-react"`): Less tree-shakeable, larger bundles
- Relative paths: Not supported by package structure
- Dynamic imports: Unnecessarily complex for documentation

### Decision 2: Typography System Implementation

**What**: Create a separate CSS file with HIG typography tokens and utility classes

**File**: `src/styles/hig-typography.css`

**Structure**:

```css
/* CSS Custom Properties for Typography */
:root {
  /* Font Sizes (Apple HIG) */
  --hig-font-large-title: 34px;
  --hig-font-title-1: 28px;
  --hig-font-title-2: 22px;
  --hig-font-title-3: 20px;
  --hig-font-headline: 17px;
  --hig-font-body: 17px;
  --hig-font-callout: 16px;
  --hig-font-subheadline: 15px;
  --hig-font-footnote: 13px;
  --hig-font-caption: 12px;

  /* Line Heights */
  --hig-line-height-tight: 1.25;
  --hig-line-height-normal: 1.47;
  --hig-line-height-relaxed: 1.6;

  /* Spacing (8px grid) */
  --hig-space-xs: 8px;
  --hig-space-sm: 16px;
  --hig-space-md: 24px;
  --hig-space-lg: 32px;
  --hig-space-xl: 48px;

  /* Font Weights */
  --hig-weight-regular: 400;
  --hig-weight-medium: 500;
  --hig-weight-semibold: 600;
  --hig-weight-bold: 700;
}

/* Utility Classes */
.hig-large-title {
  font-size: var(--hig-font-large-title);
  font-weight: var(--hig-weight-bold);
}
.hig-title-1 {
  font-size: var(--hig-font-title-1);
  font-weight: var(--hig-weight-bold);
}
.hig-title-2 {
  font-size: var(--hig-font-title-2);
  font-weight: var(--hig-weight-semibold);
}
.hig-title-3 {
  font-size: var(--hig-font-title-3);
  font-weight: var(--hig-weight-semibold);
}
.hig-headline {
  font-size: var(--hig-font-headline);
  font-weight: var(--hig-weight-semibold);
}
.hig-body {
  font-size: var(--hig-font-body);
  line-height: var(--hig-line-height-normal);
}
.hig-callout {
  font-size: var(--hig-font-callout);
}
.hig-subheadline {
  font-size: var(--hig-font-subheadline);
}
.hig-footnote {
  font-size: var(--hig-font-footnote);
  color: var(--color-text-secondary);
}
.hig-caption {
  font-size: var(--hig-font-caption);
  color: var(--color-text-tertiary);
}
```

**Rationale**:

- CSS custom properties allow theme-ability and consistency
- Utility classes provide easy application in MDX
- Separate file keeps concerns organized
- Follows existing liquidify design token pattern

**Alternatives Considered**:

- Tailwind classes: Site doesn't use Tailwind consistently
- Inline styles: Not maintainable, loses theming
- Component-based system: Overkill for documentation styling

### Decision 3: Markdown Heading Mapping

**What**: Map markdown headings to HIG typography automatically

**Implementation in DocsLayout.astro**:

```css
/* Apply HIG typography to markdown-generated headings */
.docs-content h1 {
  font-size: var(--hig-font-title-1);
  font-weight: var(--hig-weight-bold);
  margin-top: var(--hig-space-xl);
  margin-bottom: var(--hig-space-md);
  line-height: var(--hig-line-height-tight);
}

.docs-content h2 {
  font-size: var(--hig-font-title-2);
  font-weight: var(--hig-weight-semibold);
  margin-top: var(--hig-space-lg);
  margin-bottom: var(--hig-space-sm);
  line-height: var(--hig-line-height-tight);
}

.docs-content h3 {
  font-size: var(--hig-font-title-3);
  font-weight: var(--hig-weight-semibold);
  margin-top: var(--hig-space-md);
  margin-bottom: var(--hig-space-sm);
  line-height: var(--hig-line-height-tight);
}

.docs-content p {
  font-size: var(--hig-font-body);
  line-height: var(--hig-line-height-normal);
  margin-bottom: var(--hig-space-sm);
}

.docs-content code {
  font-family: "SF Mono", Monaco, "Cascadia Code", "Courier New", monospace;
  font-size: 0.92em;
}

.docs-content li {
  margin-bottom: var(--hig-space-xs);
}
```

**Rationale**:

- Automatic application means no MDX changes needed for typography
- Consistent across all pages without manual markup
- Authors can focus on content, not styling
- Easy to adjust globally

**Alternatives Considered**:

- Manual classes on every heading: Too tedious, error-prone
- MDX components: More complex, harder for contributors
- JavaScript-based transformation: Unnecessary complexity

### Decision 4: Validation Strategy

**What**: Multi-stage validation process

**Stages**:

1. **Build validation**: `bun build` must succeed
2. **Type validation**: `bun typecheck` must pass
3. **Lint validation**: `bun lint` must pass
4. **Visual validation**: Manual spot-check of pages
5. **Functional validation**: Test interactive demos
6. **OpenSpec validation**: `openspec validate --strict`

**Rationale**:

- Catches different types of issues at appropriate stages
- Build errors caught early
- Visual issues require human judgment
- Comprehensive coverage

## Risks / Trade-offs

### Risk 1: Breaking Existing Bookmarks

- **Risk**: URL structure changes could break external links
- **Mitigation**: Not changing URLs, only updating content
- **Likelihood**: Low
- **Impact**: Low

### Risk 2: Import Path Errors

- **Risk**: Typos in import paths cause runtime errors
- **Mitigation**: TypeScript validation + build testing
- **Likelihood**: Medium (70+ files to update)
- **Impact**: High (pages won't render)
- **Action**: Systematic testing of each component page

### Risk 3: Typography Hierarchy Issues

- **Risk**: Poor hierarchy makes content hard to scan
- **Mitigation**: Follow Apple HIG precisely, test on real content
- **Likelihood**: Low (following established standard)
- **Impact**: Medium (reduced usability)
- **Action**: Review with actual documentation pages

### Risk 4: Dark Mode Compatibility

- **Risk**: New typography styles break dark mode
- **Mitigation**: Test both modes, use CSS custom properties that respect themes
- **Likelihood**: Low
- **Impact**: Medium
- **Action**: Include dark mode testing in validation

### Trade-off 1: Fixed vs. Responsive Typography

- **Choice**: Using fixed pixel sizes per Apple HIG
- **Trade-off**: Less flexibility on very small/large screens
- **Rationale**: HIG specifies fixed sizes for consistency; iOS/macOS use fixed sizes

### Trade-off 2: Automatic vs. Manual Typography

- **Choice**: Automatic mapping of markdown headings to HIG styles
- **Trade-off**: Less control for individual pages
- **Rationale**: Consistency and maintainability outweigh flexibility needs

## Migration Plan

### Phase 1: Setup (Tasks 1-3)

1. Audit current state
2. Create typography system
3. Update layout globally

**Rollback**: Remove typography CSS import

### Phase 2: Fix Imports (Tasks 4-6)

1. Update demo components
2. Update guides
3. Update core component docs

**Rollback**: Revert files to previous imports

### Phase 3: Fix Remaining Pages (Tasks 6-8)

1. Update all Ark-UI component docs
2. Update advanced documentation

**Rollback**: Revert files or roll back deploy

### Phase 4: Validation (Tasks 9-11)

1. Run all automated checks
2. Manual visual testing
3. OpenSpec validation

**Rollback**: If critical issues found, fix or rollback

### Deployment Strategy

- Build and test locally first
- Deploy to staging/preview (if available)
- Manual smoke test
- Deploy to production
- Monitor for issues

### Rollback Plan

If components don't render correctly:

1. Check liquidify-react version (must be 0.6.18+)
2. Check browser console for import errors
3. Revert specific problematic pages
4. If widespread, rollback entire deployment

## Open Questions

1. **Q**: Should we update liquidify-react to latest version as part of this change?
   **A**: Yes, ensure package.json has 0.6.18 or later

2. **Q**: Do we need to update IMPORT_REFERENCE.md?
   **A**: Only if we discover new patterns or corrections

3. **Q**: Should we add automated visual regression tests?
   **A**: Nice to have but not required for this change; manual testing sufficient

4. **Q**: What about mobile typography sizing?
   **A**: Keep consistent with HIG (no responsive sizing); Apple uses fixed sizes across devices

5. **Q**: Should we document the typography system for contributors?
   **A**: Yes, add section to advanced/design.mdx explaining the typography system

## Success Criteria

1. ✅ All component pages render with proper styles
2. ✅ No import errors in browser console
3. ✅ Build completes without errors
4. ✅ Typography hierarchy is clear and scannable
5. ✅ Dark mode works correctly
6. ✅ All code examples are copy-pasteable
7. ✅ Page load performance is acceptable
8. ✅ OpenSpec validation passes
