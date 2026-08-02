import type { Locale } from '@/i18n/config';

export type Role = {
  company: string;
  role: string;
  dates: string;
  period: string;
  place: string;
  mode: string;
  summary: string;
  tags: string[];
};

// Most recent first. Company names, dates and tech tags are locale-neutral;
// role title, period, place, mode and summary are translated.
const en: Role[] = [
  {
    company: 'Svensk Fastighetsförmedling',
    role: 'Senior Front End Developer',
    dates: '2023 — 2025',
    period: '2 yr 4 mo',
    place: 'Stockholm, SE',
    mode: 'Hybrid',
    summary:
      'Modernized digital platforms for one of Sweden’s leading real estate agencies—with the customer at the heart of every step. Led accessibility initiatives in accordance with WCAG to make the platform inclusive for all users. Worked closely with the business to ensure every technical solution addressed a real business need—not just added another line of code.',
    tags: ['.NET', 'JSON', 'Accessibility', 'JavaScript', 'ES6', 'TypeScript', 'CSS', 'LESS', 'HTML5', 'WCAG'  ],
  },
  {
    company: 'Netigate',
    role: 'Senior Front End Developer',
    dates: '2021 — 2022',
    period: '1 yr 5 mo',
    place: 'Stockholm, SE',
    mode: 'On-site',
    summary:
      'Built out a SaaS platform around the features customers actually asked for, and drove the migration to TypeScript — a bet on maintainability that paid off in velocity for the whole team.',
    tags: ['React', 'TypeScript', 'JSON', 'Redux', 'ES6', 'CSS', 'Cypress', 'Jest', 'HTML5'],
  },
  {
    company: 'Improove',
    role: 'Senior Front End Developer',
    dates: '2021',
    period: '9 mo',
    place: 'Stockholm, SE',
    mode: 'On-site',
    summary:
      'Built commerce experiences on Salesforce Commerce Cloud for international brands like Urbanears, Marshall and Plantagen — focused on conversion and customer journey over technology for its own sake.',
    tags: ['Salesforce', 'JSON', 'ES6', 'HTML5', 'jQuery', 'CSS'],
  },
  {
    company: 'Comprend',
    role: 'Front End Developer',
    dates: '2019 — 2021',
    period: '1 yr 4 mo',
    place: 'Stockholm, SE',
    mode: 'On-site',
    summary:
      'Delivered enterprise web solutions for heavyweight brands — Swedbank Pay, Vattenfall, Capio and Billerud — working cross-functionally with design and stakeholders to build the thing that solved the real problem.',
    tags: ['JavaScript', 'JSON', 'EpiServer', 'ES6', 'HTML5', 'CSS', 'TypeScript', 'LESS'],
  },
  {
    company: 'Rebel and Bird',
    role: 'Front End Developer',
    dates: '2019',
    period: '6 mo',
    place: 'Stockholm, SE',
    mode: 'On-site',
    summary:
      'Built a progressive web app for Match Center Media with performance and user experience at the core, working closely with stakeholders around real content and media needs.',
    tags: ['React', 'JSON', 'ES6', 'HTML5', 'CSS', 'Contentful', 'Gatsby', 'GraphQL', 'LESS' ],
  },
  {
    company: 'NoA Ignite Sweden',
    role: 'Front End Developer',
    dates: '2018 — 2019',
    period: '6 mo',
    place: 'Stockholm, SE',
    mode: 'On-site',
    summary:
      'Built large-scale digital platforms and e-commerce for brands like Coop, LeoVegas and Sector Alarm — enterprise scale, with a UX that actually converted.',
    tags: ['JavaScript', 'TypeScript', 'EpiServer', 'JSON', 'CSS', 'Backbone JS'],
  },
  {
    company: 'tretton37',
    role: 'Front End Developer',
    dates: '2017 — 2018',
    period: '1 yr 7 mo',
    place: 'Greater Stockholm',
    mode: 'On-site',
    summary:
      'Developed applications within innovation and product-development projects, working closely with dev teams to deliver scalable, user-centred solutions.',
    tags: ['React', 'TypeScript', '.NET', 'SCSS', 'LESS', 'CSS', 'JSON'],
  },
  {
    company: 'ISPY AB',
    role: 'Front End Developer',
    dates: '2014 — 2017',
    period: '2 yr 4 mo',
    place: 'Greater Stockholm',
    mode: 'On-site',
    summary:
      'Designed and built digital solutions for finance and pension clients, focused on user experience and visual communication — an early lesson that technology and communication belong together.',
    tags: ['JavaScript', 'CoffeeScript', 'jQuery', 'PHP', 'SCSS', 'Wordpress', 'CSS', 'JSON'],
  },
];

