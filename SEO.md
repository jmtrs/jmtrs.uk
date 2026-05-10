# SEO

## Canonical strategy

- `/en` canonical for English
- `/es` canonical for Spanish
- `/` is not treated as canonical content

## Alternate language links

Each localized page exposes:

- `hreflang="en"`
- `hreflang="es"`
- `hreflang="x-default"` pointing to `/en`

## Metadata

Each locale page includes:

- localized `<title>`
- localized meta description
- Open Graph title and description
- Twitter card metadata
- localized `og:locale`

## Structured data

Use `Person` schema with:

- name
- job title
- URL
- location
- sameAs links

## Crawling

- `robots.txt` allows indexing
- sitemap generated from Astro integration
- canonical URLs based on `https://jmtrs.uk`

## Root route

`/` uses an immediate client-side redirect so search engines should treat `/en` and `/es` as the indexable destinations.
