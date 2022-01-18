import styles from './ViewHeaderContainer.module.css'

export default function ViewHeaderContainer({ children }) {
  return <div className={styles.viewHeaderContainer}>{children}</div>;
}