# jmtrs.uk

Sitio web personal bilingüe para `https://jmtrs.uk`, construido con Astro y desplegado en Cloudflare Pages.

El sitio tiene dos secciones principales: una página de inicio con hero y modal de contacto, y un CV tipográfico generado como PDF a partir de HTML en el build.

- rutas localizadas en `/en` y `/es`
- dark mode por defecto con tema light completo
- layout editorial responsivo
- motion accesible y fundamentos SEO sólidos
- redirección permanente de `/` a `/en` y sitemap generado en el build
- PDFs del CV autogenerados en cada build

## Stack

- Astro + TypeScript
- Contenido localizado en ficheros TypeScript versionados
- CSS handcrafted con design tokens
- Playwright para la generación de PDFs del CV
- Cloudflare Pages (salida estática)

## Desarrollo local

```bash
pnpm install
pnpm dev
```

El servidor corre en `http://localhost:4321`.

## Comandos

```bash
pnpm lint         # Prettier
pnpm typecheck    # astro check
pnpm build        # build + instalación automática de Chromium si falta + generación de PDFs
pnpm preview      # previsualizar el build
pnpm format       # Prettier --write
```

## Documentos del proyecto

- `ARCHITECTURE.md` — decisiones técnicas e interfaces públicas
- `CONTENT_MODEL.md` — estructura de contenido y modelo de localización
- `DESIGN_SYSTEM.md` — tokens visuales, layout y reglas de motion
- `DEPLOYMENT.md` — configuración de GitHub y Cloudflare Pages
- `SEO.md` — metadata, canónicas y estrategia de indexación

## Estructura

```text
.
├── public/
│   ├── cv/                    # PDFs generados (en + es)
│   ├── icons/
│   ├── _redirects
│   ├── favicon.svg
│   ├── logo.svg
│   ├── social-preview.svg
│   ├── robots.txt
│   ├── site.webmanifest
│   └── _headers
├── scripts/
│   ├── generate-seo-artifacts.mjs # sitemap-index.xml + sitemap-0.xml
│   └── generate-cv-pdfs.mjs       # Playwright: renderiza /cv/[locale] → PDF
├── src/
│   ├── components/            # ContactCard, DownloadIcon, LanguageSwitch, ThemeToggle
│   ├── content/               # Tipos, en.ts, es.ts, site.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── [locale]/index.astro   # Página de inicio (hero + contacto)
│   │   ├── cv/[locale].astro      # CV HTML para impresión / PDF
│   ├── scripts/
│   │   ├── ui.ts                  # Menú, modal, tema, idioma, reveal
│   │   └── site-spotlight.ts      # Efecto spotlight de fondo
│   └── styles/
│       ├── global.css
│       ├── home.css
│       ├── header-controls.css
│       ├── layout.css
│       └── utilities.css
├── .github/workflows/ci.yml
└── *.md
```

## Resumen de despliegue

- GitHub aloja el repositorio y gestiona los pull requests
- Cloudflare Pages construye el sitio desde la rama `main`
- Dominio de producción: `https://jmtrs.uk`
- `https://jmtrs.uk/` redirige a `https://jmtrs.uk/en`
- Rutas canónicas: `https://jmtrs.uk/en` y `https://jmtrs.uk/es`
