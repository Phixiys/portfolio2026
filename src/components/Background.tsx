import styles from './Background.module.css';

/** Fixed decorative background: faint masked grid + two drifting blurred blobs. */
export default function Background() {
  return (
    <div aria-hidden="true" className={styles.bg}>
      <div className={styles.grid} />
      <div className={`${styles.blob} ${styles.blobCoral} bg-blob`} />
      <div className={`${styles.blob} ${styles.blobSlate} bg-blob`} />
    </div>
  );
}
