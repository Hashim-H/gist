import styles from './ViewSectionContainer.module.css'
import * as React from 'react'

interface Props {
  children: any
}

const ViewSectionContainer: React.FC<Props> =({ children }) : JSX.Element => {
  return <div className={styles.viewSectionContainer}>{children}</div>;
}

export default ViewSectionContainer;