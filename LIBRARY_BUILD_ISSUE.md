# Library Build Issue Report - liquidify-react@0.6.16

## Problem Summary

Components render without styles because **CSS variables are referenced but not defined**.

## Current State (v0.6.16)

### ✅ What's Working

- Package publishes successfully (410KB CSS)
- `.liquid-button` class exists with all style rules
- Component code is correct and uses HIG API (variant + tone)
- Import path works: `import "liquidify-react/styles"`
- **JavaScript generates correct class names** (e.g., `.liquid-button--variant_filled--tone_accent`)
- Component TypeScript uses new API properly

### ❌ What's Broken

- **Base design tokens missing** - `:root` only has `--made-with-panda: "🐼"`
- **Compound variant CSS classes missing** - No `.liquid-button--variant_filled`, `.liquid-button--tone_accent` in CSS
- **Components render with classes but no styles** - Classes applied but CSS rules don't exist

## Evidence

### 1. CSS Variables Not Defined

**Current `:root` in liquidify.css**:

```css
:root {
  --made-with-panda: "🐼";
}
```

**Expected (from styled-system/styles.css)**:

```css
@layer tokens {
  :where(:root, :host) {
    --colors-glass-bg: rgba(255, 255, 255, 0.1);
    --colors-glass-border: rgba(255, 255, 255, 0.2);
    --font-sizes-footnote: 13px;
    --radii-roles-button: 8px;
    --colors-accent-dynamic: var(--ui-accent, #007aff);
    --blurs-glass-md: 10px;
    --spacing-glass-sm: 8px;
    /* ... 200+ more tokens ... */
  }
}
```

### 2. Component Code Uses New API Correctly

**The JavaScript DOES generate correct class names**:

```html
<button
  class="liquid-button liquid-button--variant_filled liquid-button--size_regular liquid-button--tone_accent"
></button>
```

**But the recipe metadata still shows old variants**:

```javascript
O = {
  variant: ["primary", "secondary", "ghost", "danger", "success", "warning"],
  size: ["sm", "md", "lg", "xl"],
};
// This doesn't include filled/tinted/plain or tone, but classes are still generated
```

**Note**: The component code bypasses the recipe metadata and directly generates class names, so they appear in HTML but CSS rules don't exist.

### 3. CSS Classes Missing

**HTML has classes**:

```html
class="liquid-button liquid-button--variant_filled liquid-button--tone_accent"
```

**But CSS only has**:

```css
.liquid-button--variant_primary { ... }
.liquid-button--variant_secondary { ... }
/* Missing: .liquid-button--variant_filled */
/* Missing: .liquid-button--tone_accent */
```

**Result**: Buttons render with unstyled appearance because CSS rules for their classes don't exist.

## Root Causes

### Issue 1: Base Tokens Not Bundled

The `styled-system/styles.css` (82KB) contains all base tokens in `@layer tokens`, but when bundled by Vite, these are not included in `dist/libs/components/liquidify.css`.

**Check**:

1. Does `libs/components/src/index.ts` import the styled-system CSS?

   ```typescript
   import "../../../styled-system/styles.css"; // This line needed
   ```

2. Is Vite externalizing CSS? Check `vite.config.ts`:
   ```typescript
   external: (source) => {
     if (source.endsWith(".css")) {
       return false; // Must be false to bundle CSS
     }
   };
   ```

### Issue 2: Panda Compound Variants Not Generating CSS

You have `compoundVariants` defined in `panda.config.ts` (line ~3708):

```typescript
compoundVariants: [
  {
    variant: "filled",
    tone: "accent",
    css: {
      background: "token(colors.button.hig.filled.accent.default.bg)",
      // ... more styles
    },
  },
  // ... more compound variants
];
```

**But Panda is NOT generating CSS classes for these!**

The issue is that:

1. Empty variant objects (`filled: {}`, `tone: {}`) are being ignored
2. Even with placeholders, compound variants might not generate separate classes
3. Panda may need both variants defined separately AND compound variants

**Possible fixes**:

**Option A**: Add placeholder to make Panda recognize variants:

```typescript
variants: {
  variant: {
    filled: { opacity: "1" },  // Placeholder
    tinted: { opacity: "1" },
    plain: { opacity: "1" },
  },
  tone: {
    accent: { opacity: "1" },
    neutral: { opacity: "1" },
    destructive: { opacity: "1" },
  }
}
```

**Option B**: Move compound variant styles into regular variants:

```typescript
variants: {
  variant: {
    filled: {
      background: "token(colors.button.hig.filled.neutral.default.bg)",
      // Base styles for filled
    },
  }
}
// Then use data attributes or CSS for tone variations
```

**Option C**: Use Panda's slot recipes or different recipe structure

## Verification Commands

Run these in the library repo AFTER building:

```bash
# 1. Check if base tokens are in styled-system CSS
grep "colors-glass-bg: rgba" libs/components/styled-system/styles.css
# Should show: --colors-glass-bg: rgba(255, 255, 255, 0.1);

# 2. Check if base tokens are in final bundle
grep "colors-glass-bg: rgba" dist/libs/components/liquidify.css
# Should show the same - if not, tokens aren't being bundled

# 3. Check button variants in build
cat dist/libs/components/chunks/button-*.mjs | grep -o '"variant":\[[^]]*\]'
# Should show: "variant":["primary",...,"filled","tinted","plain"]

# 4. Check if tone exists
cat dist/libs/components/chunks/button-*.mjs | grep -o '"tone":\[[^]]*\]'
# Should show: "tone":["accent","neutral","destructive"]

# 5. Check TypeScript definitions
cat dist/index.d.ts | grep -A 5 "ButtonProps"
# Should show tone as optional property
```

## Impact

- ❌ All components render as unstyled (browser defaults)
- ❌ No liquid glass effects (blur, gradients, translucency)
- ❌ No proper colors or borders
- ❌ HIG button API (`variant + tone`) not usable
- ❌ TypeScript autocomplete doesn't show new variants

## Next Steps for Library Author

1. **Add placeholders to empty variants** in `panda.config.ts`
2. **Verify CSS import** in `libs/components/src/index.ts`
3. **Check Vite config** doesn't externalize CSS
4. **Run**: `bunx panda build` (regenerate with variants)
5. **Run**: `bun run build:lib` (rebuild library)
6. **Verify**: Run all verification commands above
7. **Publish**: Version 0.6.17 with fixes
8. **Test**: Install in docs site and verify styles render

## Current Workaround

None - components won't render with styles until library is fixed and republished.

---

**Versions Checked**: 0.6.14, 0.6.15, 0.6.16 - all have same issue
**Date**: October 1, 2024
**Reporter**: Droid (AI Assistant)
