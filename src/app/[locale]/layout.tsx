import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Oswald, Nunito, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';
import Background from '@/components/Background';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Animate from '@/components/Animate';
import { locales, isLocale, altLanguages, type Locale } from '@/i18n/config';
import { getSite } from '@/content/site';

const oswald = Oswald({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-oswald', display: 'swap' });
const nunito = Nunito({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-nunito', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['500'], variable: '--font-mono-jb', display: 'swap' });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const meta: Record<Locale, { title: string; description: string }> = {
  sv: {
    title: 'Sasa Ristic — Senior frontendutvecklare',
    description:
      'Stockholmsbaserad senior frontendutvecklare. Elva år av att bygga snabba, tillgängliga och genuint användbara gränssnitt för krävande varumärken.',
  },
  en: {
    title: 'Sasa Ristic — Senior Frontend Engineer',
    description:
      'Stockholm-based senior frontend engineer. Eleven years building fast, accessible, genuinely useful interfaces for demanding brands.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const m = meta[locale];
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: `/${locale}`, languages: altLanguages('') },
    openGraph: { title: m.title, description: m.description, type: 'website', locale },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const site = getSite(locale);

  return (
    <html lang={locale} className={`${oswald.variable} ${nunito.variable} ${jetbrains.variable}`}>
      <body>
        <Background />
        <Nav locale={locale} site={site} />
        <main className="container" style={{ position: 'relative', zIndex: 10 }}>
          <Animate>{children}</Animate>
          <Footer site={site} />
        </main>
      </body>
    </html>
  );
}
