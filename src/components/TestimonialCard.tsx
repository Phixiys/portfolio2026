import type { Testimonial } from '@/content/testimonials';
import styles from './TestimonialCard.module.css';

export default function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className={styles.card}>
      <blockquote className={styles.quote}>&ldquo;{item.quote}&rdquo;</blockquote>
      <figcaption className={styles.who}>— {item.who}</figcaption>
    </figure>
  );
}
