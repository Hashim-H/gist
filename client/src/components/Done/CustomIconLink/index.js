// styles
import styles from './CustomIconLink.module.css';

// libraries
import { Link } from 'react-router-dom';

export default function CustomIconLink({ to, children }) {
  return <Link className={styles.iconLink} to={to}>{children}</Link>;
}