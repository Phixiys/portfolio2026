import HeroTyping from '@/components/HeroTyping';
import Button from '@/components/ui/Button';
import { getSite } from '@/content/site';
import { brands } from '@/content/brands';
import { isLocale } from '@/i18n/config';
import { notFound } from 'next/navigation';
import shared from '@/styles/shared.module.css';
import styles from './home.module.css';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const site = getSite(locale);

  return (
    <section data-page className={styles.section}>
      <div data-hero className={shared.eyebrowHome}>
        {site.eyebrow}
      </div>

      <HeroTyping locale={locale} finalText={site.heroFinalText} />

      <p data-hero className={`${shared.lead} ${styles.lead}`}>
        {site.heroLead}
      </p>

      <div data-hero className={styles.actions}>
        <Button href={`/${locale}/work`} variant="ink">
          {site.ui.viewExperience}
        </Button>
        <Button download={site.resumePath} variant="outline">
          {site.ui.downloadResume}
        </Button>
      </div>

      <div data-hero className={styles.stats}>
        {site.stats.map((s) => (
          <div key={s.label}>
            <div className={styles.statNum}>
              {s.value}
              {s.suffix && <span className={styles.statSuffix}>{s.suffix}</span>}
            </div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      <div data-hero className={styles.brands}>
        <div className={shared.monoLabel}>{site.ui.selectedBrands}</div>
        <div className={styles.brandRow}>
          {brands.map((b) => (
            <span key={b} className={styles.pill}>
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
