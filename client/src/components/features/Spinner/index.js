import styles from './Spinner.module.css';

export default function Spinner() {
  return (
    <div className={styles.spinner}>
      <span className={styles.spinnerMessage}>Loading...</span>
    </div>
  );
}