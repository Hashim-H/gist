import styles from './ViewContainer.module.css';

export default function ViewContainer({ children }) {
  return <div className={styles.contentContainer}>{children}</div>;
}