import type { SkillGroup as Group } from '@/content/skills';
import styles from './SkillGroup.module.css';

export default function SkillGroup({ group }: { group: Group }) {
  return (
    <div>
      <div className={styles.label}>{group.label}</div>
      <div className={styles.items}>
        {group.items.map((s) => (
          <span key={s} className={styles.chip}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
