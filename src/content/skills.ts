import type { Locale } from '@/i18n/config';

export type SkillGroup = { label: string; items: string[] };

const en: SkillGroup[] = [
  { label: 'Languages & frameworks', items: ['TypeScript', 'React', 'JavaScript', '.NET', 'HTML', 'CSS', 'JSON'] },
  { label: 'Platforms', items: ['Salesforce Commerce Cloud', 'PWA', 'SaaS'] },
  { label: 'Practice', items: ['Accessibility (WCAG)', 'Agile', 'UX', 'Performance'] },
];

const sv: SkillGroup[] = [
  { label: 'Språk & ramverk', items: ['TypeScript', 'React', 'JavaScript', '.NET', 'HTML', 'CSS', 'JSON'] },
  { label: 'Plattformar', items: ['Salesforce Commerce Cloud', 'PWA', 'SaaS'] },
  { label: 'Arbetssätt', items: ['Tillgänglighet (WCAG)', 'Agilt', 'UX', 'Prestanda'] },
];

export const skillGroupsByLocale: Record<Locale, SkillGroup[]> = { sv, en };

export function getSkillGroups(locale: Locale): SkillGroup[] {
  return skillGroupsByLocale[locale];
}
