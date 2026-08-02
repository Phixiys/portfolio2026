# Sasa Ristic — Personal Portfolio Site 2026

## Overview
A personal portfolio site for **Sasa Ristic**, a Stockholm-based Senior Frontend Engineer. Primary audience: **recruiters**. The core job of the page is to let a recruiter **skim experience fast** and **download the résumé (PDF)**. It is a multi-page (client-side routed) site: Home, Work, About, Contact — plus a persistent nav and footer.

The signature interaction is a **"typing code" hero headline**: it types itself out, makes a deliberate typo, backspaces, and retypes — a nod to the owner being a frontend engineer.

## About the Design Files
The file `Sasa Ristic - Portfolio.dc.html` in this bundle is a **design reference created in HTML** — a working prototype showing the intended look and behavior. It is **not** production code to copy directly. It uses a small in-house "DC" runtime (`support.js`) and inline styles for live-preview authoring; **do not port that runtime**.

The task is to **recreate this design in the target codebase's environment** using its established patterns. Given the owner's stack, the natural choice is **React + TypeScript** (his own tooling), with **GSAP** for animation (already used in the prototype) or **Motion (Framer Motion)** if the team prefers. If no project exists yet, scaffold a Vite + React + TS app. Style with whatever the team standardizes on (CSS Modules, Tailwind, styled-components) — the inline styles here are just the source of truth for values, not a required approach.

## Fidelity
**High-fidelity (hifi).** Colors, typography, spacing, and interactions are final. Recreate the UI pixel-accurately using the exact tokens below. Two content items are explicit placeholders (see Assets): the **About portrait** and the **testimonials**.

---

## Design Tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| Background | `#F6F3F1` | Page background (warm off-white) |
| Ink / text primary | `#484A47` | Headlines, body emphasis |
| Slate / text secondary | `#5C6D70` | Body copy, meta, mono labels |
| Coral / accent | `#E88873` | Accent, CTAs, active nav bar, caret |
| Coral-dark / hover | `#A37774` | Hover state of coral elements, muted labels |
| Sand | `#E0AC9D` | Selection highlight, decorative hatch |
| Card surface | `#FFFFFF` at ~40–80% alpha (`#ffffff66` / `#ffffff80`) | Experience cards, testimonial cards |
| Hairline border | `#48493F` at ~10–26% alpha (`#48493f1a`, `#48493f26`, `#48493f40`) | Dividers, card borders, outlines |

Accent gradient blobs (animated background): coral `#E8887340→transparent` and slate `#5C6D7033→transparent`, blurred ~30–34px.

### Typography
- **Display / headings:** `Oswald` — weights 500/600/700, `text-transform: uppercase`, tight `line-height` (0.95–1.05), `letter-spacing` ~0.005em.
- **Body:** `Nunito` — 400/600/700.
- **Mono / labels / eyebrows / meta:** `JetBrains Mono` — 500, `letter-spacing` 0.04–0.1em, usually `text-transform: uppercase`.
- Google Fonts import: `Oswald:wght@500;600;700`, `Nunito:wght@400;600;700`, `JetBrains+Mono:wght@500`.

