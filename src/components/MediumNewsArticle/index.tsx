import Link from 'next/link';
import { Post } from '../../pages';
import { CategoryIndicator } from '../CategoryIndicator';
import styles from './styles.module.scss';

interface MediumNewsArticleProps {
  news: Post
}

export function MediumNewsArticle({ news }: MediumNewsArticleProps) {
  return (
    <article className={styles.mediumNewsArticle}>
      <CategoryIndicator
        category={news.category}
      />
      <img
        src={news.image}
        alt={news.category}
      />
      <Link href={`/news/${news.id}`}>
        <p>
          {news.description}
        </p>
      </Link>
    </article>
  );
}
