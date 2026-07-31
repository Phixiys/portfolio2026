import Portrait from '@/components/Portrait';
import SkillGroup from '@/components/SkillGroup';
import TestimonialCard from '@/components/TestimonialCard';
import { site } from '@/content/site';
import { skillGroups } from '@/content/skills';
import { testimonials } from '@/content/testimonials';
import shared from '@/styles/shared.module.css';
import styles from './about.module.css';

export const metadata = { title: 'About — Sasa Ristic' };

export default function AboutPage() {
  return (
    <section data-page className={styles.section}>
      <div data-reveal className={shared.eyebrow}>
        {site.about.eyebrow}
      </div>

      <div className={styles.grid}>
        <div>
          <h2 data-reveal className={`${shared.sectionTitle} ${styles.title}`}>
            {site.about.title}
          </h2>
          {site.about.paragraphs.map((p, i) => (
            <p data-reveal key={i} className={`${styles.p} ${i === 0 ? styles.p1 : styles.p2}`}>
              {p}
            </p>
          ))}
        </div>
        <Portrait src={site.about.portrait || undefined} alt={`${site.name} portrait`} />
      </div>

      <div data-reveal className={styles.block}>
        <div className={styles.sectionLabel}>Skills &amp; tools</div>
        <div className={styles.skillsGrid}>
          {skillGroups.map((g) => (
            <SkillGroup key={g.label} group={g} />
          ))}
        </div>
      </div>

      <div data-reveal className={styles.blockTestimonials}>
        <div className={`${styles.sectionLabel} ${styles.sectionLabelTight}`}>What people say</div>
        <div className={styles.placeholderNote}>{'// placeholders — swap for real quotes'}</div>
        <div className={styles.testimonialGrid}>
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} item={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
