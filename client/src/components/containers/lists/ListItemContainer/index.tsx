import styles from './ListItem.module.css';
import * as React from 'react';

interface Props {
  onClick?: React.MouseEventHandler,
  children: any;
};

const ListItem: React.FC<Props> = ({ onClick, children }): JSX.Element  => {
  return (
    <li
      className={styles.listItemContainer}
      onClick={onClick}>
      {children}
    </li>
  );
}

export default ListItem;