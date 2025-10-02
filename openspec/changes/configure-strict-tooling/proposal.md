# Configure Strict Tooling and Eliminate All Warnings

## Why

The project currently has 9 errors and 45 warnings from Biome linting, and lacks ESLint configuration for MDX files. To maintain code quality and ensure best practices, we need to:

1. **Configure ESLint for MDX** - Add proper linting for MDX/Markdown files
2. **Configure MDX Formatter** - Add prettier-plugin-mdx for consistent formatting
3. **Enforce Strict TypeScript** - Ensure tsconfig follows strictest standards
4. **Eliminate All Errors** - Fix 9 linting errors (unused vars, missing button types)
5. **Eliminate All Warnings** - Fix 45 warnings (unused imports, style issues)

This ensures the codebase is maintainable, follows best practices, and has zero technical debt from linting issues.

## What Changes

### ESLint Configuration for MDX

- Install `eslint`, `eslint-plugin-mdx`, and required plugins
- Create `.eslintrc.json` with MDX-specific rules
- Add ESLint script to package.json
- Configure to work alongside Biome

### MDX Formatter

- Install `prettier-plugin-mdx`
- Update `.prettierrc.json` to use MDX plugin
- Configure MDX formatting rules (prose wrap, etc.)
- Add format:mdx script

### Strict TypeScript Configuration

- Review and enhance `tsconfig.json`
- Enable all strict flags if not already enabled
- Add additional strict checks (noUncheckedIndexedAccess, etc.)
- Ensure no type errors remain

### Fix All Errors (9 total)

- **ComponentShowcase.tsx** (3 errors) - Remove unused variables
- **TestComponent.tsx** (1 error) - Remove unused variable
- **TooltipDemo.tsx** (1 error) - Remove unused variable
- **DocsLayout.astro** (3 errors) - Add button types, remove unused vars
- **validate-demos.ts** (1 error) - Remove unused variable

### Fix All Warnings (45 total)

- **Unused imports** (28 warnings) - Remove across all demo files
- **noNonNullAssertion** (5 warnings) - Fix non-null assertions
- **useImportType** (1 warning) - Use type imports where needed
- **useConst** (2 warnings) - Change let to const where possible
- **hig-typography.css** (9 warnings) - Fix CSS nesting issues

## Impact

### Positive Impact

- ✅ Zero linting errors and warnings
- ✅ Consistent code quality across project
- ✅ MDX files properly linted and formatted
- ✅ Stricter TypeScript catches more bugs
- ✅ Better developer experience
- ✅ Easier code reviews
- ✅ Professional codebase

### Breaking Changes

- **None** - Only internal code quality improvements

### Affected Areas

- All TypeScript/TSX files with linting issues
- All MDX files (new formatting rules)
- Build configuration files
- Package.json scripts

### Testing Required

- Verify all files pass linting
- Verify build still succeeds
- Verify TypeScript compilation works
- Verify formatted MDX renders correctly