const sv: Role[] = [
  {
    company: 'Svensk Fastighetsförmedling',
    role: 'Senior frontendutvecklare',
    dates: '2023 — 2025',
    period: '2 år 4 mån',
    place: 'Stockholm, SE',
    mode: 'Hybrid',
    summary:
      'Moderniserade digitala plattformar för en av Sveriges ledande fastighetsförmedlare — med kunden i fokus varje steg av vägen. Ledde tillgänglighetsarbetet enligt WCAG för att göra plattformen inkluderande för alla användare. Jobbar tätt med verksamheten för att säkerställa att varje teknisk lösning faktiskt löser ett affärsproblem, inte bara en kodrad.',
    tags: ['.NET', 'JSON', 'Accessibility', 'JavaScript', 'ES6', 'TypeScript', 'CSS', 'LESS', 'HTML5', 'WCAG'  ],
  },
  {
    company: 'Netigate',
    role: 'Senior frontendutvecklare',
    dates: '2021 — 2022',
    period: '1 år 5 mån',
    place: 'Stockholm, SE',
    mode: 'På plats',
    summary:
      'Byggde vidare på en SaaS-plattform med fokus på funktioner som kunderna faktiskt efterfrågade. Drev migreringen till TypeScript för att göra kodbasen mer hållbar och lättare att skala — ett beslut som betalade sig i utvecklingshastighet för hela teamet. Jobbade agilt med kontinuerligt fokus på användarupplevelse.',
    tags: ['React', 'TypeScript', 'JSON', 'Redux', 'ES6', 'CSS', 'Cypress', 'Jest', 'HTML5'],
  },
  {
    company: 'Improove',
    role: 'Senior frontendutvecklare',
    dates: '2021',
    period: '9 mån',
    place: 'Stockholm, SE',
    mode: 'På plats',
    summary:
      'Byggde digitala köpupplevelser inom Salesforce Commerce Cloud för internationella varumärken som Urbanears, Marshall och Plantagen. Fokus låg på affärsvärde och kundresa snarare än teknik för teknikens skull — nära samarbete med projektintressenter för att förstå vad som faktiskt drev konvertering.',
    tags: ['Salesforce', 'JSON', 'ES6', 'HTML5', 'jQuery', 'CSS'],
  },
  {
    company: 'Comprend',
    role: 'Frontendutvecklare',
    dates: '2019 — 2021',
    period: '1 år 4 mån',
    place: 'Stockholm, SE',
    mode: 'På plats',
    summary:
      'Levererade enterprise-webblösningar för tunga varumärken som Swedbank Pay, Vattenfall, Capio och Billerud. Jobbade tvärfunktionellt med design och stakeholders — inte bara för att bygga rätt sak, utan för att bygga den sak som faktiskt löste kundens och affärens problem.',
    tags: ['JavaScript', 'JSON', 'EpiServer', 'ES6', 'HTML5', 'CSS', 'TypeScript', 'LESS'],
  },
  {
    company: 'Rebel and Bird',
    role: 'Frontendutvecklare',
    dates: '2019',
    period: '6 mån',
    place: 'Stockholm, SE',
    mode: 'På plats',
    summary:
      'Byggde en progressiv webbapplikation för Match Center Media med prestanda och användarupplevelse i fokus. Nära samarbete med stakeholders för att leverera lösningar anpassade efter verksamhetens faktiska innehålls- och mediebehov.',
    tags: ['React', 'JSON', 'ES6', 'HTML5', 'CSS', 'Contentful', 'Gatsby', 'GraphQL', 'LESS' ],
  },
  {
    company: 'NoA Ignite Sweden',
    role: 'Frontendutvecklare',
    dates: '2018 — 2019',
    period: '6 mån',
    place: 'Stockholm, SE',
    mode: 'På plats',
    summary:
      'Byggde storskaliga digitala plattformar och e-handelslösningar för varumärken som Coop, LeoVegas och Sector Alarm. Tvärfunktionellt arbete i enterprise-miljö med fokus på skalbarhet och en användarupplevelse som faktiskt konverterade.',
    tags: ['JavaScript', 'TypeScript', 'EpiServer', 'JSON', 'CSS', 'Backbone JS'],
  },
  {
    company: 'tretton37',
    role: 'Frontendutvecklare',
    dates: '2017 — 2018',
    period: '1 år 7 mån',
    place: 'Storstockholm',
    mode: 'På plats',
    summary:
      'Utvecklade digitala applikationer inom innovations- och produktutvecklingsprojekt. Samarbetade tätt med utvecklingsteam för att leverera skalbara, användarcentrerade lösningar snarare än teknik för teknikens skull.',
    tags: ['React', 'TypeScript', '.NET', 'SCSS', 'LESS', 'CSS', 'JSON'],
  },
  {
    company: 'ISPY AB',
    role: 'Frontendutvecklare',
    dates: '2014 — 2017',
    period: '2 år 4 mån',
    place: 'Storstockholm',
    mode: 'På plats',
    summary:
      'Designade och utvecklade digitala lösningar för kunder inom finans och pension, med fokus på användarupplevelse och visuell kommunikation. Arbetade brett med webbproduktion och digital design för att stärka kundernas varumärke och digitala närvaro — en tidig lärdom i att teknik och kommunikation hänger ihop.',
    tags: ['JavaScript', 'CoffeeScript', 'jQuery', 'PHP', 'SCSS', 'Wordpress', 'CSS', 'JSON'],
  },
];

export const experienceByLocale: Record<Locale, Role[]> = { sv, en };

export function getExperience(locale: Locale): Role[] {
  return experienceByLocale[locale];
}
