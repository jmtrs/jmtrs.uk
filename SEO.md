# SEO

## Estrategia de canónicas

- `/en` — canónica para inglés
- `/es` — canónica para español
- `/` redirige de forma permanente a `/en`
- `/cv/en` y `/cv/es` no forman parte de las URLs indexables

## Alternate language links

Cada página localizada expone en `<head>`:

```html
<link rel="alternate" hreflang="en" href="https://jmtrs.uk/en" />
<link rel="alternate" hreflang="es" href="https://jmtrs.uk/es" />
<link rel="alternate" hreflang="x-default" href="https://jmtrs.uk/en" />
```

## Metadata

Cada página localizada incluye:

- `<title>` localizado
- meta description localizada
- `og:title`, `og:description`, `og:url`, `og:image`, `og:locale`
- Twitter card (`summary_large_image`)
- `<link rel="canonical">`

## Datos estructurados (JSON-LD)

Schema `Person` inyectado en cada página de inicio:

```json
{
  "@type": "Person",
  "name": "José Miguel Torres Hernández",
  "jobTitle": "Senior Software Engineer",
  "email": "mailto:jmtrs@proton.me",
  "url": "https://jmtrs.uk",
  "sameAs": ["https://github.com/jmtrs", "https://www.linkedin.com/in/jmtrs/"],
  "homeLocation": {
    "@type": "Place",
    "name": "Valencia, Spain"
  }
}
```

## Crawling e indexación

- `public/robots.txt` permite indexación
- `sitemap-index.xml` y `sitemap-0.xml` se generan en el build
- URLs canónicas basadas en `https://jmtrs.uk`

## Ruta raíz

`/` redirige a `/en` con `301`, por lo que los motores de búsqueda deben tratar `/en` y `/es` como los destinos indexables.

## Imagen de Open Graph

`/social-preview.svg` se usa como imagen OG en todas las páginas.
