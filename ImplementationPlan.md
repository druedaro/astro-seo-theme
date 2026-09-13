# 🚀 Astro SEO theme — The Editorial SEO-First Blog Template

Un template de blog open-source para Astro, diseñado desde cero con las mejores prácticas de SEO 2026 (incluyendo GEO y AEO). Objetivo: ser aceptado en el [directorio oficial de Astro](https://astro.build/themes/) y en [Vercel Templates](https://vercel.com/templates).

## Análisis Competitivo

He revisado el mercado de templates de Astro. Esto es lo que hay:

| Template | Enfoque | SEO Level | Precio |
|---|---|---|---|
| **ScrewFast** | Landing page empresarial | Básico (meta tags) | Free |
| **Lexington Themes** | Multi-propósito | Medio | $99 |
| **Cosmic Themes** | Multi-propósito con i18n | Medio-Alto | Pago |
| **AstroPaper** | Blog minimalista | Medio | Free |

### ¿Dónde está el hueco?

**Ningún template gratuito se posiciona como "el template SEO-first".** Todos tienen meta tags básicos, pero ninguno:
- Genera **JSON-LD automático** por tipo de contenido (Article, BlogPosting, FAQ, HowTo, BreadcrumbList)
- Implementa señales de **GEO** (Generative Engine Optimization) para IA
- Implementa señales de **AEO** (Answer Engine Optimization) para Featured Snippets
- Incluye un **SEO Checklist** integrado en el README que eduque al usuario
- Tiene un **100/100 en Lighthouse** como bandera de marketing

Esa es tu ventaja competitiva absoluta. Un template que no solo sea bonito, sino que sea **la referencia de SEO técnico para Astro**.

## Requisitos de Astro para Aceptar Themes

> [!IMPORTANT]
> Según el portal de Astro (`portal.astro.build/themes/submit`), para subir un theme solo necesitas **iniciar sesión con GitHub** y rellenar un formulario con la URL del repositorio y la demo. No hay coste. Los "Featured Themes" que aparecen arriba son sponsors de pago, pero el directorio general es gratuito.

Para maximizar las probabilidades de aceptación y destacar:
1. Repositorio público en GitHub con **README impecable** (screenshots, badges, instrucciones claras)
2. **Demo desplegada en Vercel/Netlify** con contenido de ejemplo real (no lorem ipsum)
3. Botón **"Deploy to Vercel"** y **"Open in StackBlitz"**
4. Licencia MIT
5. **Lighthouse 100/100** (captura en el README como prueba social)

---

## Propuesta de Arquitectura

### Stack Tecnológico
- **Astro v7** (última versión estable)
- **Tailwind CSS v4** (con `@tailwindcss/typography` para estilar Markdown/MDX)
- **MDX** para los posts del blog (permite usar componentes React dentro del Markdown)
- **TypeScript** (tipado estricto en las colecciones de contenido)
- **View Transitions** (animaciones nativas de Astro entre páginas)

### Estructura de Páginas
```
src/
├── content/
│   ├── blog/           # Posts en MDX con frontmatter tipado
│   └── authors/        # Datos de autores (E-E-A-T)
├── components/
│   ├── seo/            # ★ Componentes SEO reutilizables
│   │   ├── JsonLd.astro         # Generador dinámico de JSON-LD
│   │   ├── OpenGraph.astro      # Meta OG/Twitter dinámicos
│   │   ├── Breadcrumbs.astro    # Breadcrumbs con Schema
│   │   └── FaqSchema.astro      # FAQ Schema automático
│   ├── ui/             # Componentes visuales
│   └── layout/         # Layouts base
├── layouts/
│   ├── BaseLayout.astro    # Layout raíz con SEO head
│   ├── BlogPost.astro      # Layout de post individual
│   └── BlogList.astro      # Layout de listado
├── pages/
│   ├── index.astro         # Homepage
│   ├── blog/
│   │   ├── index.astro     # Listado de posts con paginación
│   │   └── [...slug].astro # Post individual (SSG)
│   ├── about.astro         # Página About (E-E-A-T)
│   ├── 404.astro           # Página 404 personalizada
│   └── rss.xml.ts          # Feed RSS generado automáticamente
└── styles/
    └── global.css          # Estilos base + Typography
```

---

## Killer Features SEO/GEO/AEO

### 1. JSON-LD Automático (SEO + GEO)
Un componente `<JsonLd />` que detecta el tipo de página y genera el schema correspondiente:

```astro
<!-- En BlogPost.astro — se genera automáticamente -->
<JsonLd
  type="BlogPosting"
  title={post.data.title}
  description={post.data.description}
  author={post.data.author}
  datePublished={post.data.pubDate}
  dateModified={post.data.updatedDate}
  image={post.data.heroImage}
/>
```

**Tipos de Schema soportados:**
- `WebSite` (homepage, con `SearchAction` para sitelinks)
- `BlogPosting` / `Article` (cada post)
- `BreadcrumbList` (navegación jerárquica)
- `Person` + `Organization` (E-E-A-T para autores)
- `FAQPage` (generado automáticamente si el post contiene preguntas en los H2/H3)

### 2. Señales GEO para Motores de IA
- **Factual density:** El template de ejemplo incluirá posts con datos específicos, estadísticas y fuentes citadas (para enseñar al usuario cómo escribir contenido que las IAs quieran citar)
- **Entity clarity:** Schema `Organization` completo con `sameAs` (links a redes sociales) para reforzar el "knowledge graph"
- **Author authority:** Colección de contenido `authors/` con campos de credenciales, bio y links — los posts enlazan automáticamente al perfil del autor

### 3. Señales AEO para Featured Snippets
- **Headings con formato pregunta:** El template de post animará (en la documentación) a usar H2 tipo "¿Qué es X?" o "¿Cómo funciona Y?"
- **Párrafos de definición:** CSS que resalta visualmente el primer párrafo después de un H2-pregunta (40-60 palabras, la longitud óptima para snippets)
- **FAQ Schema automático:** Si un post usa el componente `<FAQ>` de MDX, se genera `FAQPage` schema automáticamente

### 4. SEO Técnico Perfecto
- `@astrojs/sitemap` preconfigurado con `changefreq` y `priority`
- `robots.txt` generado dinámicamente
- RSS Feed (`/rss.xml`) autogenerado
- Canonical URLs automáticas
- Imágenes optimizadas con `<Image />` de Astro (WebP/AVIF automático)
- Preconnect/preload de fuentes críticas
- **Lighthouse 100/100** en las 4 categorías

### 5. UX/UI Premium
- **Dark mode** con toggle persistente (localStorage)
- **View Transitions** entre páginas (animación nativa de Astro)
- **Tipografía**: Inter (o similar de Google Fonts) con `@tailwindcss/typography`
- **Tabla de contenidos (TOC)** autogenerada en los posts con scroll spy
- **Tiempo de lectura** calculado automáticamente
- **Paginación** del blog con diseño limpio
- **Responsive** perfecto (mobile-first)

---

## Contenido de Ejemplo

> [!TIP]
> El contenido de ejemplo es **crítico** para que el template tenga buena pinta en la demo y para que los usuarios entiendan cómo usar las features de SEO.

Posts de ejemplo (3-4 artículos):
1. **"Getting Started with AstroPress"** — Tutorial que explica las features SEO del template
2. **"SEO Best Practices for Your Blog in 2026"** — Artículo largo con Schema FAQ de ejemplo
3. **"How to Optimize for AI Search Engines (GEO)"** — Artículo educativo con estadísticas

Cada post tendrá un frontmatter completo:
```yaml
---
title: "Getting Started with AstroPress"
description: "Learn how to set up your SEO-optimized blog with AstroPress in under 5 minutes."
pubDate: 2026-09-10
updatedDate: 2026-09-10
heroImage: "./images/getting-started.webp"
author: "david-rueda"
tags: ["astro", "seo", "tutorial"]
draft: false
---
```

---

## Distribución y Marketing

### Canal 1: Astro Themes Directory (Gratuito)
- Subir vía `portal.astro.build/themes/submit`
- Categoría: Blog
- Tags: `seo`, `blog`, `tailwind`, `mdx`, `typescript`

### Canal 2: Vercel Templates
- Botón "Deploy to Vercel" en el README
- Subir a la galería de Vercel (formulario gratuito)

### Canal 3: GitHub
- README con badges (Lighthouse score, Astro version, license)
- Screenshots/GIFs de la demo
- Contributing guide para atraer contribuciones

### Canal 4: Comunidades
- Post en el Discord de Astro
- Post en Reddit (r/webdev, r/astro)
- Artículo en tu blog personal (o DEV.to) explicando las decisiones técnicas de SEO

---

## Decisiones de Arquitectura Tomadas

- **Nombre:** Astro SEO theme
- **Idioma Principal:** Inglés (Inglés global para maximizar visibilidad en Vercel/GitHub).
- **Estilo Visual:** Editorial (Tipografía elegante, mucho espacio en blanco, diseño tipo periódico digital premium o Medium/Substack, perfecto para lectura larga y retención de usuarios).
- **i18n (Internacionalización):** Se incluirá soporte nativo de Astro para múltiples idiomas (ej. `en` y `es`). Esto es una *killer feature* enorme para un template SEO. Se configurarán subdirectorios (`/en/blog/` y `/es/blog/`) con tags `hreflang` automáticos.

## Análisis de Packages de Terceros

Has propuesto una lista muy interesante de paquetes de `codiume/orbit`. Aquí tienes el análisis estratégico de cuáles usar en un template que aspira al 100/100 en Lighthouse y a ser la referencia en SEO:

### 🟢 Aprobados (Altamente Recomendables)
1. **`astro-seo-meta`**: Usar un paquete robusto para los meta tags estándar (title, descripción, open graph, twitter cards) nos ahorra reinventar la rueda y asegura que no falte ninguna etiqueta esencial. *(Alternativa sólida: el popular `astro-seo` de Jonas).*
2. **`astro-seo-schema`**: Muy útil como base. Sin embargo, dado que queremos añadir señales **GEO/AEO** muy específicas (como `SpeakableSpecification` o enlazar entidades), usaremos este paquete si nos permite inyectar campos raw, o construiremos nuestro propio componente `<JsonLd>` si necesitamos más libertad para la IA.
3. **`astro-gtm`**: Ideal. Un blog enfocado a SEO/Marketing debe tener Google Tag Manager preconfigurado. Aporta muchísimo valor a usuarios corporativos.

### 🟡 Útiles, pero con consideraciones
1. **`astro-ui-avatars`**: Está bien como "fallback" (plan B) si un autor no tiene foto. Pero ojo: para el **E-E-A-T** (Experiencia, Expertise, Autoridad, Confianza), Google y las IAs valoran infinitamente más fotos de perfil reales de personas. Lo usaremos solo como *placeholder*.
2. **`astro-svg-loaders`**: Bien para dar un toque premium durante transiciones pesadas, pero al ser un sitio estático (SSG), la carga debería ser instantánea. Lo usaremos con moderación.

### 🔴 Descartados (No recomendables para este proyecto)
1. **`astro-purgecss`**: ¡No lo necesitas! Tailwind CSS (especialmente v4 y su motor JIT) ya hace *purging* (eliminación de CSS no usado) por defecto durante el proceso de build. Añadir PurgeCSS encima de Tailwind puede causar conflictos y romper estilos dinámicos innecesariamente.
2. **`astro-useragent`**: Analizar el User-Agent del navegador se usa normalmente en Server-Side Rendering (SSR) para renderizar contenido distinto según si es móvil o PC. Como nuestro blog será estático (SSG) para máxima velocidad, el responsive debe hacerse siempre por CSS (`@media queries`), no por User-Agent. Afectaría negativamente a la caché y al SEO.

### 🚀 Nuevos Descubrimientos (Integraciones Top 2024+)
Tras investigar el ecosistema actual de Astro, he encontrado dos paquetes que son un **MUST** absoluto para un template SEO Premium:
1. **`astro-og-canvas`**: ¡Esto es oro! Permite auto-generar imágenes para redes sociales (Open Graph y Twitter Cards) de forma dinámica usando código. Cuando un usuario comparta un post en Twitter/LinkedIn, se verá una imagen con el título del post y el autor generada automáticamente. Te ahorra tener que diseñar una imagen por cada post.
2. **`@playform/compress`**: Una integración que minifica agresivamente el HTML, CSS, SVG y JavaScript resultante tras el *build*. Es el toque final mágico para exprimir hasta el último milisegundo de los Core Web Vitals.

---

## Verification Plan

### Automated
- `npx lighthouse` en la demo desplegada → las 4 categorías deben dar **100/100**
- Validar Schema con [Google Rich Results Test](https://search.google.com/test/rich-results)
- Validar RSS con [W3C Feed Validator](https://validator.w3.org/feed/)

### Manual
- Navegar la demo completa en móvil y escritorio
- Verificar que los View Transitions funcionan sin glitches
- Comprobar dark/light mode en todos los componentes
- Subir al portal de Astro y a Vercel Templates
