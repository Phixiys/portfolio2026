import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ExperienceCard from '@/components/ExperienceCard';
import { getExperience } from '@/content/experience';
import { getSite } from '@/content/site';
import { isLocale, altLanguages } from '@/i18n/config';
import shared from '@/styles/shared.module.css';
import styles from './work.module.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'sv' ? 'Arbete — Sasa Ristic' : 'Work — Sasa Ristic';
  return { title, alternates: { canonical: `/${locale}/work`, languages: altLanguages('work') } };
}

export default async function WorkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const site = getSite(locale);
  const experience = getExperience(locale);

  return (
    <section data-page className={styles.section}>
      <div data-reveal className={shared.eyebrow}>
        {site.work.eyebrow}
      </div>
      <h2 data-reveal className={`${shared.sectionTitle} ${styles.title}`}>
        {site.work.title}
      </h2>
      <p data-reveal className={`${shared.lead} ${styles.intro}`}>
        {site.work.intro}
      </p>
      <div className={styles.list}>
        {experience.map((job) => (
          <ExperienceCard key={job.company} job={job} />
        ))}
      </div>
    </section>
  );
}
