import styles from './Header.module.css';

const Header: React.FC = (): JSX.Element => {
  return <h3 className={styles.heading}>List Options</h3>;
}

export default Header;