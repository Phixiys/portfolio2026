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
      'Modernised the digital platform for one of Sweden’s leading real-estate agencies. Led WCAG accessibility work to make it inclusive for every user, and partnered tightly with the business so each solution answered a real need.',
    tags: ['.NET', 'JSON', 'Accessibility', '+8 more'],
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
    tags: ['React', 'TypeScript', 'JSON', '+8 more'],
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
    tags: ['Salesforce', 'JSON', '+5 more'],
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
    tags: ['JavaScript', 'JSON', '+7 more'],
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
    tags: ['React', 'JSON', '+4 more'],
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
    tags: ['CSS', 'JSON'],
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
    tags: ['CSS', 'JSON'],
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
    tags: ['CSS', 'JSON'],
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
      'Moderniserade den digitala plattformen för en av Sveriges ledande fastighetsmäklare. Ledde WCAG-arbetet för tillgänglighet så att den blev inkluderande för alla användare, och samarbetade tätt med affären så att varje lösning svarade mot ett verkligt behov.',
    tags: ['.NET', 'JSON', 'Tillgänglighet', '+8 till'],
  },
  {
    company: 'Netigate',
    role: 'Senior frontendutvecklare',
    dates: '2021 — 2022',
    period: '1 år 5 mån',
    place: 'Stockholm, SE',
    mode: 'På plats',
    summary:
      'Byggde ut en SaaS-plattform utifrån de funktioner kunderna faktiskt efterfrågade, och drev migreringen till TypeScript — en satsning på underhållbarhet som gav utdelning i tempo för hela teamet.',
    tags: ['React', 'TypeScript', 'JSON', '+8 till'],
  },
  {
    company: 'Improove',
    role: 'Senior frontendutvecklare',
    dates: '2021',
    period: '9 mån',
    place: 'Stockholm, SE',
    mode: 'På plats',
    summary:
      'Byggde e-handelsupplevelser på Salesforce Commerce Cloud för internationella varumärken som Urbanears, Marshall och Plantagen — med fokus på konvertering och kundresa snarare än teknik för teknikens skull.',
    tags: ['Salesforce', 'JSON', '+5 till'],
  },
  {
    company: 'Comprend',
    role: 'Frontendutvecklare',
    dates: '2019 — 2021',
    period: '1 år 4 mån',
    place: 'Stockholm, SE',
    mode: 'På plats',
    summary:
      'Levererade digitala enterprise-lösningar för tunga varumärken — Swedbank Pay, Vattenfall, Capio och Billerud — i tvärfunktionellt samarbete med design och intressenter för att bygga det som löste det verkliga problemet.',
    tags: ['JavaScript', 'JSON', '+7 till'],
  },
  {
    company: 'Rebel and Bird',
    role: 'Frontendutvecklare',
    dates: '2019',
    period: '6 mån',
    place: 'Stockholm, SE',
    mode: 'På plats',
    summary:
      'Byggde en progressiv webbapp för Match Center Media med prestanda och användarupplevelse i centrum, i nära samarbete med intressenter kring verkligt innehåll och mediebehov.',
    tags: ['React', 'JSON', '+4 till'],
  },
  {
    company: 'NoA Ignite Sweden',
    role: 'Frontendutvecklare',
    dates: '2018 — 2019',
    period: '6 mån',
    place: 'Stockholm, SE',
    mode: 'På plats',
    summary:
      'Byggde storskaliga digitala plattformar och e-handel för varumärken som Coop, LeoVegas och Sector Alarm — i enterprise-skala, med en UX som faktiskt konverterade.',
    tags: ['CSS', 'JSON'],
  },
  {
    company: 'tretton37',
    role: 'Frontendutvecklare',
    dates: '2017 — 2018',
    period: '1 år 7 mån',
    place: 'Storstockholm',
    mode: 'På plats',
    summary:
      'Utvecklade applikationer inom innovations- och produktutvecklingsprojekt, i nära samarbete med utvecklingsteam för att leverera skalbara, användarcentrerade lösningar.',
    tags: ['CSS', 'JSON'],
  },
  {
    company: 'ISPY AB',
    role: 'Frontendutvecklare',
    dates: '2014 — 2017',
    period: '2 år 4 mån',
    place: 'Storstockholm',
    mode: 'På plats',
    summary:
      'Designade och byggde digitala lösningar för finans- och pensionskunder, med fokus på användarupplevelse och visuell kommunikation — en tidig läxa i att teknik och kommunikation hör ihop.',
    tags: ['CSS', 'JSON'],
  },
];

export const experienceByLocale: Record<Locale, Role[]> = { sv, en };

export function getExperience(locale: Locale): Role[] {
  return experienceByLocale[locale];
}
