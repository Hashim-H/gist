import styles from './Header.module.css';

export default function Header({ setGamePickerOpen }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Pick Games</h3>
      <button
        className={styles.doneButton}
        onClick={() => setGamePickerOpen(false)}>
        Done
      </button>
    </div>
  );
};