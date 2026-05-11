# Design System

## Dirección visual

- base negra y carbón
- paleta en escala de grises contenida
- tipografía mono para display
- spotlight radial suave y bordes finos
- espaciado editorial, no SaaS genérico

## Tipografía

- Display: Geist Mono
- Cuerpo: Plus Jakarta Sans Variable
- Headings: tracking ajustado, peso fuerte, líneas cortas
- Cuerpo de texto: line-height generoso para legibilidad

## Tokens de color

### Tema dark (por defecto)

```css
--color-bg: #050505
--color-bg-elevated: #0d0d0d
--color-panel: rgba(255,255,255,0.04)
--color-panel-strong: rgba(255,255,255,0.08)
--color-text: #f5f5f5
--color-secondary: #a1a1a1
--color-muted: #6f6f6f
--color-border: rgba(255,255,255,0.12)
--color-accent: #ffffff
```

### Tema light

```css
--color-bg: #f3f1ec
--color-bg-elevated: #fcfaf5
--color-panel: rgba(17,17,17,0.035)
--color-panel-strong: rgba(17,17,17,0.06)
--color-text: #111111
--color-secondary: #4f4f4f
--color-muted: #747474
--color-border: rgba(18,18,18,0.14)
```

## Layout

- mobile first
- columna de contenido amplia y acotada (`min(88rem, calc(100vw - 2rem))`)
- hero denso en desktop, ritmo vertical cómodo en móvil
- cabecera sticky con controles de idioma, tema y CV
- menú móvil desplegable en breakpoints pequeños

## Motion

- reveal con fade + rise en la carga inicial
- efecto typewriter en el título del hero
- nubes pixel-art animadas en el logo de la cabecera (`cloud-drift`)
- spotlight radial que sigue el cursor (`site-spotlight.ts`)
- hover sutil en botones
- todo desactivado si `prefers-reduced-motion` está activo

## Estados de UI

- focus outline visible en ambos temas
- hover táctil en botones y controles
- locale activo resaltado visualmente en el selector
- theme toggle refleja el modo actual

## Breakpoints

```
31rem  — móvil grande (botones y header expandidos)
40rem  — tablet pequeña (grids de dos columnas)
75rem  — desktop (nav visible, hero a pantalla completa mínima)
80rem  — desktop grande (padding generoso en el CV imprimible)
```

## Archivos de estilos

| Archivo | Responsabilidad |
|---|---|
| `global.css` | Tokens, reset, tipografía base, reveal animation, spotlight |
| `layout.css` | Shell del sitio, cabecera, brand, footer |
| `header-controls.css` | Nav, botones de cabecera, menú móvil, locale switch |
| `home.css` | Hero, botones de acción, modal de contacto |
| `utilities.css` | Utilidades transversales |
