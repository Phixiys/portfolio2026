'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** Client wrapper that runs the page-entrance, hero stagger and scroll reveals
 *  on every route change (README §Page entrance + scroll reveals). Honors
 *  prefers-reduced-motion by leaving content in its natural (visible) state. */
export default function Animate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scope = ref.current;
    if (!scope) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo(0, 0);

    if (reduced) {
      // Ensure nothing is left hidden; no motion.
      gsap.set(scope.querySelectorAll('[data-page],[data-hero],[data-reveal]'), {
        opacity: 1,
        y: 0,
        clearProps: 'transform',
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach((t) => t.kill());

      gsap.fromTo('[data-page]', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });

      if (pathname === '/') {
        gsap.fromTo(
          '[data-hero]',
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out', delay: 0.05 }
        );
      }

      requestAnimationFrame(() => {
        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 90%', once: true },
            }
          );
        });
        ScrollTrigger.refresh();
      });
    }, scope);

    return () => ctx.revert();
  }, [pathname]);

  return <div ref={ref}>{children}</div>;
}
