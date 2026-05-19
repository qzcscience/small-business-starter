import { brand } from '../config/brand';
import { client } from '../data/client';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface ItemListEntry {
  name: string;
  url: string;
  description?: string;
  image?: string;
}

export interface FAQEntry {
  question: string;
  answer: string;
}

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, '');

const ensureLeadingSlash = (value: string) => (value.startsWith('/') ? value : `/${value}`);

const hasFileExtension = (value: string) => /\/[^/?#]+\.[^/?#]+(?:[?#].*)?$/.test(value);

export const getCanonicalPath = (pathname: string) => {
  const cleanPath = ensureLeadingSlash(pathname.split(/[?#]/)[0] || '/');
  if (cleanPath === '/' || hasFileExtension(cleanPath)) return cleanPath;

  return cleanPath.endsWith('/') ? cleanPath : `${cleanPath}/`;
};

export const getConfiguredSiteUrl = () =>
  trimTrailingSlash(import.meta.env.PUBLIC_SITE_URL || brand.url);

export const isPlaceholderSiteUrl = (siteUrl = getConfiguredSiteUrl()) =>
  /(^|\/\/)(www\.)?example\.com$/i.test(siteUrl.replace(/^https?:\/\//i, ''));

export const getAbsoluteUrl = (pathOrUrl = '/', siteUrl = getConfiguredSiteUrl()) => {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;

  return new URL(ensureLeadingSlash(pathOrUrl), `${trimTrailingSlash(siteUrl)}/`).toString();
};

export const getCanonicalUrl = (pathname: string) => {
  if (/^https?:\/\//i.test(pathname)) return pathname;

  return getAbsoluteUrl(getCanonicalPath(pathname));
};

export const getPageTitle = (title: string, siteName = brand.name) => {
  const normalizedTitle = title.trim();
  if (!normalizedTitle || normalizedTitle === siteName) return siteName;
  if (normalizedTitle.toLowerCase().includes(siteName.toLowerCase())) return normalizedTitle;

  return `${normalizedTitle} — ${siteName}`;
};

export const createBreadcrumbSchema = (items: BreadcrumbItem[]) => {
  const usableItems = items.filter((item) => item.label);

  if (usableItems.length < 2) return undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: usableItems.map((item, index) => {
      const listItem: Record<string, unknown> = {
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
      };

      if (item.href) {
        listItem.item = getCanonicalUrl(item.href);
      }

      return listItem;
    }),
  };
};

export const createOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: brand.name,
  url: getConfiguredSiteUrl(),
  logo: getAbsoluteUrl('/og-image.png'),
  email: client.email,
  telephone: client.phoneForTel,
  address: {
    '@type': 'PostalAddress',
    streetAddress: [client.address.lineOne, client.address.lineTwo].filter(Boolean).join(', '),
    addressLocality: client.address.city,
    addressRegion: client.address.state,
    postalCode: client.address.zip,
    addressCountry: client.address.country,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    telephone: client.phoneForTel,
    email: client.email,
    availableLanguage: ['en', 'zh'],
  },
  sameAs: Object.values(client.socials).filter(Boolean),
});

export const createWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: brand.name,
  url: getConfiguredSiteUrl(),
});

export const createFAQPageSchema = (items: FAQEntry[]) => {
  const mainEntity = items
    .filter((item) => item.question && item.answer)
    .map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    }));

  if (!mainEntity.length) return undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity,
  };
};

export const createItemListSchema = (items: ItemListEntry[]) => ({
  '@type': 'ItemList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: item.url.includes('#') ? getAbsoluteUrl(item.url) : getCanonicalUrl(item.url),
    name: item.name,
    ...(item.description ? { description: item.description } : {}),
    ...(item.image ? { image: getAbsoluteUrl(item.image) } : {}),
  })),
});

export const createCollectionPageSchema = ({
  name,
  description,
  url,
  items,
}: {
  name: string;
  description: string;
  url: string;
  items: ItemListEntry[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name,
  description,
  url: getCanonicalUrl(url),
  mainEntity: createItemListSchema(items),
});

export const asSchemaArray = (
  schema?: Record<string, unknown> | Array<Record<string, unknown> | undefined>,
) => {
  if (!schema) return [];
  return Array.isArray(schema) ? schema.filter(Boolean) as Record<string, unknown>[] : [schema];
};
