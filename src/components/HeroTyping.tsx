'use client';

import { useEffect, useState } from 'react';
import { site } from '@/content/site';
import { useReducedMotion } from '@/lib/useReducedMotion';
import styles from './HeroTyping.module.css';

type Frame = { s: string; d: number };

// Build the "typing code" sequence: type, make a mistake, backspace, retype.
// Mirrors the design prototype exactly (README §Hero typing animation).
function buildTypeSeq(): Frame[] {
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

  type('Frontend eng');
  hold(160);
  type('eneering', 60, 120); // typo: "engeneering"
  hold(420); // notice the mistake
  back(8); // delete back to "Frontend eng"
  hold(180);
  type('ineering with an eye for de');
  hold(140);
  type('tials', 60, 120); // typo: "detials"
  hold(460); // notice it
  back(4); // back to "det"
  hold(160);
  type('ail');
  hold(120);
  type('.');
  return seq;
}

/** Renders the hero H1 with the scripted typing animation and a blinking caret.
 *  Restarts whenever `runKey` changes (e.g. navigating back to Home). */
export default function HeroTyping({ runKey }: { runKey?: string | number }) {
  const reduced = useReducedMotion();
  const final = site.heroFinalText;
  const [typed, setTyped] = useState('');

  useEffect(() => {
    if (reduced) {
      setTyped(final);
      return;
    }

    const seq = buildTypeSeq();
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    setTyped('');

    const step = () => {
      if (i >= seq.length) return;
      const frame = seq[i++];
      setTyped(frame.s);
      timer = setTimeout(step, frame.d);
    };
    timer = setTimeout(step, 620); // let the hero entrance settle first

    return () => clearTimeout(timer);
  }, [reduced, final, runKey]);

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
