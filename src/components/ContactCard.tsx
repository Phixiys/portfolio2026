import styles from './ContactCard.module.css';

type Props = { label: string; value: string; href: string };

export default function ContactCard({ label, value, href }: Props) {
  const external = href.startsWith('http');
  return (
    <a
      className={styles.card}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
    </a>
  );
}
