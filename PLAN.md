# Project Plan — jmtrs.uk

## Fase 0 — Fundamentos

- [x] Crear el repositorio del proyecto
- [x] Definir el stack y el destino de despliegue
- [x] Añadir documentación de proyecto
- [x] Inicializar Git

## Fase 1 — Arquitectura y modelo de contenido

- [x] Fijar rutas canónicas en `/en` y `/es`
- [x] Definir el resolver de idioma en `/`
- [x] Definir persistencia de tema con dark mode por defecto
- [x] Establecer la fuente de verdad del contenido (TypeScript localizado)
- [x] Definir el mapa de secciones del sitio

## Fase 2 — Implementación

- [x] Scaffolding Astro + TypeScript
- [x] Layout global, metadata y JSON-LD
- [x] Renderizado de la homepage localizada (hero + modal de contacto)
- [x] Selector de idioma y toggle de tema
- [x] UI editorial responsiva con temas dark y light
- [x] Página de CV imprimible (`/cv/[locale]`)
- [x] Script de generación de PDFs con Playwright
- [x] Efecto spotlight de fondo
- [x] Typewriter en el título del hero
- [x] Nubes animadas en el logo de la cabecera

## Fase 3 — Calidad y entrega

- [x] `robots.txt`, sitemap, security headers y web manifest
- [x] GitHub Actions CI (lint, typecheck, build)
- [x] Lint, typecheck y build en verde

## Fase 4 — Publicación

- [x] Repositorio en GitHub
- [ ] Proyecto conectado a Cloudflare Pages
- [ ] Dominio `jmtrs.uk` en producción
- [ ] SEO y enrutamiento de locale validados en producción

## Fase 5 — Mantenimiento

- [x] Limpieza de código muerto: componentes, tipos, CSS y scripts sin uso eliminados
- [x] Documentación actualizada a la estructura real del proyecto
