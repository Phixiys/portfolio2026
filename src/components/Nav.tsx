'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, localeShort, type Locale } from '@/i18n/config';
import type { Site } from '@/content/site';
import styles from './Nav.module.css';

const clean = (s: string) => (s !== '/' && s.endsWith('/') ? s.slice(0, -1) : s);

export default function Nav({ locale, site }: { locale: Locale; site: Site }) {
  const pathname = usePathname();
  const current = clean(pathname);

  // Swap the first path segment to build the same page in another locale.
  const switchTo = (target: Locale) => {
    const parts = pathname.split('/');
    parts[1] = target;
    return parts.join('/') || `/${target}`;
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href={`/${locale}`} className={styles.logo} aria-label={site.ui.homeAria}>
          <span className={styles.mark}>&lt;/&gt;</span>
          <span className={styles.wordmark}>{site.wordmark}</span>
        </Link>

        <div className={styles.links}>
          {site.nav.map((item) => {
            const href = `/${locale}${item.seg ? `/${item.seg}` : ''}`;
            const active = current === clean(href);
            return (
              <Link key={item.seg} href={href} className={styles.link} aria-current={active ? 'page' : undefined}>
                {item.label.toUpperCase()}
                <span className={`${styles.bar} ${active ? styles.barActive : ''}`} />
              </Link>
            );
          })}

          <div className={styles.langSwitch} role="group" aria-label="Language">
            {locales.map((l, i) => (
              <span key={l}>
                {i > 0 && <span className={styles.langSep} aria-hidden="true">/</span>}
                <Link
                  href={switchTo(l)}
                  className={`${styles.lang} ${l === locale ? styles.langActive : ''}`}
                  aria-current={l === locale ? 'true' : undefined}
                  lang={l}
                  hrefLang={l}
                >
                  {localeShort[l]}
                </Link>
              </span>
            ))}
          </div>

          <a className={styles.resume} href={site.resumePath} download>
            {site.ui.resume}
          </a>
        </div>
      </div>
    </nav>
  );
}
