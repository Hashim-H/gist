// styles
import styles from './IconLinkContainer.module.css';

// libraries
import { Link } from 'react-router-dom';

interface Props {
  to: any;
  children: any;
}

const IconLinkContainer: React.FC<Props> = ({ to, children }) => {
  return <Link className={styles.iconLinkContainer} to={to}>{children}</Link>;
}

export default IconLinkContainer;