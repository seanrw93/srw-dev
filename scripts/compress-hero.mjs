import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const bannerDir = path.resolve(__dirname, '../public/images/banner')
const outDir = path.resolve(__dirname, '../public/images/banner-compressed')
fs.mkdirSync(outDir, { recursive: true })

const files = fs.readdirSync(bannerDir).filter(f => f.endsWith('.webp'))

for (const file of files) {
  const input = path.join(bannerDir, file)
  const output = path.join(outDir, file)
  const before = fs.statSync(input).size

  await sharp(input)
    .resize(600, 800, { fit: 'cover', withoutEnlargement: true })
    .webp({ quality: 72 })
    .toFile(output)

  const after = fs.statSync(output).size
  console.log(`${file}: ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB`)
}

console.log(`\nDone. Copy files from public/images/banner-compressed/ to public/images/banner/`)

console.log('Done.')
