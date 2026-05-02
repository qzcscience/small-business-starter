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
    facebook: 'https://www.facebook.com/profile.php?id=100070207605253',
    instagram: 'https://www.instagram.com/qi_oliver/',
    google: 'https://maps.app.goo.gl/wJ4teoYa3kDxnYTFA',
    youtube: 'https://www.youtube.com/@oliverqi1987/playlists',
    linkedin: 'https://www.linkedin.com/in/oliver-wayeal/',
    whatsapp: 'https://wa.me/+8615754603228',
  },
  domain: 'https://maps.app.goo.gl/wJ4teoYa3kDxnYTFA',
} as const;

export type Client = typeof client;
