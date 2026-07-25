# Design: Sasa Ristic — Personal Recruiter Portfolio Site

**Date:** 2026-07-25
**Status:** Approved
**Source spec:** `README.md` (high-fidelity design handoff), `Sasa Ristic - Portfolio.dc.html` (reference prototype), `reference-hero.png`

## Goal

A personal portfolio for Sasa Ristic (Stockholm-based Senior Frontend Engineer). Primary audience: **recruiters** — skim experience fast, download the résumé. Four pages (Home, Work, About, Contact) with persistent nav/footer over a fixed animated background. Signature interaction: the "typing code" hero headline.

The visual design (colors, type, spacing, interactions) is **final and specified in `README.md`** — this document only records the architecture decisions layered on top of that spec.

## Decisions

- **CMS approach: structured data files only.** All editable content lives in typed modules under `src/content/`. No CMS backend now, but content is fully separated from components so a git-based CMS (e.g. Keystatic) can be added later without restructuring. This is the "CMS in mind" contract.
- **Framework: Next.js 15 (App Router), TypeScript, static export (`output: 'export'`).** Static HTML per route → best SEO/shareability for recruiters (the spec's stated goal), deployable to any static host. Chosen over the spec's suggested Vite SPA because a client-rendered SPA is the weakest option for the SEO the spec requires.
- **Styling: CSS Modules + global design-token file** (`src/styles/tokens.css`, CSS custom properties mapping 1:1 to the README tokens). No Tailwind — token-driven, hairline-based design maps cleanly to CSS variables.
- **Animation: GSAP + ScrollTrigger** (as in the prototype), isolated in client components; respects `prefers-reduced-motion`.
- **Fonts:** `next/font/google` (Oswald, Nunito, JetBrains Mono) — self-hosted at build, no layout shift, no external request.

## Architecture

### Content model (`src/content/`)
- `experience.ts` — 8 roles: `{ dates, duration, place, mode, company, role, summary, tags[] }`
- `skills.ts` — 3 groups: `{ label, items[] }`
- `brands.ts` — string[] of brand pills
- `testimonials.ts` — `{ quote, attribution }[]` (placeholders, flagged)
- `site.ts` — name, eyebrow, hero final text, lead copy, stats[], contact links (email/LinkedIn/GitHub), résumé path, about bio paragraphs
- `public/resume.pdf` — real résumé (owner supplies)
- `public/portrait.jpg` — optional; About portrait falls back to hatch placeholder if absent

Components import from `src/content/` only; no hardcoded copy.

### Routes & components
```
app/
  layout.tsx          → fonts, <Background/>, <Nav/>, <Footer/>, page-transition wrapper, metadata
  page.tsx            → Home
  work/page.tsx       → Work
  about/page.tsx      → About
  contact/page.tsx    → Contact
components/
  Nav.tsx, Footer.tsx, Background.tsx      (Background + nav active-underline are client)
  HeroTyping.tsx      (client — scripted typo/backspace typing sequence + caret)
  Animate.tsx         (client — page entrance + [data-reveal] ScrollTrigger reveals)
  ExperienceCard, SkillGroup, TestimonialCard, ContactCard, BrandPills, Stats, Button
```

### Key behaviors (per README §Interactions)
- **HeroTyping:** exact scripted sequence (type → typo "engeneering" → backspace → correct → typo "detials" → backspace → final "Frontend engineering with an eye for detail." with coral period). Blinking coral caret. `min-height: 2.9em` reserved to prevent layout jump. Restarts on Home mount; clears timer on unmount. Under `prefers-reduced-motion`, renders final string immediately.
- **Routing:** native App Router file routes (`/`, `/work`, `/about`, `/contact`). Nav underline via `usePathname()`.
- **Animation:** page container fades/slides in on route change; Home hero staggers `[data-hero]`; `[data-reveal]` elements reveal on scroll (ScrollTrigger, `once: true`). Refresh/kill triggers on route change.
- **Résumé buttons:** anchor to `/resume.pdf` with `download` (replaces prototype's `window.print()`).

## Non-goals (YAGNI)
- No CMS backend, no auth, no database, no API layer.
- No dark mode (design is a single warm light theme).
- No blog/contact-form submission (contact is direct links).
- Do NOT port the prototype's `support.js` DC runtime or inline-style authoring approach.

## Placeholders to replace before launch
- About portrait (4:5 photo) — `public/portrait.jpg`
- Testimonials — real quotes + attributions in `testimonials.ts`
- Résumé PDF — `public/resume.pdf`
- Contact handles — confirm email `hej@ristic.nu`, LinkedIn `/in/sasaristic`, GitHub `@sasaristic` in `site.ts`

## Success criteria
- Four routes render statically, pixel-accurate to `README.md` tokens and `reference-hero.png`.
- Hero typing sequence matches the scripted frames; caret blinks; reduced-motion path works.
- Content edits require touching only `src/content/` (+ `public/` assets).
- `next build` produces a clean static export.
