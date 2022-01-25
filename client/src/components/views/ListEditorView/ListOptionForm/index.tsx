// components
import Modal from '../../../features/Modal';
import Header from './Header';
import Form from './Form';


interface Props {
  setOptionFormOpen: Function;
  list: gameList;
  onSaveOptions: Function;
}

const ListOptionForm: React.FC<Props> = ({ setOptionFormOpen, list, onSaveOptions }): JSX.Element => {
  // render
  return (
    <Modal setModalOpen={setOptionFormOpen}>
      <Header />
      <Form setOptionFormOpen={setOptionFormOpen} list={list} onSaveOptions={onSaveOptions} />
    </Modal>
  );
}
export default ListOptionForm;