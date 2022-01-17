import styles from './ListItemContentContainer.module.css';

export default function ListItemContentContainer({ children }) {
  return <div className={styles.contentContainer}>{children}</div>
}