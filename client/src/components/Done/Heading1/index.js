import styles from './Heading1.module.css';

export default function Heading1({ children }) {
  return <h1 className={styles.h1}>{children}</h1>;
}