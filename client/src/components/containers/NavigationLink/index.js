import styles from './NavigationLink.module.css';
import { Link } from 'react-router-dom';

export default function NavigationLink({ to, children }) {
  return (
    <li className={styles.li}>
      <Link className={styles.link} to={to}>
        {children}
      </Link>
    </li>
  );
}