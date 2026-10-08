import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('dist directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

const templatePath = path.join(distDir, 'index.html');
const template = fs.readFileSync(templatePath, 'utf-8');

const routes = [
  {
    path: 'pricing',
    title: 'Pricing Plans — KitchenWatch',
    desc: 'Transparent pricing for 1 to 10+ restaurant outlets. Free 14-day trial. Works alongside your existing POS.',
  },
  {
    path: 'about',
    title: 'About Us — KitchenWatch',
    desc: 'Built to fix restaurant inventory chaos across India. Floor speed first, zero employee training.',
  },
  {
    path: 'contact',
    title: 'Contact & Book Demo — KitchenWatch',
    desc: 'Book a 15-minute live screen share demo or chat directly with our founder support on WhatsApp.',
  },
  {
    path: 'privacy',
    title: 'Privacy Policy — KitchenWatch',
    desc: 'Operational privacy policy outline for KitchenWatch inventory control system.',
  },
  {
    path: 'terms',
    title: 'Terms of Service — KitchenWatch',
    desc: 'Terms of service and subscription details for KitchenWatch.',
  },
  {
    path: 'refund-policy',
    title: 'Cancellation & Refund Policy — KitchenWatch',
    desc: 'Cancellation terms and 14-day free trial guarantee for KitchenWatch.',
  },
];

console.log('Generating static prerender routes for SEO and static hosts...');

for (const route of routes) {
  const routeDir = path.join(distDir, route.path);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  let html = template;
  html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
    `<meta name="description" content="${route.desc}" />`
  );

  fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf-8');
  console.log(`✓ /${route.path}/index.html`);
}

// 404 page
fs.writeFileSync(path.join(distDir, '404.html'), template, 'utf-8');
console.log('✓ /404.html');

console.log('Static route prerendering complete.');
