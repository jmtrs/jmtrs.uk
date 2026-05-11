# Content Model

## Fuente de verdad

El contenido del sitio vive en:

- `src/content/types.ts` — definiciones de tipos TypeScript
- `src/content/en.ts` — contenido en inglés (web + cv)
- `src/content/es.ts` — contenido en español (web + cv)
- `src/content/site.ts` — re-exporta tipos y agrega los registros indexados por locale

## Estructura de la página de inicio (`SiteCopy`)

Cada locale exporta un objeto `web: SiteCopy` con estas secciones:

### Cabecera y meta
- `pageTitle`, `description`, `ogLocale`
- `languageSwitcherLabel`, `menuLabel`, `themeLabel`, `skipToContent`
- `headerCta`, `headerCtaHref` — botón del CV en la cabecera
- `nav` — array de ítems de navegación (actualmente vacío)

### Hero
- `title: string[]` — líneas del título (typewriter)
- `intro: string` — párrafo principal
- `summary: string` — párrafo secundario
- `actions: Action[]` — botones CTA (variante `primary` o `secondary`)

### Contacto (modal)
- `eyebrow`, `title`, `intro`, `closeLabel`
- `links: ContactLink[]` — cada enlace tiene `label`, `href`, `value`

### Footer
- `footer: string` — línea de copyright
- `footerInterests: string` — intereses personales

## Estructura del CV (`CvCopy`)

Cada locale exporta un objeto `cv: CvCopy` para la página de CV imprimible:

- `headline` — subtítulo profesional
- `profile: string[]` — párrafos del perfil
- `contact` — teléfono, email, location, linkedin, github
- `techStack: CvTechCategory[]` — categorías con nombre e items
- `spokenLanguages: CvSpokenLanguage[]`
- `keyStrengths: CvKeyStrength[]`
- `experience: CvExperienceItem[]` — con role, company, location?, period, roleNote?, bullets
- `focus: CvFocusItem[]`
- `certifications: CvCertification[]`
- `education: CvEducation`
- `profileFit: string[]`
- `labels` — todas las etiquetas de sección en el idioma del locale

## Reglas de contenido

- Las dos locales deben ser equivalentes en estructura e intención
- El contenido del CV imprimible (`CvCopy`) se mantiene más detallado que el web
- Ambas locales deben tener las mismas claves — el tipo TypeScript lo garantiza en compilación
- No incluir información confidencial de proyectos de cliente

## Tipos de datos

Los tipos están definidos en `src/content/types.ts` y re-exportados desde `src/content/site.ts`. Los tipos compartidos entre web y CV son `Action` y `ContactLink`. Los tipos exclusivos del CV (`CvTechCategory`, `CvExperienceItem`, etc.) no forman parte de `SiteCopy`.
