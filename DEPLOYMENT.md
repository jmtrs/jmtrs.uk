# Deployment

## Target

- Hosting: Cloudflare Pages
- Source control: GitHub
- Production domain: `https://jmtrs.uk`

## Build settings

- Framework preset: Astro
- Install command: `pnpm install`
- Build command: `pnpm build`
- Output directory: `dist`

## Repository flow

1. Push the repo to GitHub
2. Create a Cloudflare Pages project connected to the GitHub repository
3. Select the production branch
4. Configure the build settings above
5. Add `jmtrs.uk` as the custom production domain

## Branch previews

Cloudflare Pages should create preview deployments automatically for pull requests and non-production branches.

## Domain behavior

- `https://jmtrs.uk/` serves the locale resolver page
- `https://jmtrs.uk/en` is the English canonical route
- `https://jmtrs.uk/es` is the Spanish canonical route

## Headers

The site ships a static `public/_headers` file with:

- `X-Content-Type-Options`
- `Referrer-Policy`
- `X-Frame-Options`
- `Permissions-Policy`

## Post-deploy checklist

- confirm HTTPS on the custom domain
- validate locale switching on production
- validate PDF downloads
- validate sitemap and robots
- validate metadata and Open Graph previews
