'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, localeShort, type Locale } from '@/i18n/config';
import type { Site } from '@/content/site';
import styles from './Nav.module.css';

const clean = (s: string) => (s !== '/' && s.endsWith('/') ? s.slice(0, -1) : s);

export default function Nav({ locale, site }: { locale: Locale; site: Site }) {
  const pathname = usePathname();
  const current = clean(pathname);
  const [open, setOpen] = useState(false);

  // Close the mobile menu on navigation and on Escape.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Swap the first path segment to build the same page in another locale.
  const switchTo = (target: Locale) => {
    const parts = pathname.split('/');
    parts[1] = target;
    return parts.join('/') || `/${target}`;
  };

  const navLinks = (linkClass: string, withBar: boolean) =>
    site.nav.map((item) => {
      const href = `/${locale}${item.seg ? `/${item.seg}` : ''}`;
      const active = current === clean(href);
      return (
        <Link key={item.seg} href={href} className={linkClass} aria-current={active ? 'page' : undefined}>
          {item.label.toUpperCase()}
          {withBar && <span className={`${styles.bar} ${active ? styles.barActive : ''}`} />}
        </Link>
      );
    });

  const langSwitch = (
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
  );

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href={`/${locale}`} className={styles.logo} aria-label={site.ui.homeAria}>
          <span className={styles.mark}>&lt;/&gt;</span>
          <span className={styles.wordmark}>{site.wordmark}</span>
        </Link>

        <div className={styles.links}>
          {navLinks(styles.link, true)}
          {langSwitch}
          <a className={styles.resume} href={site.resumePath} download>
            {site.ui.resume}
          </a>
        </div>

        <button
          type="button"
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={site.ui.menuAria}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>
      </div>

      <div id="mobile-menu" className={`${styles.menu} ${open ? styles.menuOpen : ''}`}>
        <div className={styles.menuInner}>
          {navLinks(styles.menuLink, false)}
          <div className={styles.menuFooter}>
            {langSwitch}
            <a className={styles.resume} href={site.resumePath} download>
              {site.ui.resume}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
