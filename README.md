# Cayman Yoga Website

Modern Next.js website connecting users w/ certified yoga teachers in Cayman Islands.

## Features

- ✅ Modern landing page w/ hero, search, CTAs
- ✅ Teachers directory w/ profiles
- ✅ SEO optimized (meta tags, Open Graph, Twitter cards)
- ✅ AEO friendly (FAQ schema, natural language)
- ✅ Structured data (JSON-LD)
- ✅ Sitemap & robots.txt
- ✅ Responsive design w/ Tailwind CSS
- ✅ TypeScript
- ✅ Vercel-ready

## Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Deploy (zero config needed)

Or via CLI:

```bash
npm i -g vercel
vercel
```

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## SEO Configuration

Update domain in:
- `app/layout.tsx` - metadataBase
- `app/sitemap.ts` - baseUrl
- `app/robots.ts` - sitemap URL
- `.env.example` - NEXT_PUBLIC_SITE_URL

Add Google verification code in `app/layout.tsx`

## Structure

```
app/
├── page.tsx          # Landing page
├── teachers/
│   └── page.tsx      # Teachers directory
├── layout.tsx        # Root layout w/ SEO
├── sitemap.ts        # Dynamic sitemap
└── robots.ts         # Robots.txt
```

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (icons)
