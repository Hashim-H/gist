import styles from './ViewContainer.module.css';

export default function ViewContainer({ children }) {
  return <div className={styles.viewContainer}>{children}</div>;
}