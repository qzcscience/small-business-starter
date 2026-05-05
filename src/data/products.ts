import { existsSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductApplication {
  name: string;
  image?: string;
  href?: string;
  description?: string;
  workpieces?: string[];
}

export interface ProductDownload {
  label: string;
  href: string;
  fileName: string;
  extension: string;
}

export interface ProductSpecSection {
  title: string;
  specs: ProductSpec[];
}

export interface Product {
  slug: string;
  pageHref: string;
  name: string;
  title: string;
  description: string;
  overview?: string;
  benefits?: string[];
  images: { src: string; alt?: string }[];
  videoSrc?: string;
  specs: ProductSpec[];
  specSections?: ProductSpecSection[];
  applications: ProductApplication[];
  downloads: ProductDownload[];
  ctaLabel: string;
  ctaHref: string;
}

const productImageModules = import.meta.glob<string>(
  '../assets/images/products/**/*.{avif,gif,jpeg,jpg,png,svg,webp}',
  {
    eager: true,
    import: 'default',
    query: '?url',
  },
);

function getProductImages(name: string, fallback: Product['images'] = []): Product['images'] {
  const images = Object.entries(productImageModules)
    .filter(([path]) => path.includes(`/products/${name}/`))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([path, src]) => {
      const fileName = path.split('/').pop() || 'Product image';
      const alt = fileName.replace(/\.[^.]+$/, '');

      return { src, alt };
    });

  return images.length > 0 ? images : fallback;
}

const downloadableExtensions = new Set([
  '.pdf',
  '.doc',
  '.docx',
  '.xls',
  '.xlsx',
  '.ppt',
  '.pptx',
  '.zip',
  '.rar',
  '.7z',
  '.csv',
  '.txt',
]);

function formatDownloadLabel(fileName: string) {
  const nameWithoutExtension = fileName.replace(/\.[^.]+$/, '');

  return nameWithoutExtension.replace(/[-_]+/g, ' ').trim() || fileName;
}

function getProductDownloads(name: string): ProductDownload[] {
  const productDir = path.join(process.cwd(), 'public', 'downloads', 'products', name);

  if (!existsSync(productDir)) return [];

  return readdirSync(productDir)
    .filter((fileName) => {
      const filePath = path.join(productDir, fileName);
      const extension = path.extname(fileName).toLowerCase();

      return statSync(filePath).isFile() && downloadableExtensions.has(extension);
    })
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((fileName) => {
      const extension = path.extname(fileName).replace('.', '').toUpperCase();
      const href = ['downloads', 'products', name, fileName].map(encodeURIComponent).join('/');

      return {
        label: formatDownloadLabel(fileName),
        href: `/${href}`,
        fileName,
        extension,
      };
    });
}

const sfj231Images = getProductImages('SFJ-231', [
  { src: 'https://picsum.photos/600/450?random=11', alt: 'SFJ-231 mobile helium leak detector front view' },
  { src: 'https://picsum.photos/600/450?random=12', alt: 'SFJ-231 touch screen control panel' },
  { src: 'https://picsum.photos/600/450?random=13', alt: 'SFJ-231 helium leak detector side view' },
  { src: 'https://picsum.photos/600/450?random=14', alt: 'SFJ-231 leak testing workflow' },
]);

