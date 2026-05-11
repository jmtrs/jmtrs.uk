# Architecture

## Objetivo

`jmtrs.uk` es un sitio estático bilingüe que presenta a José Miguel Torres Hernández como senior software engineer, con posicionamiento claro en product engineering, entrega segura y adopción práctica de IA.

## Decisiones técnicas

- Framework: Astro con salida estática
- Lenguaje: TypeScript
- Estilos: CSS propio con design tokens (sin frameworks de utilidad)
- Tipografía: Geist Mono para display, Plus Jakarta Sans Variable para cuerpo de texto
- Despliegue: Cloudflare Pages
- Contenido: objetos TypeScript localizados y versionados en el repositorio

## Rutas públicas

| Ruta | Descripción |
|---|---|
| `/` | Redirección permanente a `/en` |
| `/en` | Página de inicio en inglés |
| `/es` | Página de inicio en español |
| `/cv/en` | CV HTML para impresión (inglés, `noindex`) |
| `/cv/es` | CV HTML para impresión (español, `noindex`) |
| `/cv/jose-miguel-torres-hernandez-cv-en.pdf` | PDF generado en el build |
| `/cv/jose-miguel-torres-hernandez-cv-es.pdf` | PDF generado en el build |

## Controles de usuario

**Tema**
- dark mode por defecto
- persiste en `localStorage`
- se inicializa en `<head>` para evitar flash de tema

**Idioma**
- alterna entre `/en` y `/es`
- persiste el idioma elegido en `localStorage`

## Generación de PDFs

El build ejecuta tres pasos:

1. `astro build` — genera el HTML estático, incluyendo `/cv/en` y `/cv/es`
2. `node scripts/generate-seo-artifacts.mjs` — genera `sitemap-index.xml` y `sitemap-0.xml`
3. `node scripts/generate-cv-pdfs.mjs` — lanza Playwright, navega a cada página de CV, imprime a PDF con `@page { size: A4 }` y copia el resultado a `public/cv/`

Los PDFs quedan en `public/cv/` también durante desarrollo para que los enlaces funcionen localmente.

## Arquitectura de contenido

Cada locale exporta un objeto `SiteCopy` y un objeto `CvCopy` desde `src/content/en.ts` y `src/content/es.ts`.

**`SiteCopy`** — página de inicio
- Metadata (pageTitle, description, ogLocale)
- Controles de cabecera (languageSwitcherLabel, menuLabel, themeLabel, headerCta, headerCtaHref, skipToContent)
- Navegación (nav — actualmente vacío)
- Hero (title, intro, summary, actions)
- Contacto (eyebrow, title, intro, closeLabel, links)
- Footer (footer, footerInterests)

**`CvCopy`** — página de CV imprimible
- headline, profile, contact, techStack, spokenLanguages
- keyStrengths, experience, focus, certifications, education, profileFit
- labels (todas las etiquetas de sección en el idioma correspondiente)

La fuente de verdad vive en `src/content/site.ts`, que re-exporta los tipos y agrega los registros indexados por locale.

## Modelo de renderizado

- Una sola plantilla de ruta localizada genera `/en` y `/es`
- `BaseLayout.astro` inyecta metadata, datos estructurados, bootstrap de tema y scripts de UI
- `cv/[locale].astro` es un documento HTML autocontenido con estilos `is:inline` para impresión
- El sitio es completamente estático y no depende de un CMS ni de un runtime de servidor

## Scripts de cliente

| Script | Responsabilidad |
|---|---|
| `src/scripts/ui.ts` | Menú móvil, modal de contacto, tema, locale, reveal animation, typewriter del hero |
| `src/scripts/site-spotlight.ts` | Efecto spotlight de fondo que sigue el cursor |

## Accesibilidad y motion

- estructura semántica con landmarks
- skip link accesible por teclado
- focus states visibles en ambos temas
- `prefers-reduced-motion` desactiva animaciones (cursor del hero, nubes del logo, spotlight, reveals)
- ambos temas mantienen contraste suficiente

## Compromisos de diseño

- La raíz pública redirige a `/en` para no depender de JavaScript en SEO
- El contenido usa objetos TypeScript en lugar de colecciones Markdown porque la forma de cada página es fija y se beneficia de tipado estricto
- Los PDFs se generan en el build con Playwright para mantener fidelidad al CSS sin mantener fuentes de diseño separadas
