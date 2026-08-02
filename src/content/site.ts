// Central site content, per locale. Edit copy, stats, contact details here.
// Swedish (sv) and English (en) share structure; only the copy differs.

import type { Locale } from '@/i18n/config';

export type Stat = { value: string; suffix: string; label: string };
export type Channel = { label: string; value: string; href: string };
export type NavItem = { label: string; seg: string }; // seg '' = home

export type Site = {
  name: string;
  wordmark: string;
  location: string;
  eyebrow: string;
  heroFinalText: string;
  heroLead: string;
  stats: Stat[];
  work: { eyebrow: string; title: string; intro: string };
  about: { eyebrow: string; title: string; paragraphs: string[]; portrait: string };
  contact: { eyebrow: string; title: string; lead: string; channels: Channel[] };
  resumePath: string;
  footer: { left: string; right: string };
  nav: NavItem[];
  ui: {
    resume: string;
    homeAria: string;
    viewExperience: string;
    downloadResume: string;
    downloadResumeLg: string;
    selectedBrands: string;
    skillsTitle: string;
    testimonialsTitle: string;
    testimonialsNote: string;
    menuAria: string;
  };
};

// Values shared across locales (proper nouns, contact details, assets).
const shared = {
  name: 'Sasa Ristic',
  wordmark: 'SASA RISTIC',
  location: 'Stockholm',
  resumePath: '/resume.pdf',
  portrait: '/portrait.jpg',
  channels: [
    { value: 'sasa@ristic.nu', href: 'mailto:sasa@ristic.nu' },
    { value: '/in/sasaristic', href: 'https://www.linkedin.com/in/sasaristic' },
    { value: '@phixiys', href: 'https://github.com/phixiys' },
  ],
};

const sv: Site = {
  name: shared.name,
  wordmark: shared.wordmark,
  location: shared.location,
  eyebrow: 'Senior frontendutvecklare · Stockholm, SE',
  heroFinalText: 'Frontendutveckling med öga för detaljer.',
  heroLead:
    'Gränssnitt som känns genomtänkta, snabba och en aning varma. Elva år av att bygga digitala produkter för några av Sveriges mest krävande varumärken — alltid med utgångspunkt i affärsproblemet, inte koden.',
  stats: [
    { value: '11', suffix: '+', label: 'År i branschen' },
    { value: '8', suffix: '', label: 'Företag' },
    { value: '20', suffix: '+', label: 'Levererade varumärken' },
  ],
  work: {
    eyebrow: '02 — Erfarenhet',
    title: 'Elva år, åtta team',
    intro: 'Senior frontend inom fastighet, SaaS, e-handel och enterprise. Senaste först.',
  },
  about: {
    eyebrow: '03 — Om mig',
    title: 'Teknik i problemets tjänst',
    paragraphs: [
      'Jag är en Stockholmsbaserad senior frontendutvecklare. I över ett decennium har jag hjälpt team att leverera gränssnitt som är snabba, tillgängliga och genuint användbara — från enterprise­plattformar för Swedbank Pay och Vattenfall till SaaS-produkter och internationella e-handelsupplevelser.',
      'Min röda tråd: aldrig teknik för teknikens skull. Jag arbetar nära affären och designen för att varje lösning ska flytta en verklig siffra — konvertering, tempo, tillgänglighet — inte bara en rad kod. På sista tiden har det inneburit att leda WCAG-arbete för tillgänglighet och driva en full TypeScript-migrering som gav utdelning i teamets hastighet.',
    ],
    portrait: shared.portrait,
  },
  contact: {
    eyebrow: '04 — Kontakt',
    title: 'Låt oss prata',
    lead: 'Rekrytering, konsultuppdrag, eller vill du bara byta tankar om tillgänglig frontend? Jag läser allt.',
    channels: [
      { label: 'E-post', ...shared.channels[0] },
      { label: 'LinkedIn', ...shared.channels[1] },
      { label: 'GitHub', ...shared.channels[2] },
    ],
  },
  resumePath: shared.resumePath,
  footer: {
    left: '© 2026 Sasa Ristic · Stockholm',
    right: 'Byggd med omsorg · </>',
  },
  nav: [
    { label: 'Hem', seg: '' },
    { label: 'Arbete', seg: 'work' },
    { label: 'Om mig', seg: 'about' },
    { label: 'Kontakt', seg: 'contact' },
  ],
  ui: {
    resume: 'CV ↓',
    homeAria: `${shared.name} — hem`,
    viewExperience: 'Se erfarenhet →',
    downloadResume: 'Ladda ner CV ↓',
    downloadResumeLg: 'Ladda ner CV (PDF) ↓',
    selectedBrands: 'Utvalda varumärken',
    skillsTitle: 'Färdigheter & verktyg',
    testimonialsTitle: 'Vad andra säger',
    testimonialsNote: '// platshållare — byt mot riktiga citat',
    menuAria: 'Meny',
  },
};

