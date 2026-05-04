# Changelog

## 2026-04-20

- Migrated documentation content from the Mintlify source export into `content/docs`.
- Added `meta.json` navigation files for all migrated sections and created `content/docs/index.mdx` for `/docs`.
- Updated branding/theme configuration in `lib/theme-config.ts` for HeyZack.
- Added internal-link normalization for MDX links and cards so Mintlify-style absolute paths resolve under `/docs`.
- Expanded MDX card icon mapping to cover all Mintlify icon names used in the migrated docs.
- Configured Next.js external image hosts for HeyZack branding assets.
- Added an MDX `script` element override to render as `<template>` and avoid client script execution warnings.
