// styles
import styles from './ListLinkContainer.module.css';

// libraries
import { Link } from 'react-router-dom';

export default function ListLinkContainer({ to, children }) {
  return <Link className={styles.listLinkContainer} to={to}>{children}</Link>;
}