import styles from './ListItem.module.css';

export default function ListItem({ uniqueKey, onClick, children }) {

  console.log(uniqueKey);
  return (
    <li
      className={styles.contentContainer}
      key={uniqueKey}
      onClick={onClick}>
      {children}
    </li>
  );
}