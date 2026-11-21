import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Exact brand SVG matching the Header logo
// Gradient: #1B40DF -> #2453FF -> #4779FF
// Symbol: 3 rounded squares + 1 circle (Raven's matrix cognitive assessment pattern)
const brandSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="brandGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1B40DF" />
      <stop offset="50%" stop-color="#2453FF" />
      <stop offset="100%" stop-color="#4779FF" />
    </linearGradient>
  </defs>
  <!-- Squircle rounded background -->
  <rect width="512" height="512" rx="112" fill="url(#brandGrad)" />
  <!-- Cognitive 2x2 grid symbol -->
  <g transform="translate(106, 106) scale(12.5)" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <rect x="3" y="3" width="7" height="7" rx="1.6" />
    <rect x="14" y="3" width="7" height="7" rx="1.6" />
    <rect x="3" y="14" width="7" height="7" rx="1.6" />
    <circle cx="17.5" cy="17.5" r="3.5" />
  </g>
</svg>`;

// Helper function to build multi-resolution ICO file from PNG buffers
function createIco(pngImages) {
  const count = pngImages.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + count * dirEntrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // 1 = ICO
  header.writeUInt16LE(count, 4); // Number of images

  const entries = [];
  const datas = [];

  for (const img of pngImages) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8); // Size of image data
    entry.writeUInt32LE(offset, 12); // Offset to image data

    entries.push(entry);
    datas.push(img.buffer);
    offset += img.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...datas]);
}

async function generate() {
  console.log('Generating website favicons and app icons...');

  const svgBuffer = Buffer.from(brandSvg, 'utf-8');

  // 1. Save SVG icons
  fs.writeFileSync('src/app/icon.svg', brandSvg, 'utf-8');
  fs.writeFileSync('public/icon.svg', brandSvg, 'utf-8');
  fs.writeFileSync('public/favicon.svg', brandSvg, 'utf-8');
  console.log('✔ Generated icon.svg and public/favicon.svg');

  // 2. Generate PNG sizes
  const sizes = [16, 32, 48, 180, 192, 512];
  const pngBuffers = {};

  for (const size of sizes) {
    pngBuffers[size] = await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toBuffer();
    console.log(`✔ Generated ${size}x${size} PNG`);
  }

  // 3. Save standard public PNGs
  fs.writeFileSync('public/favicon-16x16.png', pngBuffers[16]);
  fs.writeFileSync('public/favicon-32x32.png', pngBuffers[32]);
  fs.writeFileSync('public/favicon-48x48.png', pngBuffers[48]);
  fs.writeFileSync('public/apple-touch-icon.png', pngBuffers[180]);
  fs.writeFileSync('src/app/apple-icon.png', pngBuffers[180]);
  fs.writeFileSync('public/android-chrome-192x192.png', pngBuffers[192]);
  fs.writeFileSync('public/android-chrome-512x512.png', pngBuffers[512]);

  // 4. Create multi-resolution ICO file (16x16, 32x32, 48x48)
  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: pngBuffers[16] },
    { width: 32, height: 32, buffer: pngBuffers[32] },
    { width: 48, height: 48, buffer: pngBuffers[48] },
  ]);

  fs.writeFileSync('src/app/favicon.ico', icoBuffer);
  fs.writeFileSync('public/favicon.ico', icoBuffer);
  console.log('✔ Generated multi-size favicon.ico for src/app and public/');

  // 5. Generate site manifest for PWA / Android
  const manifest = {
    name: 'IQ Test – Reasoning Assessment',
    short_name: 'IQ Test',
    description: 'Free online reasoning tests and cognitive assessment tools.',
    start_url: '/',
    display: 'standalone',
    background_color: '#07152F',
    theme_color: '#2453FF',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };

  fs.writeFileSync('public/site.webmanifest', JSON.stringify(manifest, null, 2), 'utf-8');
  console.log('✔ Generated public/site.webmanifest');

  console.log('\nAll favicons generated successfully!');
}

generate().catch((err) => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});

