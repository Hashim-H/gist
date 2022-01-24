import styles from './Modal.module.css';
import { IoIosCloseCircle } from 'react-icons/io';
import * as React from 'react'

interface Props {
  setModalOpen: Function;
  children: Element
}

const Modal: React.FC<Props> = ({ setModalOpen, children }): JSX.Element => {
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div
        className={styles.background}
        onClick={closeModal} />
      <div className={styles.modal} >
        <div className={styles.header}>
          <IoIosCloseCircle
            className={styles.closeButton}
            onClick={closeModal} />
        </div>
        {children}
      </div>
    </>
  );
}

export default Modal;
