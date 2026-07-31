import type { Locale } from '@/i18n/config';

export type Testimonial = { quote: string; who: string };

// ❗ placeholders — swap for real quotes + attributions before launch.
const en: Testimonial[] = [
  {
    quote:
      'Sasa raises the bar on everything he touches — accessibility, performance, and the small details that make a product feel finished.',
    who: 'Placeholder · Engineering Manager',
  },
  {
    quote:
      'A rare engineer who starts from the business problem. He made our whole frontend team faster.',
    who: 'Placeholder · Product Lead',
  },
];

const sv: Testimonial[] = [
  {
    quote:
      'Sasa höjer ribban på allt han rör vid — tillgänglighet, prestanda och de små detaljerna som får en produkt att kännas färdig.',
    who: 'Platshållare · Engineering Manager',
  },
  {
    quote:
      'En ovanlig utvecklare som utgår från affärsproblemet. Han gjorde hela vårt frontendteam snabbare.',
    who: 'Platshållare · Product Lead',
  },
];

export const testimonialsByLocale: Record<Locale, Testimonial[]> = { sv, en };

export function getTestimonials(locale: Locale): Testimonial[] {
  return testimonialsByLocale[locale];
}
