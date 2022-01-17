import styles from './Heading2.module.css';

export default function Heading2({ children }) {
  return <h2 className={styles.h2}>{children}</h2>;
}