import styles from './Header.module.css';
import * as React from 'react';

interface Props {
  setGamePickerOpen: Function;
}

const Header: React.FC<Props> = ({ setGamePickerOpen }): JSX.Element => {
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

export default Header;
