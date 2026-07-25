import { site } from '@/content/site';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.left}>{site.footer.left}</span>
      <span className={styles.right}>{site.footer.right}</span>
    </footer>
  );
}
