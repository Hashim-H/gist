// components
import Modal from '../../../features/Modal';
import Header from './Header';
import Form from './Form';

export default function ListOptionForm({ setOptionFormOpen, list, onSaveOptions }) {
  // render
  return (
    <Modal setModalOpen={setOptionFormOpen}>
      <Header />
      <Form setOptionFormOpen={setOptionFormOpen} list={list} onSaveOptions={onSaveOptions} />
    </Modal>
  );
}