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

## 🚀 Overview

Astro SEO Theme is a production-ready, highly optimized website template built with **Astro**, **Tailwind CSS v4**, and **React**. It is designed specifically for B2B SaaS companies, startups, and enterprises that demand the highest standards of technical SEO out of the box.

Unlike generic themes, this template is built with a "Zero-JS by default" architecture (Astro Islands), ensuring a **100/100 Lighthouse score** without sacrificing modern aesthetics.

### ✨ Key Features

- **100/100 Lighthouse Performance**: Ships 0 KB of JavaScript to the client by default.
- **Advanced Technical SEO**: Centralized metadata, JSON-LD structured data, auto-generated sitemap, and `robots.txt`.
- **Native i18n**: Out-of-the-box multilingual support (English and Spanish) with automatically generated `hreflang` and `canonical` tags following Google's best practices.
- **Enterprise Megamenu**: CSS-only desktop hover megamenu and mobile accordion navigation.
- **Production-Hardened**: Pre-configured CI/CD (GitHub Actions), Dependabot, and Strict Security Headers via `vercel.json`.
- **Developer Experience**: TypeScript ready, heavily commented code, and an [AI Guide](AI_GUIDE.md) to help you customize the theme using Cursor or Copilot.

---

## 📦 Getting Started

You will need **Node.js 18+** and **npm/pnpm/yarn**.

### 1. Clone the repository

Click **Use this template** at the top of the GitHub page, or clone it directly:

```bash
git clone https://github.com/druedaro/astro-seo-theme.git my-saas-website
cd my-saas-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open `http://localhost:4321` in your browser. Edits will hot-reload automatically.

---

## 🛠️ Configuration

Make this theme your own by editing the core configurations.

### SEO & Global Constants
All global data (Site name, default SEO tags) is managed in `src/layouts/BaseLayout.astro` and `src/i18n/ui.ts`. 

### Internationalization (i18n)
Translations are located in `src/i18n/ui.ts`. The routing is file-based:
- English pages (Default): `src/pages/*.astro`
- Spanish pages: `src/pages/es/*.astro`

### Navigation (Megamenu)
Edit the `navItems` array inside `src/components/layout/Header.astro` to add, remove, or modify the links and dropdown panels.

---

## 🚢 Deployment

This theme is ready to be deployed to **Vercel**, **Netlify**, or **Cloudflare Pages**. 
A `vercel.json` file is already included with strict security headers (Content Security Policy, HSTS, X-Frame-Options) for enterprise-grade security.

To deploy on Vercel:
1. Push your code to GitHub.
2. Import the repository in the Vercel Dashboard.
3. Vercel will automatically detect Astro and build the site.

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) for details on how to get started.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
<div align="center">
  Crafted by <a href="https://davidrueda.vercel.app/">druedaro</a>.
</div>
