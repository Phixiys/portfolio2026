import type { Role } from '@/content/experience';
import styles from './ExperienceCard.module.css';

export default function ExperienceCard({ job }: { job: Role }) {
  return (
    <article data-reveal className={styles.card}>
      <div>
        <div className={styles.dates}>{job.dates}</div>
        <div className={styles.period}>{job.period}</div>
        <div className={styles.place}>{job.place}</div>
        <div className={styles.mode}>{job.mode}</div>
      </div>
      <div>
        <h3 className={styles.company}>{job.company}</h3>
        <div className={styles.role}>{job.role}</div>
        <p className={styles.summary}>{job.summary}</p>
        <div className={styles.tags}>
          {job.tags.map((t) => (
            <span key={t} className={styles.tag}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
