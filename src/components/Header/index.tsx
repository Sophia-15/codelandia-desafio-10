import Link from 'next/link';
import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import styles from './styles.module.scss';

export function Header() {
  const [isHamburguerMenuShowing, setIsHamburguerMenuShowing] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/">
          <h1>Naped</h1>
        </Link>

        <nav className={isHamburguerMenuShowing ? styles.activeNav : styles.nav}>
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

            <li>
              <button type="button">
                Minha conta
              </button>
            </li>
          </ul>
        </nav>

        <div className={styles.hamburguerReact}>
          <Hamburger
            toggled={isHamburguerMenuShowing}
            toggle={setIsHamburguerMenuShowing}
            rounded
            color="#FEFBFB"
            size={25}
          />
        </div>

      </div>
    </header>
  );
}
