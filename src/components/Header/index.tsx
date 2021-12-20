import Link from 'next/link';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <h1>Naped</h1>

      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>Séries</li>
        <li>Filmes</li>
        <li>Animes</li>
        <li>Games</li>
      </ul>

      <button type="button">
        Minha conta
      </button>
    </header>
  );
}
