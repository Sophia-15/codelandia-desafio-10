import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Footer } from '../components/Footer';

import { MediumNewsArticle } from '../components/MediumNewsArticle';
import { MostRecentNewsList } from '../components/MostRecentNewsList';
import { Header } from '../components/Header';
import { api } from '../services/api';
import styles from '../styles/pages/home.module.scss';

export type Post = {
  id: string;
  category: string;
  title: string;
  description: string;
  timestamp: number;
  image: string;
}

interface HomeProps {
  latestNews: Post[];
  dailyNews: Post[];
  weeklyNews: Post[];
}

export default function Home({
  latestNews, dailyNews, weeklyNews,
}: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Naped</title>
      </Head>
      <Header />

      <main className={styles.mainContainer}>
        <div className={styles.headerMain}>
          <h1>
            Mundo nerd?
            Naped!
          </h1>
          <p>
            O Naped pode ser sua fonte de informações sobre o mundo nerd e outros
            assuntos relacionados.
          </p>
        </div>

        <section className={styles.latestNewsContainer}>
          {latestNews.slice(0, 1).map((news) => (
            <article key={news.id} className={`${styles.biggerImageNews}`}>
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

          <aside className={styles.asideNews}>
            {latestNews.slice(1, 3).map((news) => (
              <article key={news.id} className={`${styles.latestNews}`}>
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
          </aside>
        </section>

        <section className={styles.dailyWeekNewsContainer}>
          <div className={styles.dailyNewsSection}>
            {dailyNews.map((news) => (
              <article key={news.id} className={styles.dayNews}>
                <div>
                  <span>{news.category}</span>
                  <img src={news.image} alt={news.category} />
                </div>
                <div>
                  <h3>{news.title}</h3>
                  <p>{news.description}</p>
                  <time>{news.timestamp}</time>

                  <Link href={`/news/${news.id}`}>
                    <button type="button">Ler notícia</button>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <aside className={styles.weekNewsContainer}>
            <h1>Notícias da Semana</h1>
            {weeklyNews.map((news) => (
              <MediumNewsArticle news={news} key={news.id} />
            ))}
          </aside>
        </section>

        <MostRecentNewsList />
      </main>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: latestNews } = await api.get('latest_news');
  const { data } = await api.get('daily_news');
  const { data: weeklyNews } = await api.get('weekly_news');

  const dailyNews = data.map((news) => ({
    id: news.id,
    category: news.category,
    title: news.title,
    description: news.description,
    timestamp: new Date(news.timestamp).toLocaleDateString('pt-BR'),
    image: news.image,
  }));

  return {
    props: {
      latestNews,
      dailyNews,
      weeklyNews,
    },
  };
};
