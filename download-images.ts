import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const ASSETS_DIR = path.join(process.cwd(), 'src', 'assets');
if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

const images = [
  {
    name: 'logo.webp',
    url: 'https://firebasestorage.googleapis.com/v0/b/aldmc-e447e.firebasestorage.app/o/DMC%20%EC%8B%9C%EA%B7%B8%EB%8B%88%EC%B2%98(%EC%83%81%ED%95%98)%20KOR%20white.png?alt=media',
    width: 400
  },
  {
    name: 'home-hero-bg.webp',
    url: 'https://plus.unsplash.com/premium_photo-1672423154405-5fd922c11af2?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0',
    width: 1920
  },
  {
    name: 'intro-1.webp',
    url: 'https://firebasestorage.googleapis.com/v0/b/company-homepage-28347.firebasestorage.app/o/%EB%8C%80%EA%B5%AC%EA%B3%B5%EC%9E%A5.JPG?alt=media&token=530a1c33-4075-4f33-a6e2-cf01939f5b8b',
    width: 1200
  },
  {
    name: 'intro-2.webp',
    url: 'https://firebasestorage.googleapis.com/v0/b/company-homepage-28347.firebasestorage.app/o/%EC%B0%BD%EB%85%95%EA%B3%B5%EC%9E%A5.png?alt=media&token=124af372-5d38-4717-a191-546d04907f48',
    width: 1200
  },
  {
    name: 'philosophy.webp',
    url: 'https://firebasestorage.googleapis.com/v0/b/company-homepage-28347.firebasestorage.app/o/site-assets%2F1769752363492_%EA%B8%88%ED%98%95.jpg?alt=media&token=d93ff708-ffe1-4a7a-ab7e-0469a2b71f61',
    width: 1200
  }
];

async function downloadAndOptimize() {
  for (const img of images) {
    try {
      console.log(`Downloading ${img.name}...`);
      const response = await fetch(img.url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      
      await sharp(buffer)
        .resize({ width: img.width, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(path.join(ASSETS_DIR, img.name));
      console.log(`Saved ${img.name}`);
    } catch (err) {
      console.error(`Failed to process ${img.name}:`, err.message);
      console.log(`Generating fallback image for ${img.name}...`);
      await sharp({
        create: {
          width: img.width,
          height: Math.floor(img.width * 0.6),
          channels: 4,
          background: { r: 7, g: 29, b: 73, alpha: 1 } 
        }
      })
      .webp()
      .toFile(path.join(ASSETS_DIR, img.name));
    }
  }
}

downloadAndOptimize();
