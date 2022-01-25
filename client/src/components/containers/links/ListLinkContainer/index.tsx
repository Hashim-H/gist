// styles
import styles from './ListLinkContainer.module.css';

// libraries
import { Link } from 'react-router-dom';

interface Props {
  to: any;
  children: any;
}

const ListLinkContainer: React.FC<Props> = ({ to, children }) => {
  return <Link className={styles.listLinkContainer} to={to}>{children}</Link>;
}

export default ListLinkContainer;