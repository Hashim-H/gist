import styles from './ListItem.module.css';

export default function ListItem({ onClick, children }) {
  return (
    <li
      className={styles.listItemContainer}
      onClick={onClick}>
      {children}
    </li>
  );
}