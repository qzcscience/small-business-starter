# Wayeal Leak Test Website

Astro static site for Wayeal helium leak detection products, resources, news, and contact lead capture. The production deployment target is Cloudflare Pages.

## Stack

- Astro 6 static output
- Tailwind CSS v4
- Playwright smoke and regression tests
- Cloudflare Pages static hosting
- Cloudflare Pages Functions for `/api/contact`
- Cloudflare Turnstile for contact form spam protection
- Resend for email delivery

## Local Development

```bash
pnpm install
pnpm run dev
```

Local site: `http://localhost:4321/`

Production build:

```bash
pnpm run build
pnpm run preview
```

Regression tests:

```bash
pnpm test
```

## Cloudflare Pages Deployment

Use these Pages settings:

- Framework preset: Astro
- Build command: `pnpm run build`
- Build output directory: `dist`
- Node version: `22`
- Package manager: `pnpm@10.33.0`
- Production domain: `https://www.wayealleaktest.com`

The repo includes:

- `wrangler.toml` with `pages_build_output_dir = "./dist"`
- `.node-version` pinned to Node 22
- `public/_headers` for security and asset caching headers
- `public/_redirects` for canonical lowercase SKU URLs
- `astro.config.mjs` with static output, sitemap, robots.txt, and production domain checks

## Contact Form Secrets

Configure these in Cloudflare Pages environment variables:

- `PUBLIC_TURNSTILE_SITE_KEY`: public Turnstile site key used at build time
- `TURNSTILE_SECRET_KEY`: secret key used by the Pages Function
- `RESEND_API_KEY`: Resend API key
- `CONTACT_TO_EMAIL`: destination inbox for website leads
- `CONTACT_FROM_EMAIL`: verified sender address in Resend

The contact form posts to `/api/contact`, validates the fields and Turnstile token, sends the message through Resend, and redirects to `/contact/success/`.

## SEO Notes

The site generates canonical URLs, Open Graph tags, Twitter card tags, robots.txt, sitemap XML, breadcrumbs, Organization/WebSite schema, FAQ schema, Product schema, Article schema, and CollectionPage/ItemList schema for major listing pages.

Competitor references to keep in mind during content and SEO work:

- `https://www.innomatec.com/`
- `https://www.cincinnati-test.com/`
- `https://seiler-vakuum.de/en/our-customers/`
- `https://www.nolek.com/`
- `https://www.inficon.com/en/products/leak-detectors/lds3000`
- `https://vicleakdetection.com/`
- `https://lacotech.com/laco-category/helium-leak-detectors/`
- `https://www.telstar.com/en/`
- `https://www.galileotp.com/`
- `https://vac-eng.com/leak-test-system-resources/video-resources/`
- `https://nixma.com/`

## Important Workflow

After code changes, stop any old process on port `4321` and restart the local server at `http://localhost:4321/`.