const en: Site = {
  name: shared.name,
  wordmark: shared.wordmark,
  location: shared.location,
  eyebrow: 'Senior Frontend Engineer · Stockholm, SE',
  heroFinalText: 'Frontend engineering with an eye for detail.',
  heroLead:
    "Interfaces that feel considered, fast, and a little bit warm. Eleven years building digital products for some of Sweden's most demanding brands — always starting from the business problem, not the code.",
  stats: [
    { value: '11', suffix: '+', label: 'Years shipping' },
    { value: '8', suffix: '', label: 'Companies' },
    { value: '20', suffix: '+', label: 'Brands delivered' },
  ],
  work: {
    eyebrow: '02 — Experience',
    title: 'Eleven years, eight teams',
    intro: 'Senior frontend across real estate, SaaS, commerce and enterprise. Most recent first.',
  },
  about: {
    eyebrow: '03 — About',
    title: 'Technology, in service of the problem',
    paragraphs: [
      "I'm a Stockholm-based senior frontend engineer. For over a decade I've helped teams ship interfaces that are fast, accessible and genuinely useful — from enterprise platforms for Swedbank Pay and Vattenfall to SaaS products and international commerce experiences.",
      "My throughline: never tech for tech's sake. I work close to the business and design to make sure each solution moves a real number — conversion, velocity, accessibility — not just a line of code. Lately that's meant leading WCAG accessibility work and driving a full TypeScript migration that paid off in team speed.",
    ],
    portrait: shared.portrait,
  },
  contact: {
    eyebrow: '04 — Contact',
    title: "Let's talk",
    lead: 'Hiring, contracting, or just want to compare notes on accessible frontend? I read everything.',
    channels: [
      { label: 'Email', ...shared.channels[0] },
      { label: 'LinkedIn', ...shared.channels[1] },
      { label: 'GitHub', ...shared.channels[2] },
    ],
  },
  resumePath: shared.resumePath,
  footer: {
    left: '© 2026 Sasa Ristic · Stockholm',
    right: 'Built with care · </>',
  },
  nav: [
    { label: 'Home', seg: '' },
    { label: 'Work', seg: 'work' },
    { label: 'About', seg: 'about' },
    { label: 'Contact', seg: 'contact' },
  ],
  ui: {
    resume: 'Résumé ↓',
    homeAria: `${shared.name} — home`,
    viewExperience: 'View experience →',
    downloadResume: 'Download résumé ↓',
    downloadResumeLg: 'Download résumé (PDF) ↓',
    selectedBrands: 'Selected brands',
    skillsTitle: 'Skills & tools',
    testimonialsTitle: 'What people say',
    testimonialsNote: '// placeholders — swap for real quotes',
    menuAria: 'Menu',
  },
};

export const siteContent: Record<Locale, Site> = { sv, en };

export function getSite(locale: Locale): Site {
  return siteContent[locale];
}