Type scale (hifi):
- H1 hero: `clamp(42px, 7.4vw, 86px)`, Oswald 700, line-height 0.96, max-width 15ch, `min-height: 2.9em` (reserves space so layout doesn't jump while typing).
- H2 page titles: `clamp(32–34px, 4.4–5vw, 48–52px)`, Oswald 600.
- Contact H2: `clamp(44px, 8vw, 96px)`, Oswald 700.
- Body lead: `clamp(17px, 2vw, 21px)`, Nunito, line-height 1.6.
- Eyebrow / mono labels: 11–13px, JetBrains Mono, uppercase, letter-spacing 0.08–0.1em, color slate `#5C6D70` (or coral for section eyebrows).
- Stat numbers: Oswald 700, 44px.

### Spacing & shape
- Content column: `max-width: 1080px`, side padding `28px`, centered.
- Section vertical padding: `~68–96px` top, `~96–120px` bottom.
- Border radius: cards `14px`, buttons `9–12px`, pills `999px`, logo mark `11px`, skill chips `8px`, mono tags `6px`.
- Card padding: `28–30px`.
- Grid gaps: `16–48px` depending on context.
- No heavy shadows — the design leans on hairline borders + translucent surfaces, not drop shadows.

---

## Screens / Views

All views share a **sticky top nav** and a **footer**, and sit above a **fixed animated background**.

### Persistent chrome

**Nav (sticky, `top:0`, z-20)**
- Background `#F6F3F1cc` + `backdrop-filter: blur(12px)`, bottom hairline `#48493f1a`.
- Left: logo button = a `40×40` rounded-`11px` square, `1.5px` coral border, background `#e888731a`, containing `</>` in JetBrains Mono coral; then wordmark **SASA RISTIC** in Oswald 600, 20px, letter-spacing 0.02em. Clicking returns Home.
- Center/right: nav items **HOME · WORK · ABOUT · CONTACT** — JetBrains Mono 12px, uppercase, letter-spacing 0.06em, color slate `#5C6D70`, hover → coral. Each has a `2px` coral underline bar below it that fades in (`opacity 0→1`, `transition .3s`) when its page is active.
- Far right: **Résumé ↓** primary button — coral bg `#E88873`, `#F6F3F1` text, radius 9px, JetBrains Mono 12px uppercase, hover bg `#A37774`.

**Footer** — top hairline; left "© 2026 Sasa Ristic · Stockholm", right "Built with care · </>", both JetBrains Mono 12px, slate/coral-dark.

**Animated background (fixed, z-0, pointer-events:none)**
- Faint grid: two crossed linear-gradients, `#48493f0d 1px` lines on `64px` cells, masked with a radial gradient so it fades out (`radial-gradient(circle at 70% 20%, #000, transparent 75%)`).
- Two blurred blobs drifting on infinite keyframe loops (`drift1` 22s, `drift2` 27s, ease-in-out): coral blob top-right (520px), slate blob bottom-left (480px).

---

### 1. Home (`/`)
**Purpose:** instant read on who he is + push to Work/Résumé.

Layout: single column within the 1080px content well, `padding: 76px 0 96px`.
- Eyebrow (mono, coral): `Senior Frontend Engineer · Stockholm, SE`.
- **H1 hero** (the typing animation — see Interactions). Final text: **“Frontend engineering with an eye for detail.”** with the trailing period in coral. A blinking coral caret (`0.5em × 0.86em` block, `caretblink 1s step-end infinite`) sits at the end of the typed text.
- Lead paragraph (slate, max 52ch): *"Interfaces that feel considered, fast, and a little bit warm. Eleven years building digital products for some of Sweden's most demanding brands — always starting from the business problem, not the code."*
- Two buttons: **View experience →** (ink `#484A47` bg, hover keeps ink) → Work; **Download résumé ↓** (outline, hover border+text → coral).
- **Stats row** (top hairline, 36px pad): `11+` Years shipping · `8` Companies · `20+` Brands delivered. Numbers Oswald 700 44px with coral `+`; labels mono 11px uppercase.
- **Selected brands** row: mono label + wrapping pills (Oswald 500 15px, hairline border, radius 999px): Swedbank Pay, Vattenfall, Marshall, Urbanears, Coop, LeoVegas, Capio, Plantagen.

### 2. Work (`/work`)
**Purpose:** skim 11 years of experience fast (the recruiter's #1 goal). Most recent first.

- Eyebrow `02 — Experience`; H2 **"Eleven years, eight teams"**; intro line.
- **Experience list** — one card per role, vertical stack, `gap` via `margin-bottom:16px`. Each card: `1px` hairline border, radius 14px, translucent white bg, padding `30px 26px`, hover → border coral-ish `#E8887366` + `translateX(4px)` (transition .25s).
- Card is a 2-col grid `180px / 1fr`, gap 28px:
  - Left meta column: dates (mono, coral) · duration (mono, slate) · place (Nunito 13px) · work mode (mono 10px uppercase, coral-dark).
  - Right: company (Oswald 600, 26px) · role (Nunito 700, 14px, slate) · summary paragraph (Nunito 16px, max 60ch) · tag chips (mono 11px, slate on `#5c6d7014`, radius 6px).
- **Data — all 8 roles** (recreate verbatim):
  1. **Svensk Fastighetsförmedling** — Senior Front End Developer — 2023–2025 · 2 yr 4 mo · Stockholm, SE · Hybrid. *"Modernised the digital platform for one of Sweden's leading real-estate agencies. Led WCAG accessibility work to make it inclusive for every user, and partnered tightly with the business so each solution answered a real need."* Tags: .NET, JSON, Accessibility, +8 more.
  2. **Netigate** — Senior Front End Developer — 2021–2022 · 1 yr 5 mo · Stockholm, SE · On-site. *"Built out a SaaS platform around the features customers actually asked for, and drove the migration to TypeScript — a bet on maintainability that paid off in velocity for the whole team."* Tags: React, TypeScript, JSON, +8 more.
  3. **Improove** — Senior Front End Developer — 2021 · 9 mo · Stockholm, SE · On-site. *"Built commerce experiences on Salesforce Commerce Cloud for international brands like Urbanears, Marshall and Plantagen — focused on conversion and customer journey over technology for its own sake."* Tags: Salesforce, JSON, +5 more.
  4. **Comprend** — Front End Developer — 2019–2021 · 1 yr 4 mo · Stockholm, SE · On-site. *"Delivered enterprise web solutions for heavyweight brands — Swedbank Pay, Vattenfall, Capio and Billerud — working cross-functionally with design and stakeholders to build the thing that solved the real problem."* Tags: JavaScript, JSON, +7 more.
  5. **Rebel and Bird** — Front End Developer — 2019 · 6 mo · Stockholm, SE · On-site. *"Built a progressive web app for Match Center Media with performance and user experience at the core, working closely with stakeholders around real content and media needs."* Tags: React, JSON, +4 more.
  6. **NoA Ignite Sweden** — Front End Developer — 2018–2019 · 6 mo · Stockholm, SE · On-site. *"Built large-scale digital platforms and e-commerce for brands like Coop, LeoVegas and Sector Alarm — enterprise scale, with a UX that actually converted."* Tags: CSS, JSON.
  7. **tretton37** — Front End Developer — 2017–2018 · 1 yr 7 mo · Greater Stockholm · On-site. *"Developed applications within innovation and product-development projects, working closely with dev teams to deliver scalable, user-centred solutions."* Tags: CSS, JSON.
  8. **ISPY AB** — Front End Developer — 2014–2017 · 2 yr 4 mo · Greater Stockholm · On-site. *"Designed and built digital solutions for finance and pension clients, focused on user experience and visual communication — an early lesson that technology and communication belong together."* Tags: CSS, JSON.

### 3. About (`/about`)
- Eyebrow `03 — About`. Two-col grid `1.4fr / 1fr`, gap 48px:
  - Left: H2 **"Technology, in service of the problem"** + two paragraphs (see prototype for exact copy — bio + throughline about WCAG and the TypeScript migration).
  - Right: **portrait placeholder** — `aspect-ratio 4/5`, radius 16px, diagonal hatch background, "PORTRAIT / drop image here". **Replace with a real photo.**
- **Skills & tools** — mono section label, then a `repeat(auto-fit, minmax(220px,1fr))` grid of 3 groups: *Languages & frameworks* (TypeScript, React, JavaScript, .NET, HTML, CSS, JSON), *Platforms* (Salesforce Commerce Cloud, PWA, SaaS), *Practice* (Accessibility (WCAG), Agile, UX, Performance). Group label Oswald 600 uppercase coral; items = bordered chips (Nunito 600 14px).
- **Testimonials** — 2 placeholder quote cards (marked `// placeholders — swap for real quotes`). Card: translucent white, radius 14px, padding 28px; blockquote Nunito 17px; attribution mono 12px slate. **Replace with real quotes.**

### 4. Contact (`/contact`)
- Eyebrow `04 — Contact`; giant H2 **"Let's talk."** (`clamp(44px,8vw,96px)`, coral period); lead line (max 48ch).
- Three contact cards in a wrapping flex row (min-width 200px each, radius 14px, hover border → coral): **Email** hej@ristic.nu · **LinkedIn** /in/sasaristic · **GitHub** @sasaristic. Each: mono label + Oswald 600 20px value. *(Links are placeholders — confirm real handles.)*
- **Download résumé (PDF) ↓** coral button.

---

## Interactions & Behavior

### Hero typing animation (signature)
The H1 types character-by-character, makes a mistake, backspaces, and retypes. Implement as a timed sequence of string frames driving the rendered text; a blinking caret element is always appended.

Exact scripted sequence (from the prototype):
1. Type `Frontend eng`, brief hold (~160ms).
2. Type `eneering` → yields the typo **"Frontend engeneering"**; hold ~420ms (let it register).
3. Backspace 8 chars → back to `Frontend eng`; hold ~180ms.
4. Type `ineering with an eye for de` (correct).
5. Type `tials` → typo **"...for detials"**; hold ~460ms.
6. Backspace 4 chars → `...for de` → `det`; hold ~160ms.
7. Type `ail`, then `.` → final **"Frontend engineering with an eye for detail."**

Timing: per-character delay randomized ~48–104ms (typos slightly slower, 60–120ms); backspaces ~42ms; the whole run starts ~620ms after mount (lets the hero entrance settle). Caret: `caretblink` keyframes, 1s `step-end` infinite, coral block `0.5em × 0.86em`. Reserve `min-height: 2.9em` on the H1 so surrounding content doesn't jump. **Restart the sequence whenever the user navigates back to Home; clear the timer when leaving Home** (and on unmount). Respect `prefers-reduced-motion`: if set, skip the animation and render the final string immediately.

### Page entrance + scroll reveals (GSAP)
- On each page change: `window.scrollTo(0,0)`, then the page container fades/slides in (`opacity 0→1`, `y 16→0`, 0.5s `power2.out`).
- Home only: hero elements (`[data-hero]`) stagger in (`opacity 0→1`, `y 26→0`, 0.7s `power3.out`, stagger 0.08, slight delay).
- All pages: elements marked `[data-reveal]` animate on scroll via ScrollTrigger (`opacity 0→1`, `y 28→0`, 0.6s `power2.out`, `start: 'top 90%'`, `once: true`). Kill/refresh ScrollTriggers on page change.

### Hover micro-interactions
- Nav items: color → coral.
- Primary buttons: coral → coral-dark; outline buttons: border+text → coral.
- Experience cards: border → coral tint + `translateX(4px)`.
- Contact cards: border → coral.

### Routing
Four routes (Home/Work/About/Contact). In the prototype this is in-memory state (no URL change). **In the real app, use the router (e.g. React Router) with real paths `/`, `/work`, `/about`, `/contact`** so pages are linkable/shareable and SEO-friendly for recruiters.

### Résumé download
All **Résumé ↓** buttons currently call `window.print()` as a stand-in. **Wire these to a real PDF** (link/download an actual `resume.pdf`), or build a dedicated print-optimized résumé route.

## State Management
- `page` — current route (`home | work | about | contact`). Prefer the router in the real app.
- `typed` — the current hero string frame (drives the typing animation). Local to the hero component; back it with a timer/effect and clean up on unmount.
- Static content (experience, skill groups, testimonials, brands) can be plain data modules — no fetching required.

## Assets
- **Fonts:** Google Fonts — Oswald, Nunito, JetBrains Mono (see import above). Self-host in production if preferred.
- **Logo mark:** `</>` set in JetBrains Mono inside a bordered rounded square — pure CSS/text, no image.
- **Animation lib:** GSAP + ScrollTrigger (3.12.x in prototype). Motion (Framer Motion) is an acceptable substitute.
- **Portrait (About):** ❗ placeholder — supply a real photo (4:5).
- **Testimonials:** ❗ placeholder copy — supply real quotes + attributions.
- **Contact links:** confirm real email / LinkedIn / GitHub URLs.
- No other raster/vector assets; the decorative background is CSS gradients + blur.
- `reference-hero.png` in this folder is a screenshot of the finished hero for visual reference.

## Files
- `Sasa Ristic - Portfolio.dc.html` — the full design reference (all four screens, animation logic, exact copy and styles). Open it in a browser to see the live behavior. Ignore `support.js` / the DC wrapper — those are authoring-tool runtime, not part of the design.
- `reference-hero.png` — static screenshot of the hero end-state.
