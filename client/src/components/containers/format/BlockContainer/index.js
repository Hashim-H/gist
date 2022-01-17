import styles from './BlockContainer.module.css'

export default function BlockContainer({ children }) {
  return <div className={styles.contentContainer}>{children}</div>;
}