// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    expressiveCode({
      themes: ['github-dark', 'github-light'],
      styleOverrides: {
        borderRadius: '12px',
        codeFontFamily: "'SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace",
      },
      frames: {
        showCopyToClipboardButton: true,
        extractFileNameFromCode: true,
      },
    }),
    mdx()
  ]
});