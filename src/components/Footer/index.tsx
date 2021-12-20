import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <span>Naped</span>
      <p>
        Todas as imagens de filmes, séries e etc são marcas registradas dos
        seus respectivos proprietários.
      </p>
    </footer>
  );
}
