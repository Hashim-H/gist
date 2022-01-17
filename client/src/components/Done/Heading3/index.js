import styles from './Heading3.module.css';

export default function Heading3({ children }) {
  return <h3 className={styles.h3}>{children}</h3>;
}