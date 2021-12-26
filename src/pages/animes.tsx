import { GetStaticProps } from 'next';
import Head from 'next/head';

import { AiOutlineSearch } from 'react-icons/ai';

import { Post } from '.';
import { api } from '../services/api';
import styles from '../styles/pages/animes.module.scss';
import { MediumNewsArticle } from '../components/MediumNewsArticle';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

interface AnimePageProps {
  animeNews: Post[];
}

export default function Animes({ animeNews }: AnimePageProps) {
  return (
    <>
      <Head>
        <title>Animes | Naped</title>
      </Head>
      <Header />

      <main className={styles.animeContainer}>
        <div className={styles.animeBanner}>
          <h1>Animes</h1>
          <p>
            O Naped pode ser sua fonte de informações sobre o mundo nerd e outros
            assuntos relacionados.
          </p>
          <img src="https://images5.alphacoders.com/528/thumb-1920-528725.jpg" alt="Obito Uchua" />
        </div>

        <div className={styles.searchContainer}>
          <input type="text" placeholder="Quer ajuda na procura? Pesquise aqui" />
          <AiOutlineSearch />
        </div>

        <section className={styles.animeNewsContainer}>
          {animeNews.map((news) => (
            <>
              <MediumNewsArticle news={news} key={news.id} />
              <MediumNewsArticle news={news} key={news.id} />
              <MediumNewsArticle news={news} key={news.id} />
              <MediumNewsArticle news={news} key={news.id} />
            </>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: animeNews } = await api.get<Post[]>('animes');

  return {
    props: {
      animeNews,
    },
  };
};
