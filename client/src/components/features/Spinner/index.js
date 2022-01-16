import styles from './Spinner.module.css';
import { Oval } from 'react-loader-spinner';

export default function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <Oval color="#C7D5E0" />;
    </div>
  );
}