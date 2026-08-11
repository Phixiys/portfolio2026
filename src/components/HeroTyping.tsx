'use client';

import { useEffect, useState } from 'react';
import type { Locale } from '@/i18n/config';
import { useReducedMotion } from '@/lib/useReducedMotion';
import styles from './HeroTyping.module.css';

type Frame = { s: string; d: number };

// Build the "typing code" sequence: type, make a mistake, backspace, retype.
// One scripted variant per locale so the typo/retype beat feels natural in each.
function buildTypeSeq(locale: Locale): Frame[] {
  const seq: Frame[] = [];
  let cur = '';
  const rand = (a: number, b: number) => a + Math.random() * (b - a);
  const type = (text: string, min = 48, max = 104) => {
    for (const ch of text) {
      cur += ch;
      seq.push({ s: cur, d: rand(min, max) });
    }
  };
  const back = (n: number, d = 42) => {
    for (let i = 0; i < n; i++) {
      cur = cur.slice(0, -1);
      seq.push({ s: cur, d });
    }
  };
  const hold = (d: number) => seq.push({ s: cur, d });

  if (locale === 'sv') {
    // "Frontendutveckling med öga för detaljer."
    type('Jag bygger pro');
    hold(140);
    type('teser', 60, 120); // typo: "detajler"
    hold(460); // notice it
    back(5); // back to "det"
    hold(160);
    type('dukter'); // -> "detaljer"
    hold(120);
    type(' som fungerar - ')
    hold(50)
    type('inte bara kod som komprimerar.')
    hold(10)
    back(10)
    type('mpilerar.');
    return seq;
  }

  // en — "I build products that work — not just code that compiles."
  type('I build pro');
  hold(140);
  type('fets', 60, 120);
  hold(460);
  back(5);
  hold(160);
  type('oducts');
  hold(120);
  type(' that work - ', 60, 120);
  hold(50); // notice it
  type('not just code that compiles', 60, 120);
  hold(160);
  type('.');
  return seq;
}

/** Renders the hero H1 with the scripted typing animation and a blinking caret.
 *  Loops forever: types the sentence, holds it, then retypes. */
export default function HeroTyping({ locale, finalText }: { locale: Locale; finalText: string }) {
  const reduced = useReducedMotion();
  const [typed, setTyped] = useState('');

  useEffect(() => {
    if (reduced) {
      setTyped(finalText);
      return;
    }

    const seq = buildTypeSeq(locale);
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    setTyped('');

    const step = () => {
      if (i >= seq.length) {
        // Reached the end — let the finished sentence sit, then loop.
        timer = setTimeout(() => {
          i = 0;
          setTyped('');
          timer = setTimeout(step, 400); // brief beat before retyping
        }, 2600);
        return;
      }
      const frame = seq[i++];
      setTyped(frame.s);
      timer = setTimeout(step, frame.d);
    };
    timer = setTimeout(step, 620); // let the hero entrance settle first

    return () => clearTimeout(timer);
  }, [reduced, locale, finalText]);

  // Split a trailing period so it can be coral (matches final "detail.").
  const hasPeriod = typed.endsWith('.');
  const body = hasPeriod ? typed.slice(0, -1) : typed;

  return (
    <h1 data-hero className={styles.h1}>
      {body}
      {hasPeriod && <span className={styles.period}>.</span>}
      <span aria-hidden="true" className={`${styles.caret} caret`} />
    </h1>
  );
}
