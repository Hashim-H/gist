import styles from './Heading1.module.css';

export default function Heading1({ children }) {
  return <h1 className={styles.content}>{children}</h1>;
}