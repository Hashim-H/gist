import styles from './Heading2.module.css';

export default function Heading2({ children }) {
  return <h2 className={styles.content}>{children}</h2>;
}