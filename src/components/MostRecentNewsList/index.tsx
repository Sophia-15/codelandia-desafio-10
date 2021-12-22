import { useEffect, useState } from 'react';
import { Post } from '../../pages';
import { api } from '../../services/api';
import styles from './styles.module.scss';
import { MediumNewsArticle } from '../MediumNewsArticle';

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
          <MediumNewsArticle key={news.id} news={news} />
        ))}
      </div>
    </section>
  );
}
