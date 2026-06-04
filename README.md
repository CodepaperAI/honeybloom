# Honey Bloom Beauty

A multi-page Next.js website for Honey Bloom Beauty, a professional beauty salon and medical esthetician studio in Mississauga. The site is built around brows, lashes, skincare, waxing, threading, tinting, henna, testimonials, FAQs, booking information, and contact details.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- CSS custom properties
- `next/font` with Abhaya Libre 700 and Montserrat 400
- `next/image` optimized local WebP photography
- JSON-LD structured data for local beauty salon SEO

## Pages

- Home: `/`
- About: `/about`
- Services and Pricing: `/services`
- Gallery: `/gallery`
- Testimonials: `/testimonials`
- FAQs: `/faqs`
- Booking Information: `/booking`
- Contact: `/contact`

## Local Setup

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

For local development, use:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Run the development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## SEO Notes

The site includes:

- Page-level metadata for every route
- Open Graph and Twitter card metadata
- Canonical URLs
- `robots.txt`
- `sitemap.xml`
- BeautySalon JSON-LD structured data
- FAQPage JSON-LD on the FAQs route

Set `NEXT_PUBLIC_SITE_URL` to the production domain before deployment so canonical URLs, sitemap entries, robots rules, Open Graph images, and structured data point to the live website.

## Environment Variables

| Variable | Purpose | Example |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public base URL used by SEO metadata, sitemap, robots, and JSON-LD | `https://honeybloombeauty.ca` |

## Assets

Local images live in `public/images`. Stock photos are used as placeholder industry visuals and should be replaced with original Honey Bloom Beauty studio photos when available.

## Deployment

This project can be deployed to Vercel or any platform that supports Next.js.

For production:

1. Set `NEXT_PUBLIC_SITE_URL` to the live domain.
2. Run `npm run build`.
3. Deploy the generated Next.js app through the hosting platform.
