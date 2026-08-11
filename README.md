# Tawfir Landing Page

Arabic-first landing page for **Tawfir (توفير)**, an Algerian food-saving marketplace connecting merchants, consumers, and charities.

**Live demo:** https://tawfir-landing-page.vercel.app/

---

## Overview

This repository contains the marketing landing page for Tawfir, built as a framework-free, production-style codebase. It uses semantic HTML, modular JavaScript, split CSS, and CDN-hosted animation libraries, with full support for RTL layout, dark mode, and accessibility.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Alternatively, preview the site without installing dependencies:

```bash
python -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## Project Structure

```
landing-page/
├── index.html
├── package.json
├── public/
│   ├── logo/
│   └── screenshots/
└── src/
    ├── components/
    ├── constants/
    ├── data/
    ├── pages/
    ├── services/
    ├── styles/
    ├── utils/
    └── main.js
```

## Architecture

- **`index.html`** — the application shell. Loads fonts, CSS, GSAP/CDN dependencies, and the module entry point.
- **`src/pages/landingPage.js`** — composes the full page from reusable section components.
- **`src/components/`** — presentational components, including `Navbar`, `Footer`, `Hero`, `Features`, `EcoScore`, `Testimonials`, and CTA sections, along with shared primitives such as `Logo`, `Icon`, `PhoneFrame`, `SectionHeader`, and `StarRating`.
- **`src/data/content.js`** — centralizes copy and repeatable page data so text updates do not require editing component logic.
- **`src/services/`** — owns runtime behavior, including theme persistence, mobile navigation, scroll progress and scroll-to-top, animated counters, the Eco Score ring, the particle canvas, modal behavior, waitlist form feedback, and the Algeria timezone clock.
- **`src/styles/`** — organized by responsibility:
  - `tokens.css` — design tokens and dark mode variables
  - `base.css` — reset and global typography
  - `layout.css` — containers and section primitives
  - `components.css` — reusable UI surfaces
  - `sections/` — section-specific styles
  - `responsive.css` — breakpoint behavior
  - `motion.css` — keyframes and reduced-motion handling

## Refactoring Summary

The original page was a single monolithic HTML file with embedded CSS and JavaScript. It has since been refactored into a production-style architecture with clear ownership boundaries:

- UI markup is componentized.
- Repeated content is data-driven.
- JavaScript behavior is separated into services.
- CSS is organized into maintainable layers.
- The application shell is small and readable.
- Responsive design, RTL support, accessibility, and reduced-motion handling remain first-class concerns.

## Why This Structure

The project intentionally stays framework-free, as the page does not require a heavy runtime. ES modules provide component-style organization without a build requirement, while Vite remains available for a more conventional development workflow.

This structure makes the project well suited for:

- Portfolio and code review
- GitHub presentation
- Handoff to another frontend developer
- Future migration to React, Vue, Astro, or Svelte

## Replacing Screenshots and Logo Assets

Place production assets in the following locations:

```
public/
├── logo/
│   ├── tawfir_logo.svg
│   └── tawfir_logo_light.svg
└── screenshots/
    ├── consumer_feed.png
    ├── merchant_dashboard.png
    ├── qr_verification.png
    ├── eco_score_profile.png
    ├── charity_request.png
    └── support_chat.png
```

Screenshot placeholder labels are rendered in `src/components/ScreenshotShowcase.js`. Logo placeholder markup is centralized in `src/components/Logo.js`.

## Roadmap

- Replace placeholder screenshots with real app assets and use `<img loading="lazy">`.
- Replace `public/og-image.svg` with a professionally designed 1200×630 PNG.
- Add analytics events (Plausible or a lightweight custom solution) for CTA clicks and waitlist conversions.
- Move social URLs, support phone number, and legal links into environment/config data.
- Add visual regression tests with Playwright.
- Add ESLint and Prettier configuration if the project grows beyond a single contributor.
- Connect the waitlist form to a real backend (Supabase, Airtable, or a Django endpoint).

## License

Add license information here if applicable.
