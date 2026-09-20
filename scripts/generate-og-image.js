/**
 * Generates public/og-image.png (1200x630) — the branded social share card.
 * Run: node scripts/generate-og-image.js
 */
const sharp = require('sharp');
const path = require('path');

const W = 1200;
const H = 630;
const NAVY = '#0B192C';
const NAVY_MID = '#152B4D';
const GOLD = '#FFB200';
const GOLD_DIM = '#B37A0A';
const BLUE = '#2E5C9E';

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${NAVY}"/>
      <stop offset="0.55" stop-color="${NAVY_MID}"/>
      <stop offset="1" stop-color="${NAVY}"/>
    </linearGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${GOLD}"/>
      <stop offset="1" stop-color="${GOLD_DIM}"/>
    </linearGradient>
    <radialGradient id="glowGold" cx="0.78" cy="0.1" r="0.6">
      <stop offset="0" stop-color="${GOLD}" stop-opacity="0.16"/>
      <stop offset="1" stop-color="${GOLD}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowBlue" cx="0.08" cy="0.95" r="0.65">
      <stop offset="0" stop-color="${BLUE}" stop-opacity="0.25"/>
      <stop offset="1" stop-color="${BLUE}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glowGold)"/>
  <rect width="${W}" height="${H}" fill="url(#glowBlue)"/>

  <!-- water waves along the bottom -->
  <path d="M0,520 C200,485 380,555 600,522 C820,490 1000,556 1200,520 L1200,630 L0,630 Z"
        fill="${BLUE}" fill-opacity="0.14"/>
  <path d="M0,555 C220,520 420,585 640,556 C860,528 1040,588 1200,556 L1200,630 L0,630 Z"
        fill="${GOLD}" fill-opacity="0.10"/>
  <path d="M0,555 C220,520 420,585 640,556 C860,528 1040,588 1200,556"
        fill="none" stroke="#FFFFFF" stroke-opacity="0.25" stroke-width="2.5"/>

  <!-- gold accent bar -->
  <rect x="0" y="0" width="${W}" height="10" fill="url(#gold)"/>
  <rect x="0" y="${H - 10}" width="${W}" height="10" fill="url(#gold)"/>

  <!-- watermark drops -->
  <circle cx="1020" cy="180" r="150" fill="${BLUE}" fill-opacity="0.08"/>
  <circle cx="1060" cy="140" r="70" fill="${GOLD}" fill-opacity="0.07"/>

  <!-- title -->
  <text x="80" y="268" font-family="DejaVu Sans, Arial, Helvetica, sans-serif" font-size="74" font-weight="800" fill="#FFFFFF">Ogha Power Solutions</text>
  <text x="80" y="352" font-family="DejaVu Sans, Arial, Helvetica, sans-serif" font-size="33" font-weight="600" fill="${GOLD}">RO Control Panels &amp; Water Vending Machines</text>
  <text x="80" y="412" font-family="DejaVu Sans, Arial, Helvetica, sans-serif" font-size="26" fill="#B8C4D8">Manufacturer · Hyderabad, India</text>

  <!-- logo bottom-left -->
  <g>
    <image href="__LOGO_HREF__" x="80" y="${H - 150}" width="110" height="110" preserveAspectRatio="xMidYMid meet"/>
  </g>
</svg>`;

(async () => {
  const logoPath = path.join(__dirname, '..', 'public', 'ogha-logo.png');
  const logo = await sharp(logoPath).resize(110, 110, { fit: 'inside' }).png().toBuffer();

  const logoHref =
    'data:image/png;base64,' + logo.toString('base64');
  const finalSvg = svg.replace('__LOGO_HREF__', logoHref);

  await sharp(Buffer.from(finalSvg))
    .png({ compressionLevel: 9 })
    .toFile(path.join(__dirname, '..', 'public', 'og-image.png'));

  console.log('OK: public/og-image.png written (1200x630)');
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
