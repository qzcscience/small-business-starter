/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CLIENT DATA
 * ─────────────────────────────────────────────────────────────────────────────
 * Business-specific copy: name, phone, email, address, socials.
 * Imported by Header, Footer, Contact page, and Head/SEO components.
 *
 * No component should hardcode a business name or phone number —
 * everything comes from this file or brand.ts.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const client = {
  name: 'Wayeal',
  email: 'Oliver@wayeal.com.cn',
  phoneForTel: '+86-157-5460-3228',
  phoneFormatted: '+86-157-5460-3228',
  address: {
    lineOne: 'No.8 Wenqu Road',
    lineTwo: 'High-tech Industrial Development Zone',
    city: 'Hefei',
    state: 'Anhui',
    zip: '230088',
    country: 'CN',
    mapLink: 'https://maps.app.goo.gl/wJ4teoYa3kDxnYTFA',
  },
  socials: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    google: 'https://www.google.com/maps',
  },
  domain: 'https://www.example.com',
} as const;

export type Client = typeof client;
