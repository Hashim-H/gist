import styles from './NavigationBar.module.css';

export default function NavigationBar({ children }) {
  return (
    <div className={styles.background}>
      <div className={styles.contentContainer}>
        {children}
      </div>
    </div>
  );
}