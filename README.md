# HeyZack documents (monorepo)

Single **Next.js** app serves both documentation sets on **one host** and **one port**:

| Area            | URL path   | Content directory        |
|-----------------|------------|--------------------------|
| Partner Portal  | `/docs`    | `apps/partner-docs/content/partner` |
| HeyZack CRM     | `/docs/crm` | `apps/partner-docs/content/crm`   |

The header **Partner | CRM** control switches between these paths on the same origin (no second localhost port).

## Prerequisites

- Node.js 18+
- npm 9+

## Install

From the repository root:

```bash
npm install
```

## Develop

```bash
npm run dev
```

Open [http://localhost:3000/docs](http://localhost:3000/docs) (Partner) or [http://localhost:3000/docs/crm](http://localhost:3000/docs/crm) (CRM). Default port is **3000** (`apps/partner-docs/package.json`).

## Build

```bash
npm run build
npm run start
```

## Project layout

```
apps/
  partner-docs/          # Only workspace package: Next + Unmint/Fumadocs
    content/
      partner/           # Partner Portal MDX
      crm/               # CRM MDX
    app/docs/
      (partner)/         # Routes under /docs
      (crm)/crm/        # Routes under /docs/crm
```

The former `apps/crm-docs` app was merged here. If you still have an old `apps/crm-docs` folder locally, close any process using it and delete the folder; the npm workspace is **`apps/partner-docs` only**.

## License

MIT — see `LICENSE` in the repository root.
