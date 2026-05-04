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

Run one site at a time (use two terminals for both):

```bash
npm run dev:partner
npm run dev:crm
```

Each app includes a **Partner | CRM** header switcher. Configure sibling URLs in each app’s `apps/*/ .env.local` (see `apps/crm-docs/.env.example` and `apps/partner-docs/.env.example`).

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
