// styles
import styles from './Form.module.css';

// libraries
import { useState, useEffect } from 'react';

export default function Form({ setOptionFormOpen, list, onSaveOptions }) {
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
  const onFormSubmit = event => {
    event.preventDefault();

    onSaveOptions({
      name: formState.name,
      ordered: formState.ordered
    });

    setOptionFormOpen(false);
  };

  const onNameChange = event => {
    setFormState({
      ...formState,
      name: event.target.value
    });
  };

  const onCheckboxChange = () => {
    setFormState({
      ...formState,
      ordered: !formState.ordered
    });
  };

  // render
  return (
    <form
      className={styles.form}
      onSubmit={onFormSubmit}>
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
        onChange={onNameChange} />
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
        onChange={onCheckboxChange}
        checked={formState.ordered} />
      <input
        className={styles.saveButton}
        type="submit"
        value="Save"/>
    </form>
  );
}