import styles from './NavigationLinkContainer.module.css';

export default function NavigationLinkContainer({ children }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {children}
      </ul>
    </nav>
  );
}