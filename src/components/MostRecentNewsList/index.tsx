import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Post } from '../../pages';
import { api } from '../../services/api';
import styles from './styles.module.scss';

export function MostRecentNewsList() {
  const [mostRecentNews, setMostRecentNews] = useState<Post[]>([]);

  useEffect(() => {
    async function handleGetMostRecentNews() {
      const { data } = await api.get<Post[]>('most_recent_news');

      setMostRecentNews(data);
    }

    handleGetMostRecentNews();
  }, []);

  return (
    <section className={styles.mostRecentNews}>
      <h1>
        Notícias mais recentes
      </h1>
      <div className={styles.mostRecentNewsContainer}>

        {mostRecentNews.map((news) => (
          <article key={news.id} className={styles.news}>
            <span> {news.category} </span>
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
        ))}
      </div>
    </section>
  );
}