export const products: Record<string, Product> = {
  'helium-leak-detector': {
    slug: 'helium-leak-detector',
    pageHref: '/products/helium-leak-detector-SFJ-231',
    name: 'SFJ-231',
    title: 'Helium Leak Detector SFJ-231',
    description:
      'The Wayeal SFJ-231 is a mobile helium mass spectrometer leak detector for high-sensitivity vacuum and sniffer testing, with fast response, automatic helium background clearing, touch-screen operation, and production-ready communication interfaces.',
    overview:
      'SFJ-231 is designed for manufacturers and quality teams that need a movable helium leak detector for both vacuum-mode and sniffer-mode inspection. It combines a 16 m³/h backing pump, high helium pumping speed, a 7-inch touch screen, and flexible data interfaces for production, maintenance, and laboratory workflows.',
    benefits: [
      'Powerful rotary vane pump with 16 m³/h backing pump capacity',
      'German turbo molecular pump for fast helium pumping speed',
      'Intelligent 7-inch LCD touch screen for operator-friendly control',
      'USB and bus interfaces for flexible data communication',
      'Multiple leak detection methods with spray gun and sniffer probe workflows',
      'Automatic helium background clearing for reliable high-sensitivity testing',
    ],
    images: sfj231Images,
    videoSrc: 'https://www.youtube-nocookie.com/embed/dZR7PMBhHFc?rel=0',
    specs: [
      { label: 'Vacuum mode', value: '5.0×10⁻¹³ Pa·m³/s' },
      { label: 'Sniffer mode', value: '5.0×10⁻⁹ Pa·m³/s' },
      { label: 'Response / startup', value: '<1 s / ≤2 min' },
      { label: 'Integration', value: 'I/O, RS232/485, MES, USB' },
    ],
    specSections: [
      {
        title: 'Performance Indicators',
        specs: [
          { label: 'Minimum detectable leak rate, vacuum mode', value: '5.0×10⁻¹³ Pa·m³/s' },
          { label: 'Minimum detectable leak rate, sniffer mode', value: '5.0×10⁻⁹ Pa·m³/s' },
          { label: 'Response time', value: '<1 s' },
          { label: 'Startup time', value: '≤2 min' },
          { label: 'Inlet pressure', value: 'Gross: 1500 Pa; Fine: 200 Pa; Ultra: 40 Pa' },
          { label: 'Pumping speed during evacuation', value: '16 m³/h' },
          { label: 'Pumping speed for He', value: '2.5 l/s' },
          { label: 'Detectable masses', value: '2, 3, 4 (H2, He3, He4)' },
        ],
      },
      {
        title: 'Basic Configuration',
        specs: [
          { label: 'HMI', value: '7-inch LCD touch screen' },
          { label: 'Ion source', value: '2 pcs, iridium-coated yttrium oxide, automatic switching' },
          { label: 'Dimensions (W × D × H)', value: '645 × 678 × 965 mm' },
          { label: 'Weight', value: '110 kg' },
          { label: 'Inlet flange', value: 'DN25 KF' },
          { label: 'Power supply', value: 'AC220 V, 50/60 Hz' },
          { label: 'Operating temperature', value: '0-40°C' },
          { label: 'Display language', value: 'Chinese and English' },
          { label: 'Interface', value: 'I/O, RS232/485, MES, USB' },
        ],
      },
    ],
    applications: [
      {
        name: 'Lithium-ion batteries',
        description: 'High-sensitivity inspection for sealed battery components and thermal management parts.',
        workpieces: ['Battery cells', 'Cell covers', 'Battery modules', 'Battery pack housings', 'Battery cooling plates'],
      },
      {
        name: 'Automotive thermal management',
        description: 'Vacuum and sniffer leak testing for pressure-bearing and refrigerant-side vehicle components.',
        workpieces: ['Battery cooling plates', 'Automotive heat exchangers', 'Refrigerant lines', 'Thermal management assemblies'],
      },
      {
        name: 'HVAC and refrigeration',
        description: 'Tracer-gas leak detection for refrigerant circuits and brazed heat-transfer assemblies.',
        workpieces: ['Evaporator coils', 'Condenser coils', 'Heat exchangers', 'Compressor shells', 'Refrigerant circuits'],
      },
      {
        name: 'Server liquid cooling',
        description: 'Leak testing for coolant loops and sealed assemblies used in data-center liquid cooling systems.',
        workpieces: ['Cold plates', 'Liquid cooling manifolds', 'CDU heat exchangers', 'Quick disconnect couplings'],
      },
      {
        name: 'Electric power equipment',
        description: 'Inspection support for sealed gas, oil-filled, and vacuum components in power equipment.',
        workpieces: ['GIS enclosures', 'SF6 switchgear tanks', 'Transformer tanks', 'Sealed pole units', 'Vacuum interrupters'],
      },
      {
        name: 'Semiconductor and electronics',
        description: 'Sensitive leak testing for process equipment, precision enclosures, and sealed electronic assemblies.',
        workpieces: ['Semiconductor packages', 'Vacuum process chambers', 'Connector housings', 'Precision metal enclosures'],
      },
    ],
    get downloads() {
      return getProductDownloads('SFJ-231');
    },
    ctaLabel: 'Get a Free Quote',
    ctaHref: '/contact',
  },
};
