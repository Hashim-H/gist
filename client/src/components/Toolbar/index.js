import styles from './Toolbar.module.css';

export default function Toolbar({ children }) {
  return <div className={styles.toolbar}>{children}</div>;
}