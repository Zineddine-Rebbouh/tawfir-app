# Tawfir Landing Page

Arabic-first landing page for **Tawfir / توفير**, an Algerian food-saving marketplace connecting merchants, consumers, and charities.

## Setup

This project is intentionally lightweight: it uses semantic HTML, modular JavaScript, split CSS, and CDN animation libraries.

```bash
npm install
npm run dev
```

You can also preview it without installing dependencies:

```bash
python -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## Folder Structure

```text
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

`index.html` is now only the application shell. It loads fonts, CSS, GSAP/CDN dependencies, and the module entrypoint.

`src/pages/landingPage.js` composes the full page from reusable section components.

`src/components/` contains presentational components:

- `Navbar`, `Footer`, `Hero`, `Features`, `EcoScore`, `Testimonials`, CTA sections
- shared primitives like `Logo`, `Icon`, `PhoneFrame`, `SectionHeader`, `StarRating`

`src/data/content.js` centralizes copy and repeatable page data so text updates do not require editing component logic.

`src/services/` owns runtime behavior:

- theme persistence
- mobile navigation
- scroll progress and scroll-to-top
- animated counters
- Eco Score ring
- particle canvas
- modal behavior
- waitlist form feedback
- Algeria timezone clock

`src/styles/` is split by responsibility:

- `tokens.css`: design tokens and dark mode variables
- `base.css`: reset and global typography
- `layout.css`: containers and section primitives
- `components.css`: reusable UI surfaces
- `sections/`: section-specific styles
- `responsive.css`: breakpoint behavior
- `motion.css`: keyframes and reduced-motion handling

## Refactoring Summary

The original page was a single monolithic HTML file with embedded CSS and JavaScript. It has been refactored into a production-style architecture with clear ownership boundaries:

- UI markup is componentized.
- Repeated content is data-driven.
- JavaScript behavior is separated into services.
- CSS is organized into maintainable layers.
- The app shell is small and readable.
- Responsive, RTL, accessibility, and reduced-motion concerns remain first-class.

## Why This Structure

The project stays framework-free because the page does not need a heavy runtime. ES modules give us component-style organization without a build requirement, while Vite is available for a professional development workflow.

This makes the project suitable for:

- portfolio review
- GitHub presentation
- handoff to another frontend developer
- future migration to React, Vue, Astro, or Svelte

## Replacing Screenshots and Logo

Place production assets here:

```text
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

Screenshot placeholder labels are rendered in `src/components/ScreenshotShowcase.js`.

Logo placeholder markup is centralized in `src/components/Logo.js`.

## Future Improvements

- Replace placeholder screenshots with real app assets and use `<img loading="lazy">`.
- Replace `public/og-image.svg` with a professionally designed 1200×630 PNG.
- Add analytics events (Plausible or a lightweight custom solution) for CTA clicks and waitlist conversions.
- Move social URLs, support phone, and legal links into environment/config data.
- Add visual regression tests with Playwright.
- Add ESLint + Prettier config if the project grows beyond one contributor.
- Connect waitlist form to a real backend (Supabase, Airtable, or a Django endpoint).
