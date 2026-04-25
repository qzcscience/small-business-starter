import { existsSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductApplication {
  name: string;
  image: string;
  href?: string;
}

export interface ProductDownload {
  label: string;
  href: string;
  fileName: string;
  extension: string;
}

export interface Product {
  slug: string;
  pageHref: string;
  name: string;
  title: string;
  description: string;
  images: { src: string; alt?: string }[];
  videoSrc?: string;
  specs: ProductSpec[];
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
  { src: 'https://picsum.photos/600/450?random=11', alt: 'HM-400 正面视图' },
  { src: 'https://picsum.photos/600/450?random=12', alt: 'HM-400 操作面板' },
  { src: 'https://picsum.photos/600/450?random=13', alt: 'HM-400 侧面视图' },
  { src: 'https://picsum.photos/600/450?random=14', alt: 'HM-400 检测中' },
]);

export const products: Record<string, Product> = {
  'helium-leak-detector': {
    slug: 'helium-leak-detector',
    pageHref: '/products/helium-leak-detector-SFJ-231',
    name: 'SFJ-231',
    title: 'Helium Leak Detector SFJ-231',
    description: 'The Wayeal SFJ-231 is a state-of-the-art helium leak detector designed for ultra-high sensitivity and fast response.',
    images: sfj231Images,
    videoSrc: 'https://www.youtube.com/embed/dZR7PMBhHFc',
    specs: [
      { label: 'Ultra-high sensitivity', value: 'Minimum 5×10⁻¹³ Pa・m³/s' },
      { label: 'Ultra-fast response', value: 'Fully self-developed algorithm' },
      { label: 'Core parts', value: 'Self production' },
      { label: 'Certification', value: 'CE Certified' },
    ],
    applications: [
      { name: '电子与半导体', image: 'https://picsum.photos/200/200?random=20' },
      { name: '航空航天', image: 'https://picsum.photos/200/200?random=21' },
      { name: '核工业', image: 'https://picsum.photos/200/200?random=22' },
      { name: '金属制造', image: 'https://picsum.photos/200/200?random=23' },
      { name: '空调制冷', image: 'https://picsum.photos/200/200?random=24' },
      { name: '能源行业', image: 'https://picsum.photos/200/200?random=25' },
      { name: '汽车行业', image: 'https://picsum.photos/200/200?random=26' },
      { name: '医疗器械', image: 'https://picsum.photos/200/200?random=27' },
    ],
    get downloads() {
      return getProductDownloads('SFJ-231');
    },
    ctaLabel: 'Get a Free Quote',
    ctaHref: '/contact',
  },
};
