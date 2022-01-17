import styles from './Modal.module.css';
import { IoIosCloseCircle } from 'react-icons/io';

export default function Modal({ setModalOpen, children }) {
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