// style
import styles from './ListOptionForm.module.css';

// libraries
import { useState, useEffect } from 'react';

// components
import Modal from '../../Modal';

export default function ListOptionForm({ setListOptionFormOpen, list, saveListOptions }) {
  // state
  const [formState, setFormState] = useState({
    name: '',
    ordered: false
  });

  useEffect(() => {
    setFormState({
      name: list.name,
      ordered: list.ordered
    });
  }, [list.name, list.ordered]);

  // handler functions
  const handleSubmit = (event) => {
    // prevent page reload
    event.preventDefault();

    // update parent component state
    saveListOptions({
      name: formState.name,
      ordered: formState.ordered
    });

    // close modal
    setListOptionFormOpen(false);
  };

  const handleNameChange = event => {
    setFormState({
      ...formState,
      name: event.target.value
    });
  };

  const handleCheckboxChange = () => {
    setFormState({
      ...formState,
      ordered: !formState.ordered
    });
  };

  // render
  return (
    <Modal setModalOpen={setListOptionFormOpen}>
      <form
        className={styles.form}
        onSubmit={handleSubmit}>
        <h3 className={styles.heading}>List Options</h3>
        <label
          className={styles.label}
          htmlFor="name">
          List name
        </label>
        <input
          className={styles.input}
          name="name"
          id="name"
          placeholder="Enter list name"
          maxlength="20"
          value={formState.name}
          onChange={handleNameChange} />
        <label
          className={styles.label}
          htmlFor="ordered">
          Ordered
        </label>
        <input
          className={styles.checkbox}
          name="ordered"
          id="ordered"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={formState.ordered} />
        <input
          className={styles.saveButton}
          type="submit"
          value="Save"
          onClick={handleSubmit}/>
      </form>
    </Modal>
  );
}