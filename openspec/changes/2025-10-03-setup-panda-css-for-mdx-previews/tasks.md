# Tasks for Setup PandaCSS Integration

## Ordered Tasks

1. **Install PandaCSS**
   - Run `bun add -d @pandacss/dev` to install.
   - Verify installation with `bun panda --help`.

2. **Create panda.config.ts**
   - Write `panda.config.ts` in root, based on Liquidify's config.
   - Include presets for @ark-ui/react if applicable.
   - Validate config syntax.

3. **Add Generation Script**
   - Update package.json: Add `"panda": "panda --clean"`.
   - Add to prebuild: `"prebuild": "bun panda"`.

4. **Generate and Import CSS**
   - Run `bun panda` to generate `src/styles/panda.css`.
   - Edit `src/layouts/DocsLayout.astro` to import `./../styles/panda.css` after existing styles.
   - Add wrapper class to preview sections in MDX templates if needed (e.g., <div class="component-preview">).

5. **Update Astro Config if Needed**
   - Ensure @astrojs/mdx and @astrojs/react are integrated.
   - Add any necessary vite config for Panda.

6. **Test Demos and Style Isolation**
   - Run `bun dev` and check previews in docs/components/ (e.g., Button.mdx).
   - Verify styles apply to AccordionDemo, ButtonDemo, etc., without affecting site navigation or text styles.
   - Inspect CSS for conflicts; toggle import to confirm no overrides.
   - Run `bun build` and `bun preview` to confirm.

7. **Update Astro Config if Needed**
   - Ensure @astrojs/mdx and @astrojs/react are integrated.
   - Add any necessary vite config for Panda.

8. **Test Demos**
   - Run `bun dev` and check previews in docs/components/ (e.g., Button.mdx).
   - Verify styles apply to AccordionDemo, ButtonDemo, etc.
   - Run `bun build` and `bun preview` to confirm.

9. **Lint and Typecheck**
   - Run `bun lint` and `bun typecheck`.
   - Fix any issues.

10. **Document Changes**
    - Update README.md or guides/installing.mdx with setup instructions.
    - Add to AGENTS.md if relevant.

## Validation

- All component demos render with styles.
- No regressions in existing docs.
- Build succeeds without errors."
