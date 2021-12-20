import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { Post } from '../index';
import { Header } from '../../components/Header';
import { api } from '../../services/api';
import styles from './all.module.scss';
import { MostRecentNewsList } from '../../components/MostRecentNewsList';
import { Footer } from '../../components/Footer';

interface NewsProps {
  news: Post;
}

export default function News({ news }: NewsProps) {
  return (
    <>
      <Head>
        <title>{news.title} | Naped</title>
      </Head>
      <Header />
      <main className={styles.slugContainer}>
        <div className={styles.newsHeader}>
          <h1>{news.title}</h1>
          <p>{news.description}</p>
          <time>
            {new Date(news.timestamp).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })}
          </time>
        </div>

        <div className={styles.imageContainer}>
          <span>{news.category}</span>
          <img src={news.image} alt={news.description} />
        </div>

        <div className={styles.contentContainer}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
            mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu
            odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec
            ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus
            pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus
            dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet
            gravida sagittis. Ut eleifend ornare leo et auctor.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
            mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu
            odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec
            ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus
            pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus
            dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet
            gravida sagittis. Ut eleifend ornare leo et auctor.
          </p>

          <img src={news.image} alt={news.category} />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
            mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu
            odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec
            ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus
            pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus
            dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet
            gravida sagittis. Ut eleifend ornare leo et auctor.
          </p>
        </div>
        <MostRecentNewsList />
      </main>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  const { data: news } = await api.get(`all/${slug}`);

  return {
    props: {
      news,
    },
  };
};
