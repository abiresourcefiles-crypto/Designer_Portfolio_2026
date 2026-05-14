import sharp from 'sharp';
import { readdirSync, statSync, renameSync, existsSync } from 'fs';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';

const publicDir = join(process.cwd(), 'public');
const MAX_WIDTH = 1600;
const QUALITY = 82;

const files = readdirSync(publicDir).filter(f => /\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i.test(f));

let totalSaved = 0;

for (const file of files) {
  const inputPath = join(publicDir, file);
  const ext = extname(file).toLowerCase();
  const base = basename(file, extname(file));
  const outputPath = join(publicDir, base + '_compressed' + ext);
  const stat = statSync(inputPath);
  const originalSize = stat.size;

  try {
    const pipeline = sharp(inputPath).rotate(); // auto-rotate EXIF

    if (ext === '.png') {
      await pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true }).png({ quality: QUALITY, compressionLevel: 9 }).toFile(outputPath);
    } else {
      await pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true }).jpeg({ quality: QUALITY, mozjpeg: true }).toFile(outputPath);
    }

    const newStat = statSync(outputPath);
    const newSize = newStat.size;
    const saved = originalSize - newSize;
    totalSaved += saved;

    // Replace original
    renameSync(outputPath, inputPath);
    console.log(`✓ ${file}: ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB (saved ${(saved / 1024).toFixed(0)}KB)`);
  } catch (err) {
    console.error(`✗ ${file}: ${err.message}`);
    if (existsSync(outputPath)) {
      try { renameSync(outputPath, inputPath); } catch {}
    }
  }
}

console.log(`\n🎉 Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
