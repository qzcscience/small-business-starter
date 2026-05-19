import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export const NEWS_BASE_PATH = '/news';

export const newsCategories = [
  {
    label: 'Company',
    slug: 'company',
    href: `${NEWS_BASE_PATH}/company`,
    description:
      'Corporate updates, manufacturing milestones, certification news, and Wayeal announcements for customers following our helium leak testing business.',
  },
  {
    label: 'Customer Success',
    slug: 'customer-success',
    href: `${NEWS_BASE_PATH}/customer-success`,
    description:
      'Customer stories, implementation notes, and application wins showing how Wayeal leak testing systems support real production lines.',
  },
  {
    label: 'Trade Shows',
    slug: 'trade-shows',
    href: `${NEWS_BASE_PATH}/trade-shows`,
    description:
      'Exhibition previews, event recaps, and booth information for Wayeal helium leak detectors, vacuum chamber systems, and related instruments.',
  },
  {
    label: 'Industry',
    slug: 'industry',
    href: `${NEWS_BASE_PATH}/industry`,
    description:
      'Industry notes on leak testing trends in batteries, liquid cooling, HVAC, electric power, automotive parts, and precision manufacturing.',
  },
] as const;

export type NewsCategorySlug = (typeof newsCategories)[number]['slug'];
export type NewsEntry = CollectionEntry<'news'>;

export interface NewsTag {
  label: string;
  slug: string;
  href: string;
  count: number;
}

export const getNewsCategory = (slug: string) =>
  newsCategories.find((category) => category.slug === slug);

export const slugifyNewsTag = (tag: string) =>
  tag
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const getNewsSlug = (entry: NewsEntry) =>
  entry.id.split('/').filter(Boolean).pop()?.replace(/\.md$/, '') || entry.id;

export const getNewsHref = (entry: NewsEntry) =>
  `${NEWS_BASE_PATH}/${entry.data.category}/${getNewsSlug(entry)}`;

export const getPublishedNews = async () =>
  (await getCollection('news', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

export const getNewsTags = (entries: NewsEntry[]): NewsTag[] => {
  const tags = new Map<string, NewsTag>();

  entries.forEach((entry) => {
    entry.data.tags.forEach((tag) => {
      const slug = slugifyNewsTag(tag);
      if (!slug) return;

      const existing = tags.get(slug);
      if (existing) {
        existing.count += 1;
        return;
      }

      tags.set(slug, {
        label: tag,
        slug,
        href: `${NEWS_BASE_PATH}/tag/${slug}`,
        count: 1,
      });
    });
  });

  return [...tags.values()].sort((a, b) => a.label.localeCompare(b.label));
};
