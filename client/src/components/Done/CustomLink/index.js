import { Link } from 'react-router-dom';
import styles from './CustomLink.module.css';

export default function CustomLink({ to, children }) {
  return <Link className={styles.customLink} to={to}>{children}</Link>;
}