// style
import styles from './Nav.module.css';

// libraries
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.nav}>
        <li>
          <Link className={styles.navLink} to={"/"}>My Lists</Link>
        </li>
        <li>
          <Link className={styles.navLink} to={"/friends"}>Friends</Link>
        </li>
        <li>
          <Link to={"/"} className={styles.navLink}>Logout</Link>
        </li>
      </ul>
    </nav>
  );
}