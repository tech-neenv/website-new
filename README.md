# Neenv Financial Technologies — Website

Marketing site for Neenv (neenvfin.com), built with Next.js App Router.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript
- CSS Modules (design tokens documented in [THEME_GUIDE.md](THEME_GUIDE.md))
- Resend for contact-form email

## Getting started

Requires Node.js 20+ and pnpm 11.

```bash
pnpm install
pnpm dev
```

The dev server runs at http://localhost:3000.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the dev server |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |

## Environment variables

Create a `.env.local` for local development (it is git-ignored):

```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

`RESEND_API_KEY` powers the contact form at `/api/contact`. Without it the
route returns an error, so set it in every deployment environment as well.

## Project structure

```
src/app/          Routes (App Router), sitemap, robots, API routes
src/components/   Shared and page-specific components
public/           Static assets
```

## Deployment

Deployed on Vercel. The `main` branch is the production branch; every other
branch gets a preview deployment. Set `RESEND_API_KEY` in the Vercel project
settings for Production, Preview, and Development.
