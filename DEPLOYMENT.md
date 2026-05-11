# Deployment

## Destino

- Hosting: Cloudflare Pages
- Control de versiones: GitHub
- Dominio de producción: `https://jmtrs.uk`

## Configuración de build en Cloudflare Pages

- Framework preset: Astro
- Install command: `pnpm install`
- Build command: `pnpm build`
- Output directory: `dist`
- Node version: `22.12.0` mediante `.node-version`

El comando de build comprueba primero si Chromium de Playwright está instalado y, si falta, lo descarga automáticamente. Después ejecuta `astro build`, luego `node scripts/generate-seo-artifacts.mjs` para generar el sitemap y después `node scripts/generate-cv-pdfs.mjs`, que usa Playwright para renderizar las páginas de CV a PDF.

## Flujo del repositorio

1. Push del repositorio a GitHub
2. Crear un proyecto Cloudflare Pages conectado al repositorio
3. Seleccionar la rama de producción (`main`)
4. Configurar los ajustes de build anteriores
5. Añadir `jmtrs.uk` como dominio de producción personalizado

## Preview branches

Cloudflare Pages crea despliegues de preview automáticamente para pull requests y ramas no productivas.

## Comportamiento de rutas

- `https://jmtrs.uk/` — redirección permanente a `/en`
- `https://jmtrs.uk/en` — homepage en inglés (ruta canónica)
- `https://jmtrs.uk/es` — homepage en español (ruta canónica)
- `https://jmtrs.uk/cv/en` y `/cv/es` — páginas de CV para impresión / PDF (`noindex`)
- `https://jmtrs.uk/cv/jose-miguel-torres-hernandez-cv-en.pdf` — PDF inglés
- `https://jmtrs.uk/cv/jose-miguel-torres-hernandez-cv-es.pdf` — PDF español

## Cabeceras de seguridad

El fichero estático `public/_headers` aplica a todas las rutas:

```
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
X-Frame-Options: DENY
Permissions-Policy: geolocation=(), microphone=(), camera=()
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' https://cloudflareinsights.com; frame-ancestors 'none'
```

## CI (GitHub Actions)

El workflow `.github/workflows/ci.yml` se ejecuta en cada push a `main` y en pull requests:

1. Checkout
2. Setup pnpm 10 + Node.js 22.12.0
3. `pnpm install --frozen-lockfile`
4. `pnpm exec playwright install --with-deps chromium`
5. `pnpm lint` (Prettier)
6. `pnpm typecheck` (astro check)
7. `pnpm build`

## Checklist post-despliegue

- HTTPS activo en el dominio personalizado
- Validar redirección `301` de `/` a `/en`
- Validar descarga de PDFs
- Validar sitemap y robots.txt
- Validar metadata y Open Graph previews
