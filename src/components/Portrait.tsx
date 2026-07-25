import styles from './Portrait.module.css';

/** About portrait. Shows the photo at `src` if provided, otherwise the
 *  diagonal-hatch placeholder. Drop a 4:5 image at public/portrait.jpg and set
 *  site.about.portrait to '/portrait.jpg'. */
export default function Portrait({ src, alt }: { src?: string; alt: string }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <div data-reveal className={styles.portrait}>
        <img className={styles.img} src={src} alt={alt} />
      </div>
    );
  }
  return (
    <div data-reveal className={`${styles.portrait} ${styles.placeholder}`}>
      <span className={styles.placeholderText}>
        PORTRAIT
        <br />
        drop image here
      </span>
    </div>
  );
}
