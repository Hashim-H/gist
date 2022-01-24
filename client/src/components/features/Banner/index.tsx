// styles
import styles from './Banner.module.css';

// libraries
import { Link } from 'react-router-dom';
import * as React from 'react'

const Banner: React.FC = (): JSX.Element => {
  return (
    <div className={styles.banner}>
      <Link className={styles.link} to="/">
        <h1 className={styles.heading}>GIST</h1>
      </Link>
    </div>
  );
}

export default Banner;