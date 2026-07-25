import ContactCard from '@/components/ContactCard';
import Button from '@/components/ui/Button';
import { site } from '@/content/site';
import shared from '@/styles/shared.module.css';
import styles from './contact.module.css';

export const metadata = { title: 'Contact — Sasa Ristic' };

export default function ContactPage() {
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
          Download résumé (PDF) ↓
        </Button>
      </div>
    </section>
  );
}
