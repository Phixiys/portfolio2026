import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ContactCard from '@/components/ContactCard';
import Button from '@/components/ui/Button';
import { getSite } from '@/content/site';
import { isLocale, altLanguages } from '@/i18n/config';
import shared from '@/styles/shared.module.css';
import styles from './contact.module.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'sv' ? 'Kontakt — Sasa Ristic' : 'Contact — Sasa Ristic';
  return { title, alternates: { canonical: `/${locale}/contact`, languages: altLanguages('contact') } };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const site = getSite(locale);

  return (
    <section data-page className={styles.section}>
      <div data-reveal className={`${shared.eyebrow} ${styles.eyebrow}`}>
        {site.contact.eyebrow}
      </div>
      <h2 data-reveal className={styles.title}>
        {site.contact.title}
        <span className={styles.period}>.</span>
      </h2>
      <p data-reveal className={`${shared.lead} ${styles.lead}`}>
        {site.contact.lead}
      </p>

      <div data-reveal className={styles.cards}>
        {site.contact.channels.map((c) => (
          <ContactCard key={c.label} label={c.label} value={c.value} href={c.href} />
        ))}
      </div>

      <div data-reveal>
        <Button download={site.resumePath} variant="coral" size="lg">
          {site.ui.downloadResumeLg}
        </Button>
      </div>
    </section>
  );
}
