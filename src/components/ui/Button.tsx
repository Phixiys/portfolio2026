import Link from 'next/link';
import styles from './Button.module.css';

type Variant = 'ink' | 'outline' | 'coral';
type Size = 'md' | 'lg';

type Props = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string; // internal route (next/link)
  download?: string; // external/asset download (plain anchor)
  className?: string;
};

/** Shared button. Renders a next/link for internal routes, a plain anchor for
 *  downloads, so the same visual style covers navigation and résumé actions. */
export default function Button({ children, variant = 'ink', size = 'md', href, download }: Props) {
  const cls = `${styles.btn} ${styles[size]} ${styles[variant]}`;

  if (download !== undefined) {
    return (
      <a className={cls} href={download} download>
        {children}
      </a>
    );
  }
  if (href) {
    return (
      <Link className={cls} href={href}>
        {children}
      </Link>
    );
  }
  return <span className={cls}>{children}</span>;
}
