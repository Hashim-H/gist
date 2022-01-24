import styles from './ViewSectionContainer.module.css'

export default function ViewSectionContainer({ children }) {
  return <div className={styles.viewSectionContainer}>{children}</div>;
}