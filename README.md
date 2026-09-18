<div align="center">
  <h1>Astro SEO Theme</h1>

  <img src="public/social-preview.jpg" alt="Astro SEO Theme Cover" width="100%" />

  <p><strong>The ultimate open-source SEO theme for Astro, designed for B2B SaaS and Enterprise.</strong></p>

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Astro](https://img.shields.io/badge/Built_with-Astro-ff5a03?logo=astro&logoColor=white)](https://astro.build/)
[![TailwindCSS](https://img.shields.io/badge/Styled_with-TailwindCSS_v4-38b2ac?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

  <br />
  <a href="https://astro-seo-theme.vercel.app">View Demo</a>
  ·
  <a href="https://github.com/druedaro/astro-seo-theme/issues">Report Bug</a>
  ·
  <a href="https://github.com/druedaro/astro-seo-theme/issues">Request Feature</a>
</div>

---

Astro SEO Theme is an open-source website template built with [Astro](https://astro.build/), [Tailwind CSS v4](https://tailwindcss.com/), and [React](https://react.dev/). You get a highly-optimized landing page, dynamic blog, case studies section, and enterprise-grade SEO tooling in one repo. It's designed so you can launch a premium web presence for a B2B SaaS or startup just by editing content, instead of wrestling with Core Web Vitals from scratch. Unlike generic themes, it ships with an incredibly strict SEO setup, multilingual i18n, security headers, and CI pipelines already wired up.

Live demo: [astro-seo-theme.vercel.app](https://astro-seo-theme.vercel.app/)

- **Three content hubs in one.** High-converting landing page, markdown-driven blog, and case studies portfolio, all sharing a single responsive layout and megamenu.
- **Enterprise-grade SEO.** Centralized `hreflang` generation, JSON-LD structured data, auto-generated sitemaps, and `robots.txt`. Built-in support for GEO (Generative Engine Optimization).
- **100/100 Lighthouse Performance.** "Zero-JS by default" architecture using Astro Islands. Ships 0 KB of JavaScript to the client unless absolutely necessary (like the React-based dark mode toggle).
- **Multilingual out of the box.** Complete English and Spanish implementations included. File-based routing makes it trivial to add more languages.
- **Production-hardened.** Strict Content Security Policy (CSP) and security headers via `vercel.json`, GitHub Actions CI pipeline for type-checking and automated dependabot updates.
- **Modern stack.** Astro 5, Tailwind CSS 4, React 19, TypeScript.
- **AI-assistant friendly.** [`AI_GUIDE.md`](AI_GUIDE.md) tells Cursor, Copilot, and Claude where things live and which conventions to follow so you can prompt your way to a customized site.
- **MIT licensed.** 100% free to use for personal and commercial projects.

Pages are composed using semantic Astro components and native CSS grid/flexbox:

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import HeroSection from '@/components/marketing/HeroSection.astro';
---

<BaseLayout title="Home" description="The best SaaS product ever.">
  <HeroSection />
  <!-- Other components... -->
</BaseLayout>
```

---

## Table of Contents

- [Getting Started](#getting-started)
- [Make It Yours](#make-it-yours)
  - [Site name and SEO](#site-name-and-seo)
  - [Navigation and Megamenu](#navigation-and-megamenu)
  - [Pages and sections](#pages-and-sections)
  - [Blog and Case Studies](#blog-and-case-studies)
  - [Languages (i18n)](#languages-i18n)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Under the Hood](#under-the-hood)
  - [SEO and structured data](#seo-and-structured-data)
  - [robots.txt and sitemap](#robotstxt-and-sitemap)
  - [Security headers](#security-headers)
- [Contributing](#contributing)
- [License](#license)

---

## Getting Started

You need **Node.js 18+** and **npm** (or pnpm/yarn).

**1. Create your repo.** Click **Use this template** at the top of the GitHub page, or clone directly:

```bash
git clone https://github.com/druedaro/astro-seo-theme.git my-saas-website
cd my-saas-website
```

**2. Install dependencies:**

```bash
npm install
```

**3. Start the dev server:**

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321). Edits to any file reload the page instantly.

**4. Build for production:**

```bash
npm run build
```

This builds the site into `dist/`. Preview the result with `npm run preview`.

> **Tip**
> Only need one language? Simply delete the `src/pages/es` folder and remove the language picker from the Header component.

---

## Make It Yours

### Site name and SEO

Everything site-wide lives in `src/layouts/BaseLayout.astro` and `src/i18n/ui.ts`. The default `siteName` is injected automatically into titles and metadata. 

> [!IMPORTANT]
> Change the `site` property in `astro.config.mjs` before going to production. If you skip this, your auto-generated sitemap and `robots.txt` will point to the wrong domain, which will severely hurt your SEO.

### Navigation and Megamenu

Edit `src/components/layout/Header.astro` to modify the navigation. The theme includes a robust, CSS-only desktop megamenu and a mobile accordion menu built without heavy client-side JavaScript.

<!-- RECOMENDACIÓN: Aquí es el lugar perfecto para colocar un GIF. Queda genial justo después de explicar el megamenú, tal y como hace ScrewFast -->
<!-- ![Astro SEO Theme Demo](public/demo.gif) -->

### Pages and sections

Pages in `src/pages/` compose sections from `src/components/marketing/` and `src/components/seo/`. Open `src/pages/index.astro` to see the full homepage, then edit the props or remove sections you don't need.

### Blog and Case Studies

Content is Markdown/MDX in `src/content/blog/` and `src/content/case-studies/`. Schemas are defined in `src/content.config.ts`. A case study looks like this:

```mdx
---
title: 'How TechCorp Scaled with Us'
description: 'A deep dive into B2B growth.'
client: 'TechCorp'
date: 2026-09-15
---

Case study body here.
```

### Languages (i18n)

Marketing pages are file-based: `src/pages/` for English, `src/pages/es/` for Spanish. A `LanguagePicker` component in the Header switches between them. UI strings are centralized in `src/i18n/ui.ts`. `BaseLayout` automatically handles `hreflang` tag generation to prevent duplicate content penalties across languages.

---

## Deployment

`npm run build` produces a static site in `dist/` that any static host can serve.

> [!TIP]
> The included `vercel.json` enforces strict security headers by default. If you plan to load external scripts (like Google Analytics) or images from other domains, you will need to adjust the `Content-Security-Policy` inside that file so they aren't blocked.

- **Vercel:** Import the project directly. The included `vercel.json` adds strict security headers and caching rules.
- **Netlify / Cloudflare Pages:** Works out of the box with zero configuration required.

---

## Project Structure

```text
src/
├── components/
│   ├── layout/             # Header, Footer, megamenu
│   ├── marketing/          # Hero, BentoGrid, PricingTable
│   ├── seo/                # Breadcrumbs, JsonLd, FaqSchema
│   └── ui/                 # LanguagePicker, DarkModeToggle
├── content/
│   ├── blog/               # Markdown posts
│   └── case-studies/       # Markdown case studies
├── i18n/                   # ui.ts (translations), utils.ts
├── layouts/                # BaseLayout.astro (Global Meta/SEO)
├── pages/                  # File-based routes; es/ for Spanish
│   ├── index.astro         # English Home
│   ├── blog/
│   ├── es/                 # Spanish routes
│   └── rss.xml.js
└── styles/
    └── global.css          # Tailwind v4 theme and typography vars
```

---

## Under the Hood

### SEO and structured data

`BaseLayout.astro` is the brain of the theme. It accepts `title`, `description`, `image`, and `articleDate` props. It automatically generates canonical URLs, Open Graph tags, Twitter cards, and `hreflang` alternate links.

For structured data, the theme uses `src/components/seo/JsonLd.astro` and `FaqSchema.astro` to inject `<script type="application/ld+json">` payloads, crucial for Generative Engine Optimization (GEO).

### robots.txt and sitemap

The `@astrojs/sitemap` integration generates the sitemap automatically at build time. `robots.txt` is served statically from the `public/` directory.

### Security headers

`vercel.json` sets `Content-Security-Policy`, `Strict-Transport-Security`, `X-Content-Type-Options`, and `X-Frame-Options` to ensure the site gets an A+ on security scanners like Mozilla Observatory.

### Formatting

Code formatting is enforced using [Prettier](https://prettier.io/). The project includes `prettier-plugin-astro` and `prettier-plugin-tailwindcss` to automatically format `.astro` files and logically sort all Tailwind CSS classes.

> [!NOTE]
> Run `npm run format` locally before committing to ensure all files are perfectly formatted. If you use VS Code, the workspace is already configured to format on save.

---

## Contributing

- **Bugs and ideas:** open an issue.
- **Pull requests:** welcome.

See `CODE_OF_CONDUCT.md` and `CONTRIBUTING.md`.

## License

MIT. See `LICENSE`.

<div align="center">
  Crafted by <a href="https://github.com/druedaro">druedaro</a>.
</div>
