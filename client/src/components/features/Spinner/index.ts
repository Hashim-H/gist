// styles
import styles from './Spinner.module.css';

// libraries
import { Oval } from 'react-loader-spinner';

export default function Spinner() {
  // helper functions
  const SpinnerContainer = ({ children }) => {
    return <div className={styles.spinnerContainer}>{children}</div>
  };

  // render
  return (
    <SpinnerContainer>
      <Oval color={'#C7D5E0'} secondaryColor={'#C7D5E0'} height={40} />;
    </SpinnerContainer>
  );
}

