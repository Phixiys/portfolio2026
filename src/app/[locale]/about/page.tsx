import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Portrait from '@/components/Portrait';
import SkillGroup from '@/components/SkillGroup';
import TestimonialCard from '@/components/TestimonialCard';
import { getSite } from '@/content/site';
import { getSkillGroups } from '@/content/skills';
import { getTestimonials } from '@/content/testimonials';
import { isLocale, altLanguages } from '@/i18n/config';
import shared from '@/styles/shared.module.css';
import styles from './about.module.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'sv' ? 'Om mig — Sasa Ristic' : 'About — Sasa Ristic';
  return { title, alternates: { canonical: `/${locale}/about`, languages: altLanguages('about') } };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const site = getSite(locale);
  const skillGroups = getSkillGroups(locale);
  const testimonials = getTestimonials(locale);

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
        <div className={styles.sectionLabel}>{site.ui.skillsTitle}</div>
        <div className={styles.skillsGrid}>
          {skillGroups.map((g) => (
            <SkillGroup key={g.label} group={g} />
          ))}
        </div>
      </div>

      <div data-reveal className={styles.blockTestimonials}>
        {/*<div className={`${styles.sectionLabel} ${styles.sectionLabelTight}`}>{site.ui.testimonialsTitle}</div>
        <div className={styles.placeholderNote}>{site.ui.testimonialsNote}</div>
        <div className={styles.testimonialGrid}>
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} item={t} />
          ))}
        </div>*/}
      </div>
    </section>
  );
}
