import Modal from '../containers/Modal';
import { useState } from 'react';

export default function Test() {
  const [modalOpen, setModalOpen] = useState(true);

  return modalOpen && <Modal setIsOpen={setModalOpen} />;
}