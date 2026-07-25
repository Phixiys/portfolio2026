'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems, site } from '@/content/site';
import styles from './Nav.module.css';

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label={`${site.name} — home`}>
          <span className={styles.mark}>&lt;/&gt;</span>
          <span className={styles.wordmark}>{site.wordmark}</span>
        </Link>

        <div className={styles.links}>
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={styles.link} aria-current={active ? 'page' : undefined}>
                {item.label.toUpperCase()}
                <span className={`${styles.bar} ${active ? styles.barActive : ''}`} />
              </Link>
            );
          })}
          <a className={styles.resume} href={site.resumePath} download>
            Résumé ↓
          </a>
        </div>
      </div>
    </nav>
  );
}
