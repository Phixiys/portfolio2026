// Locale configuration for the bilingual (Swedish / English) site.
// Swedish is the default because the audience is primarily the Stockholm market.

export const locales = ['sv', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'sv';

export const localeNames: Record<Locale, string> = {
  sv: 'Svenska',
  en: 'English',
};

/** Short label for the language switcher. */
export const localeShort: Record<Locale, string> = {
  sv: 'SV',
  en: 'EN',
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Build a hreflang alternates map for a page segment ('' = home, 'work', …). */
export function altLanguages(seg: string): Record<string, string> {
  const path = (l: Locale) => `/${l}${seg ? `/${seg}` : ''}`;
  return { sv: path('sv'), en: path('en'), 'x-default': path(defaultLocale) };
}
