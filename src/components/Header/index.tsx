import Link from 'next/link';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1>Naped</h1>
      </Link>

      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/series">
            <a>Séries</a>
          </Link>
        </li>
        <li>
          <Link href="/filmes">
            <a>Filmes</a>
          </Link>
        </li>
        <li>
          <Link href="/animes">
            <a>Animes</a>
          </Link>
        </li>
        <li>
          <Link href="/games">
            <a>Games</a>
          </Link>
        </li>
      </ul>

      <button type="button">
        Minha conta
      </button>
    </header>
  );
}
