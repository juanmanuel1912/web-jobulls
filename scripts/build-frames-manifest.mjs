import { readdir, writeFile } from 'fs/promises'
import { join, extname } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const framesDir = join(__dirname, '..', 'public', 'frames')
const manifestPath = join(framesDir, 'manifest.json')

const VALID_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp'])

/**
 * Extracts the trailing number from a filename (before extension).
 * e.g. "frame_042.jpg" → 42
 *      "photo.jpg"     → Infinity (sorts to end)
 */
function extractNumber(filename) {
  const match = filename.match(/(\d+)(?=\.[^.]+$)/)
  return match ? parseInt(match[1], 10) : Infinity
}

async function buildManifest() {
  let files
  try {
    files = await readdir(framesDir)
  } catch (err) {
    console.error(`[frames-manifest] Could not read directory: ${framesDir}`)
    console.error(err.message)
    process.exit(1)
  }

  const imageFiles = files.filter((f) => {
    const ext = extname(f).toLowerCase()
    return VALID_EXTENSIONS.has(ext) && f !== 'manifest.json'
  })

  imageFiles.sort((a, b) => {
    const na = extractNumber(a)
    const nb = extractNumber(b)
    if (na !== nb) return na - nb
    return a.localeCompare(b)
  })

  const manifest = imageFiles.map((f) => `/frames/${f}`)

  await writeFile(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8')

  console.log(`[frames-manifest] ✓ Generated manifest with ${manifest.length} frames → public/frames/manifest.json`)
}

buildManifest()
