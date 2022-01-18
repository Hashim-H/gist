// styles
import styles from './IconLinkContainer.module.css';

// libraries
import { Link } from 'react-router-dom';

export default function IconLinkContainer({ to, children }) {
  return <Link className={styles.iconLinkContainer} to={to}>{children}</Link>;
}