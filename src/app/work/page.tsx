import ExperienceCard from '@/components/ExperienceCard';
import { experience } from '@/content/experience';
import { site } from '@/content/site';
import shared from '@/styles/shared.module.css';
import styles from './work.module.css';

export const metadata = { title: 'Work — Sasa Ristic' };

export default function WorkPage() {
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
