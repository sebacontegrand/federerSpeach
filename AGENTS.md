# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

A Next.js 14 tribute website for Roger Federer's 2024 Dartmouth Commencement Address. It is a single-page editorial-style site with four scrollable sections: a hero header, an interactive transcript archive (MindMap), a photo gallery, a tribute message form, and an embedded video player with transcript/summary toggles.

## Tech Stack

- **Framework**: Next.js 14.2.4 with App Router (`app/` directory)
- **Runtime**: React 18, TypeScript 5, Node.js
- **Styling**: Tailwind CSS 3.4.4, custom CSS variables in `globals.css`
- **Fonts**: Libre Bodoni (serif, headings) and Nunito Sans (sans, body) via `next/font/google`
- **APIs**: Resend (email) for the `/api/send` tribute endpoint
- **No test framework** is installed.

## Common Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint (ESLint with next/core-web-vitals config)
npm run lint
```

There are no tests in this project. If you need to add tests, install a test runner first (e.g., Vitest, Jest, or Playwright).

## Architecture

### App Router Structure

- `app/layout.tsx` — Root layout. Loads Google Fonts (Libre Bodoni + Nunito Sans) and applies the `font-sans` / `font-serif` Tailwind classes.
- `app/page.tsx` — The single landing page. It imports all section components and renders them in a vertical scroll layout with `id` anchors for navigation. It also imports `transcript.json` and passes it to `MindMap`.
- `app/api/send/route.ts` — Next.js API route that receives `{ name, thought }` JSON via POST and sends an email via Resend using `RESEND_API_KEY` from `.env.local`.
- `app/globals.css` — Defines a custom color palette (CSS variables: `--primary`, `--secondary` `#B65506`, `--accent`, `--background`, `--surface`) and custom utility classes. The design uses an editorial/museum aesthetic with black, copper/gold, and off-white tones.

### Components (`components/`)

- `MindMap.tsx` — Bento-grid style expandable cards. Each card maps to a section in `transcript.json`. `sectionImages` maps section titles to image paths in `public/assets/`. Cards expand inline to show full points and subpoints. Grid is `grid-cols-1 sm:grid-cols-2 lg:grid-cols-5`.
- `Gallery.tsx` — Masonry photo gallery using CSS `columns`. Images are in `public/assets/fed*.jpeg`. Each image has a hover overlay with title text. Images use `grayscale` that removes on hover.
- `Thoughts.tsx` — Tribute form that POSTs to `/api/send`. Includes a simulated "archival feed" of hardcoded sample messages on the right side. Uses `custom-scrollbar` CSS class.
- `VideoPlayer.tsx` — Embeds a YouTube iframe (`pqWUuYTcG-o`). Toggles between `Transcript` and `Summary` views with animated height/opacity transitions.
- `Transcript.tsx` — Hardcoded excerpt of the speech with `prose-stone` styling.
- `Summary.tsx` — Three hardcoded insight cards summarizing the speech themes.
- `transcript.json` — Static data file consumed by `MindMap`. Structure: `{ title, sections: [{ title, points: [{ title, description, subpoints?: [{ title, description }] }] }] }`.

### Design System Tokens

The site uses a custom editorial palette defined in `globals.css` and Tailwind config:
- Primary: `#000000` (black)
- Secondary: `#B65506` (copper/gold)
- Background: `#FFFFFF`
- Surface: `#F9F9F9`
- Font families: `font-serif` (Libre Bodoni), `font-sans` (Nunito Sans)
- Custom tracking utilities: `tracking-widest-xl`, `tracking-widest-2xl`, `tracking-tightest`

### Environment Variables

- `RESEND_API_KEY` — Required for the email API route to function. Stored in `.env.local`.

### Assets

All static images are in `public/assets/`. `next.config.mjs` allows remote images from `images.unsplash.com` but the site currently uses only local assets.
