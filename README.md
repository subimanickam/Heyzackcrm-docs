# HeyZack documents (monorepo)

Single repository containing both Unmint documentation sites:

| App | Path | Default dev URL | Role |
|-----|------|-----------------|------|
| **Partner Portal docs** | `apps/partner-docs` | [http://localhost:3000](http://localhost:3000) | Partner / field operations documentation |
| **CRM docs** | `apps/crm-docs` | [http://localhost:3001](http://localhost:3001) | HeyZack CRM (admin) documentation |

This layout replaces maintaining two separate GitHub repositories ([Heyzack-documents](https://github.com/subimanickam/Heyzack-documents) and [Heyzackcrm-docs](https://github.com/subimanickam/Heyzackcrm-docs)) with one codebase. Archive or redirect the old repos to this monorepo when you are ready.

## Prerequisites

- Node.js 18+
- npm 9+ (workspaces)

## Install

From the repository root:

```bash
npm install
```

## Develop

From the repo root, start **both** sites so the **Partner | CRM** switcher works (Partner on port 3000, CRM on 3001):

```bash
npm run dev
```

The switcher uses full URLs (`http://localhost:3000/docs` and `http://localhost:3001/docs` by default). If only one app is running, the other link opens an empty or wrong page.

To run a single app:

```bash
npm run dev:partner
npm run dev:crm
```

For deployed sites, set `NEXT_PUBLIC_PARTNER_DOCS_URL` and `NEXT_PUBLIC_CRM_DOCS_URL` in each app’s `apps/*/.env.local` (see each app’s `.env.example`).

## Build

```bash
npm run build
```

Or per workspace:

```bash
npm run build:partner
npm run build:crm
```

## Project layout

```
apps/
  partner-docs/   # Partner Portal documentation (formerly Heyzack-documents)
  crm-docs/       # CRM documentation (formerly Heyzackcrm-docs)
```

Each `apps/*` folder is a standalone Next.js + Unmint app with its own `content/docs`, `app/`, and `package.json`.

## License

MIT — see `LICENSE` in the repository root.
