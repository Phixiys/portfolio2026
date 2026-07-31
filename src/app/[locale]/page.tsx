import HeroTyping from '@/components/HeroTyping';
import Button from '@/components/ui/Button';
import { site } from '@/content/site';
import { brands } from '@/content/brands';
import shared from '@/styles/shared.module.css';
import styles from './home.module.css';

export default function HomePage() {
  return (
    <section data-page className={styles.section}>
      <div data-hero className={shared.eyebrowHome}>
        {site.eyebrow}
      </div>

      <HeroTyping />

      <p data-hero className={`${shared.lead} ${styles.lead}`}>
        {site.heroLead}
      </p>

      <div data-hero className={styles.actions}>
        <Button href="/work" variant="ink">
          View experience →
        </Button>
        <Button download={site.resumePath} variant="outline">
          Download résumé ↓
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
        <div className={shared.monoLabel}>Selected brands</div>
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
