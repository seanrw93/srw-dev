import { writeFile, mkdir } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, '..', 'public', 'images', 'tech')

const LOGOS = [
  { url: 'https://cdn.simpleicons.org/react',       file: 'react.svg',       color: '#61DAFB', name: 'React' },
  { url: 'https://cdn.simpleicons.org/nextdotjs',   file: 'nextjs.svg',      color: '#1a1a1a', name: 'Next.js' },
  { url: 'https://cdn.simpleicons.org/typescript',  file: 'typescript.svg',  color: '#3178C6', name: 'TypeScript' },
  { url: 'https://cdn.simpleicons.org/tailwindcss', file: 'tailwind.svg',    color: '#06B6D4', name: 'Tailwind CSS' },
  { url: 'https://cdn.simpleicons.org/figma',       file: 'figma.svg',       color: '#F24E1E', name: 'Figma' },
  { url: 'https://cdn.simpleicons.org/wordpress',   file: 'wordpress.svg',   color: '#21759B', name: 'WordPress' },
  { url: 'https://cdn.simpleicons.org/express',     file: 'express.svg',     color: '#1a1a1a', name: 'Express' },
  { url: 'https://cdn.simpleicons.org/html5',       file: 'html.svg',        color: '#E34F26', name: 'HTML' },
  { url: 'https://cdn.simpleicons.org/css',         file: 'css.svg',         color: '#1572B6', name: 'CSS' },
  { url: 'https://cdn.simpleicons.org/github',      file: 'github.svg',      color: '#1a1a1a', name: 'GitHub' },
]

const VERCEL_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <circle cx="12" cy="12" r="12" fill="#000000"/>
  <path d="M12 6.5l6 11H6z" fill="#ffffff"/>
</svg>`

await mkdir(OUT, { recursive: true })

await Promise.all(LOGOS.map(async ({ url, file, color, name }) => {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to fetch ${name}: ${res.status}`)
  let svg = await res.text()
  if (svg.match(/<svg[^>]*\sfill=/)) {
    svg = svg.replace(/(<svg[^>]*)\sfill="[^"]*"/, `$1 fill="${color}"`)
  } else {
    svg = svg.replace(/<svg /, `<svg fill="${color}" `)
  }
  await writeFile(join(OUT, file), svg, 'utf8')
  console.log(`✓ ${name} → ${file}`)
}))

await writeFile(join(OUT, 'vercel.svg'), VERCEL_SVG, 'utf8')
console.log('✓ Vercel → vercel.svg (custom)')

console.log('All logos saved to public/images/tech/')
