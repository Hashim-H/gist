// styles
import styles from './Banner.module.css';

// libraries
import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Link className={styles.link} to="/">
        <h1 className={styles.heading}>GIST</h1>
      </Link>
    </div>
  );
}