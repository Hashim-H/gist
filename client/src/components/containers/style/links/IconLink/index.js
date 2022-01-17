import styles from './IconLink.module.css';
import { Link } from 'react-router-dom';

export default function IconLink({ uniqueKey, to, children }) {
  return (
    <Link
      key={uniqueKey}
      className={styles.contentContainer}
      to={to}>{children}
    </Link>
  );
}