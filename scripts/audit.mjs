import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

// List of pages to audit
const pages = [
  { name: 'Home (EN)', url: 'http://localhost:4321/' },
  { name: 'Home (ES)', url: 'http://localhost:4321/es/' },
  { name: 'Blog (EN)', url: 'http://localhost:4321/blog/' },
  { name: 'Blog Post (EN)', url: 'http://localhost:4321/blog/getting-started/' },
  { name: 'Blog Post (ES)', url: 'http://localhost:4321/es/blog/getting-started/' },
  { name: 'Pricing (ES)', url: 'http://localhost:4321/es/pricing/' },
  { name: 'Signup (ES)', url: 'http://localhost:4321/es/signup/' },
  { name: 'Case Study (ES)', url: 'http://localhost:4321/es/case-studies/techcorp-growth/' }
];

console.log('🚀 Iniciando auditoría global de Lighthouse...');
console.log('Asegúrate de que tienes el servidor de producción corriendo en http://localhost:4321 (usando: npm run preview)\n');

const results = [];

for (const page of pages) {
  console.log(`Auditando: ${page.name} (${page.url})...`);
  try {
    // Run lighthouse in headless mode
    execSync(
      `npx -y lighthouse "${page.url}" --chrome-flags="--headless" --output json --output-path ./lh-temp.json --quiet`,
      { stdio: 'ignore' }
    );

    const report = JSON.parse(readFileSync('./lh-temp.json', 'utf8'));
    
    results.push({
      Page: page.name,
      Performance: Math.round(report.categories.performance.score * 100),
      Accessibility: Math.round(report.categories.accessibility.score * 100),
      'Best Practices': Math.round(report.categories['best-practices'].score * 100),
      SEO: Math.round(report.categories.seo.score * 100),
    });
  } catch (error) {
    console.error(`❌ Error auditando ${page.name}. ¿Está el servidor activo?`);
  }
}

console.log('\n✅ ¡Auditoría completada!\n');
console.table(results);

// Clean up
try {
  execSync('rm ./lh-temp.json');
} catch (e) {}
