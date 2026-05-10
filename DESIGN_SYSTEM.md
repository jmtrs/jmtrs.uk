# Design System

## Visual direction

The site inherits the tone of the GitHub Copilot rollout presentation:

- black and charcoal foundation
- restrained grayscale palette
- mono display typography
- quiet radial glow and thin borders
- editorial spacing rather than generic SaaS cards

## Typography

- Display: Geist Mono
- Body: Manrope
- Headings: tight tracking, strong weight, short line lengths
- Body copy: generous line height for readability

## Color tokens

### Dark theme

- `--color-bg: #050505`
- `--color-panel: rgba(255,255,255,0.04)`
- `--color-panel-strong: rgba(255,255,255,0.08)`
- `--color-text: #f5f5f5`
- `--color-secondary: #a1a1a1`
- `--color-muted: #6f6f6f`
- `--color-border: rgba(255,255,255,0.12)`

### Light theme

- `--color-bg: #f3f1ec`
- `--color-panel: rgba(18,18,18,0.03)`
- `--color-panel-strong: rgba(18,18,18,0.06)`
- `--color-text: #111111`
- `--color-secondary: #4f4f4f`
- `--color-muted: #747474`
- `--color-border: rgba(18,18,18,0.14)`

## Layout rules

- mobile first
- wide but bounded content column
- dense hero on desktop, comfortable vertical rhythm on mobile
- cards used selectively, not as the only layout primitive
- sticky top bar with navigation and controls

## Motion

- short fade and rise reveals on first load
- subtle hover shifts on cards and buttons
- no decorative looping motion
- respect `prefers-reduced-motion`

## States

- strong focus outline in both themes
- tactile hover for interactive controls
- active locale visibly highlighted
- theme toggle reflects the current mode label

## Breakpoints

- `40rem`: small tablet layout improvements
- `64rem`: desktop grid and denser top bar
- `80rem`: wider sectional compositions
