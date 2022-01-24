// styles
import styles from './Spinner.module.css';

// libraries
import { Oval } from 'react-loader-spinner';
import * as React from 'react'

interface Props {
  children: any
}

const Spinner: React.FC = (): JSX.Element => {
  // helper functions
  const SpinnerContainer: React.FC<Props> = ({ children }): JSX.Element => {
    return <div className={styles.spinnerContainer}>{children}</div>
  };

  // render
  return (
    <SpinnerContainer>
      <Oval color={'#C7D5E0'} secondaryColor={'#C7D5E0'} height={40} />;
    </SpinnerContainer>
  );
}

export default Spinner;
