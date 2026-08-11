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
  contact: { eyebrow: string; title: string; lead: string[]; channels: Channel[] };
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
    'Senior frontend-utvecklare i Stockholm. Tolv år av React, TypeScript och det betydligt svårare problemet: att lista ut vad kunden faktiskt behöver.',
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
    title: 'Det svåra i det här yrket har aldrig varit koden.',
    paragraphs: [
      'Jag har byggt frontend i tolv år — React, TypeScript, Next.js — på byråer och produktbolag. Någonstans på vägen märkte jag att de projekt som gick dåligt sällan sprack av tekniska skäl. De sprack för att ingen satt sig ner med kunden tillräckligt tidigt och rett ut vad de egentligen försökte åstadkomma.',
      'Så det blev det jag blev bra på. Jag kan gå tillräckligt djupt med utvecklare för att vara till nytta, och jag kan sitta mitt emot en beställare och förklara en teknisk avvägning i termer av vad den kostar och vad den ger. Mitt bästa arbete har mestadels hänt i det glappet.',
      'Jag har byggt e-handel för Urbanears, Marshall och Plantagen, enterprise-plattformar för Swedbank Pay, Vattenfall och Capio, och lett tillgänglighetsarbetet på Svensk Fastighetsförmedling — gjort en plattform som tusentals människor använder varje dag användbar för alla, inte bara för de flesta.',
      'Numera tar jag egna uppdrag. Jag arbetar på svenska, engelska och serbiska, från Stockholm.',
      'När jag inte sitter framför en skärm tränar och instruerar jag brasiliansk jiu-jitsu, vilket visar sig vara utmärkt träning i att tålmodigt förklara komplicerade saker för folk som är övertygade om att de redan förstått.'
    ],
    portrait: shared.portrait,
  },
  contact: {
    eyebrow: '04 — Kontakt',
    title: 'Hör av dig',
    lead: [
      'Har du något på gång som behöver en frontend-utvecklare som frågar varför innan hur? Det vill jag höra om. ',
      'Tillgänglig för konsultuppdrag och öppen för rätt anställning — särskilt där teknik och kundrelation möts.'
    ],
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
    "Senior frontend developer in Stockholm. Twelve years of JavaScript and the far harder problem of working out what a client actually needs.",
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
    title: 'The hardest part of this job was never the code.',
    paragraphs: [
      "I've spent twelve years building frontend — React, TypeScript, Next.js — across agencies and product companies. Somewhere in the middle of that I noticed that the projects that went badly rarely failed on technical grounds. They failed because nobody sat down with the client early enough to work out what they were actually trying to do.",
      "So that became the thing I got good at. I can go deep enough with engineers to be useful, and I can sit across from a stakeholder and explain a technical trade-off in terms of what it costs and what it buys them. Most of my best work has happened in that gap.",
      "I've built e-commerce for Urbanears, Marshall and Plantagen, enterprise platforms for Swedbank Pay, Vattenfall and Capio, and led the accessibility work at Svensk Fastighetsförmedling — making a platform that thousands of people use every day work for all of them, not just most of them.",
      "These days I take on my own clients. I work in Swedish, English and Serbian, out of Stockholm.",
      "When I'm not in front of a screen I teach Brazilian jiu-jitsu, which turns out to be excellent training for explaining complicated things patiently to people who are convinced they already understand."
    ],
    portrait: shared.portrait,
  },
  contact: {
    eyebrow: '04 — Contact',
    title: "Let's talk",
    lead: [
      "Working on something that needs a frontend developer who'll ask why before asking how? I'd like to hear about it.",
      " Available for consulting work and open to the right permanent role — particularly where engineering and client relationships meet."
    ],
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
