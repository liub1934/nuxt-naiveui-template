# Nuxt Naive UI Template

[中文](./README.zh-CN.md)

An opinionated starter template built with Naive UI + Nuxt 4 + TypeScript + UnoCSS.

## Features

- 🎨 Naive UI integration with customizable theme colors (persisted via Cookie, SSR compatible)
- 🌗 Dark mode switching — follows system preference or manual toggle
- 🎯 UnoCSS atomic CSS with Wind4 preset, built-in theme color CSS variables and common shortcuts
- 📏 ESLint powered by [@antfu/eslint-config](https://github.com/antfu/eslint-config) with UnoCSS and Prettier formatting
- 🔌 Naive UI Discrete API globally mounted (`window.$message` / `$dialog` / `$notification` / `$loadingBar`)

## Nuxt Modules

| Module | Description |
| --- | --- |
| [@nuxt/eslint](https://eslint.nuxt.com) | ESLint integration, deeply integrated with Nuxt |
| [@nuxt/icon](https://nuxt.com/modules/icon) | Icon solution, supports the full Iconify icon set |
| [@unocss/nuxt](https://unocss.dev/integrations/nuxt) | UnoCSS atomic CSS engine |
| [@bg-dev/nuxt-naiveui](https://github.com/becem-gharbi/nuxt-naiveui) | Naive UI for Nuxt with SSR and color mode support |

## UnoCSS Theme Colors

Theme colors from Naive UI are bridged to UnoCSS via CSS variables. Five color types are supported — `primary`, `info`, `success`, `warning`, `error` — each with 10 shades (generated from Ant Design color palette, auto-adapts to dark mode).

Use them with any UnoCSS utility class:

```html
<!-- Text color -->
<span class="text-primary">Primary</span>
<span class="text-primary-3">Primary light</span>
<span class="text-primary-8">Primary dark</span>
<span class="text-error">Error</span>

<!-- Background color -->
<div class="bg-success">Success background</div>
<div class="bg-warning-2">Warning light background</div>

<!-- Border color -->
<div class="border border-info">Info border</div>

<!-- Also works with ring, outline, divide, etc. -->
<div class="ring-2 ring-primary">...</div>
```

Available color names:

| Base Color | Shades |
| --- | --- |
| `primary` | `primary-1` ~ `primary-10` |
| `info` | `info-1` ~ `info-10` |
| `success` | `success-1` ~ `success-10` |
| `warning` | `warning-1` ~ `warning-10` |
| `error` | `error-1` ~ `error-10` |

Colors without a shade number (e.g. `primary`, `info`) correspond to shade 5, which is the default color from Naive UI.

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm preview
```
