import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')
const templatePath = path.join(distDir, 'index.html')

const routes = [
  '/',
  '/services/creation-site-web',
  '/services/boutique-en-ligne',
  '/services/performance-vitesse',
  '/services/seo-technique',
  '/services/maintenance-support',
  '/faq',
]

const template = fs.readFileSync(templatePath, 'utf-8')

// Load the SSR bundle built by vite (ESM, server build).
// pathToFileURL is required on Windows — bare Win32 paths aren't valid ESM specifiers.
const { render } = await import(
  pathToFileURL(path.join(distDir, 'server', 'entry-server.js')).href
)

for (const url of routes) {
  const { html: appHtml, helmet } = render(url)

  // Build head tags from react-helmet-async
  const helmetTags = [
    helmet?.title?.toString() ?? '',
    helmet?.meta?.toString() ?? '',
    helmet?.link?.toString() ?? '',
    helmet?.script?.toString() ?? '',
  ].join('\n    ')

  // Replace the placeholder comment in index.html:
  //   <!--ssr-head-->  → injected helmet tags
  //   <div id="root"></div> → pre-rendered markup
  const output = template
    .replace('<!--ssr-head-->', helmetTags)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  // Write each route to its own directory/index.html
  const outDir = url === '/' ? distDir : path.join(distDir, url)
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.html'), output)

  console.log(`Prerendered: ${url}`)
}

console.log('Static site generation complete.')
