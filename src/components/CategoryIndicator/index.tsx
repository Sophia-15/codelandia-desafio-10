import styles from './styles.module.scss';

interface CategoryIndicatorProps {
  category: string;
}

export function CategoryIndicator({ category }: CategoryIndicatorProps) {
  return (
    <span className={styles.categoryIndicator}>
      {category}
    </span>
  );
}
