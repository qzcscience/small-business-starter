/**
 * ─────────────────────────────────────────────────────────────────────────────
 * IMAGE CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────────
 * This is the single file to edit when swapping placeholder images for a
 * client's real photos. Astro will automatically optimize every local image
 * at build time (WebP/AVIF conversion, srcset generation, CLS-safe dimensions).
 *
 * HOW TO ADD YOUR OWN IMAGES
 * ──────────────────────────
 * 1. Drop your image file into the correct folder under src/assets/images/
 * 2. Uncomment the matching import below and update the filename
 * 3. Export it — the component picks it up automatically
 *
 * Supported formats: .jpg  .jpeg  .png  .webp  .avif
 *
 * FOLDER STRUCTURE
 * ────────────────
 *   src/assets/images/
 *     hero/      ← one image used in the homepage Hero section
 *     about/     ← one image used in the About section and About page
 *     gallery/   ← all project photos (drop any number of files here)
 *
 * Until you add local files the components fall back to first-party Wayeal
 * assets so production builds do not depend on third-party placeholder hosts.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { ImageMetadata } from 'astro';
import sfj231Image from '../assets/images/products/SFJ-231/Wayeal SFJ-231.png';
import heliumRecoveryImage from '../assets/images/products/helium-recovery/wayeal-helium-recovery-system.png';
import condenserSystemImage from '../assets/images/products/vacuum-chamber/sfz-344-car-ac-condenser/sfz-344-condenser-system-front-left.png';
import condenserLayoutImage from '../assets/images/products/vacuum-chamber/sfz-344-car-ac-condenser/sfz-344-condenser-system-top-layout.png';
import snifferProbeImage from '../assets/images/products/accessories/sniffer-probe.png';

// ── Hero ──────────────────────────────────────────────────────────────────────
// Recommended: landscape image, at least 1600 × 1200 px
//
// To use your own:
//   1. Drop your file into src/assets/images/hero/
//   2. Uncomment and update the line below
//   3. Replace the heroImage export at the bottom of this section
//
import heroImageSrc from '../assets/images/hero/hero-products-collage.png';
export const heroImage: ImageMetadata = heroImageSrc;

// ── Logo ─────────────────────────────────────────────────────────────────────
// Recommended: transparent PNG or square/landscape logo, at least 200 × 80 px
//
// To use your own:
//   1. Drop your file into src/assets/images/logo/
//   2. Uncomment and update the line below
//   3. Replace the logoImage export at the bottom of this section
//
import logoImageSrc from '../assets/images/logo/logo.png';
export const logoImage: ImageMetadata = logoImageSrc;

// ── About ─────────────────────────────────────────────────────────────────────
// Recommended: portrait or square image of your team/job site, at least 900 × 700 px
//
// To use your own:
//   1. Drop your file into src/assets/images/about/
//   2. Uncomment and update the line below
//   3. Replace the aboutImage export at the bottom of this section
//
import aboutImageSrc from '../assets/images/company-video/poster.jpg';
export const aboutImage: ImageMetadata = aboutImageSrc;

// ── Gallery — auto-discovered ─────────────────────────────────────────────────
// Drop any number of image files into src/assets/images/gallery/ and they will
// appear in the gallery automatically — no code changes needed.
//
// The file name becomes the alt text:
//   vacuum-chamber-system.jpg → "Vacuum Chamber System"
//   sfj-231-leak-detector.jpg → "Sfj 231 Leak Detector"
//
// Recommended: landscape images, at least 800 × 600 px each.
// Aim for consistent proportions (4:3 works best with the gallery grid).

export interface GalleryImage {
  src: ImageMetadata | string;
  alt: string;
}

const discovered = Object.entries(
  import.meta.glob<{ default: ImageMetadata }>(
    '../assets/images/gallery/*.{jpg,jpeg,png,webp,avif}',
    { eager: true },
  ),
).map(([path, mod]): GalleryImage => ({
  src: mod.default,
  alt: path
    .split('/').pop()!
    .replace(/\.[^.]+$/, '')        // strip extension
    .replace(/[-_]/g, ' ')          // hyphens/underscores → spaces
    .replace(/\b\w/g, (c) => c.toUpperCase()), // Title Case
}));

// First-party Wayeal fallbacks used when the gallery folder is empty.
// Replace by adding your own images — the fallbacks are removed automatically.
const placeholders: GalleryImage[] = [
  { src: condenserSystemImage, alt: 'SFZ-344 vacuum chamber helium leak detection system for sealed components' },
  { src: sfj231Image, alt: 'SFJ-231 helium mass spectrometer leak detector for production quality control' },
  { src: condenserLayoutImage, alt: 'Vacuum chamber leak testing workflow with chamber layout and tooling' },
  { src: heliumRecoveryImage, alt: 'Wayeal helium recovery system for leak testing production lines' },
  { src: heroImageSrc, alt: 'Wayeal leak testing systems for batteries HVAC automotive and power equipment' },
  { src: snifferProbeImage, alt: 'Sniffer probe accessory for Wayeal industrial helium leak detection equipment' },
];

export const galleryImages: GalleryImage[] = discovered.length > 0 ? discovered : placeholders;
