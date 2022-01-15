import styles from './ListItem.module.css';

export default function ListItem({ uniqueKey, onClick, children }) {
  return (
    <li className={styles.listItem}
      key={uniqueKey}
      onClick={onClick}>
      {children}
    </li>
  );
}