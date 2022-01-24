import styles from './ViewContainer.module.css';
import * as React from 'react';

interface Props {
  children: Element
}

const ViewContainer: React.FC<Props> = ({ children }): JSX.Element=>  {
  return <div className={styles.viewContainer}>{children}</div>;
}

export default ViewContainer;