import Link from 'next/link';
import styles from '../styles/pages/error.module.scss';

export default function Error404() {
  return (
    <>
      <header className={styles.headerError}>
        <h1>Naped</h1>

        <ul>
          <li>404</li>
          <li>404</li>
          <li>404</li>
          <li>404</li>
          <li>404</li>
        </ul>
      </header>

      <main className={styles.mainErrorContainer}>
        <section className={styles.leftSection}>
          <h1>
            Tenho más notícias
            para você!
          </h1>
          <p>
            A página que você está procurando pode ter sido removida ou está
            temporariamente indisponível.
          </p>

          <Link href="/">
            <button type="button">
              Voltar para home
            </button>
          </Link>
        </section>

        <section className={styles.rightSection}>
          <img src="/error404.svg" alt="Error 404" />
          <p>
            Ups! Você chegou no espaço...
            volte para o mundo nerd!
          </p>
        </section>
      </main>
    </>

  );
}
