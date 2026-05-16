import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { products } from './products';
import { VACUUM_CHAMBER_BASE_PATH, vacuumChamberApplications } from './vacuumChamber';

export interface VideoRelatedLink {
  label: string;
  href?: string;
}

export interface SiteVideo {
  videoId: string;
  title: string;
  description: string;
  embedUrl: string;
  watchUrl: string;
  relatedLinks: VideoRelatedLink[];
}

interface VideoDraft {
  videoId: string;
  title: string;
  description: string;
  relatedLinks: VideoRelatedLink[];
}

const youtubeUrlPattern =
  /https?:\/\/(?:www\.)?(?:youtube\.com|youtube-nocookie\.com|youtu\.be)[^\s"'<>)]*/g;

const scanRoots = ['src/pages', 'src/components', 'src/data', 'src/content/news'];
const scanExtensions = new Set(['.astro', '.ts', '.tsx', '.js', '.jsx', '.md', '.mdx', '.json']);

function isLikelyVideoId(value: string) {
  return /^[A-Za-z0-9_-]{6,}$/.test(value);
}

export function getYouTubeVideoId(value: string) {
  try {
    const url = new URL(value);
    const host = url.hostname.replace(/^www\./, '');

    if (host === 'youtu.be') {
      const id = url.pathname.split('/').filter(Boolean)[0];
      return id && isLikelyVideoId(id) ? id : undefined;
    }

    if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
      const watchId = url.searchParams.get('v');
      if (watchId && isLikelyVideoId(watchId)) return watchId;

      const [kind, id] = url.pathname.split('/').filter(Boolean);
      if ((kind === 'embed' || kind === 'shorts') && id && isLikelyVideoId(id)) {
        return id;
      }
    }
  } catch {
    return undefined;
  }

  return undefined;
}

function createEmbedUrl(videoId: string) {
  return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`;
}

function createWatchUrl(videoId: string) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

function addVideo(
  videos: Map<string, VideoDraft>,
  source: {
    videoSrc: string;
    title: string;
    description: string;
    relatedLink: VideoRelatedLink;
  },
) {
  const videoId = getYouTubeVideoId(source.videoSrc);
  if (!videoId) return;

  const existing = videos.get(videoId);

  if (!existing) {
    videos.set(videoId, {
      videoId,
      title: source.title,
      description: source.description,
      relatedLinks: [source.relatedLink],
    });
    return;
  }

  const linkKey = `${source.relatedLink.href || ''}:${source.relatedLink.label}`;
  const hasLink = existing.relatedLinks.some(
    (link) => `${link.href || ''}:${link.label}` === linkKey,
  );

  if (!hasLink) {
    existing.relatedLinks.push(source.relatedLink);
  }
}

function getFilesToScan(root: string): string[] {
  const absoluteRoot = path.join(process.cwd(), root);
  if (!existsSync(absoluteRoot)) return [];

  return readdirSync(absoluteRoot).flatMap((entry) => {
    const absolutePath = path.join(absoluteRoot, entry);
    const stat = statSync(absolutePath);

    if (stat.isDirectory()) {
      return getFilesToScan(path.join(root, entry));
    }

    if (!stat.isFile() || !scanExtensions.has(path.extname(entry))) {
      return [];
    }

    return [absolutePath];
  });
}

function sourcePathToRelatedLink(filePath: string): VideoRelatedLink {
  const relativePath = path.relative(process.cwd(), filePath).replaceAll(path.sep, '/');

  if (relativePath === 'src/pages/index.astro') {
    return { label: 'Home', href: '/' };
  }

  if (relativePath.startsWith('src/pages/')) {
    const routePath = relativePath
      .replace(/^src\/pages\//, '')
      .replace(/\.(astro|ts|tsx|js|jsx)$/, '')
      .replace(/\/index$/, '');

    if (!routePath.includes('[')) {
      return {
        label: routePath ? `/${routePath}` : 'Home',
        href: `/${routePath}`,
      };
    }
  }

  if (relativePath.startsWith('src/content/news/')) {
    return {
      label: `Content: ${path.basename(relativePath, path.extname(relativePath))}`,
    };
  }

  return { label: `Source: ${relativePath}` };
}

function addStructuredVideos(videos: Map<string, VideoDraft>) {
  addVideo(videos, {
    videoSrc: 'https://www.youtube-nocookie.com/embed/dZR7PMBhHFc?rel=0',
    title: 'Wayeal Company and SFJ-231 Product Video',
    description:
      'Company and product walkthrough content for Wayeal helium leak detection solutions.',
    relatedLink: { label: 'Home', href: '/' },
  });

  Object.values(products).forEach((product) => {
    if (!product.videoSrc) return;

    addVideo(videos, {
      videoSrc: product.videoSrc,
      title: `${product.title} Video`,
      description: product.description,
      relatedLink: { label: product.title, href: product.pageHref },
    });
  });

  vacuumChamberApplications.forEach((application) => {
    application.groups.forEach((group) => {
      group.skus.forEach((sku) => {
        if (!sku.videoSrc) return;

        addVideo(videos, {
          videoSrc: sku.videoSrc,
          title: 'Vacuum Chamber Helium Leak Detection System Video',
          description:
            'Application video for SFZ-344 vacuum chamber helium leak detection systems across industrial parts.',
          relatedLink: {
            label: sku.name,
            href: `${VACUUM_CHAMBER_BASE_PATH}/${application.slug}/${sku.slug}`,
          },
        });
      });
    });
  });
}

function addSourceScannedVideos(videos: Map<string, VideoDraft>) {
  const files = scanRoots.flatMap(getFilesToScan);

  files.forEach((filePath) => {
    const content = readFileSync(filePath, 'utf8');
    const matches = content.match(youtubeUrlPattern) || [];

    matches.forEach((match) => {
      const videoId = getYouTubeVideoId(match);
      if (!videoId || videos.has(videoId)) return;

      addVideo(videos, {
        videoSrc: match,
        title: `YouTube Video ${videoId}`,
        description: 'YouTube video detected in site source content.',
        relatedLink: sourcePathToRelatedLink(filePath),
      });
    });
  });
}

export function getSiteVideos(): SiteVideo[] {
  const videos = new Map<string, VideoDraft>();

  addStructuredVideos(videos);
  addSourceScannedVideos(videos);

  return [...videos.values()]
    .map((video) => ({
      ...video,
      embedUrl: createEmbedUrl(video.videoId),
      watchUrl: createWatchUrl(video.videoId),
      relatedLinks: video.relatedLinks.sort((a, b) => a.label.localeCompare(b.label)),
    }))
    .sort((a, b) => a.title.localeCompare(b.title));
}

export const siteVideos = getSiteVideos();
