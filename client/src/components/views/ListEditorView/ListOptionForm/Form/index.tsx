// styles
import styles from './Form.module.css';

// libraries
import { useState, useEffect } from 'react';

interface Props {
  setOptionFormOpen: Function;
  list: gameList;
  onSaveOptions: Function;
}

const Form: React.FC<Props> = ({ setOptionFormOpen, list, onSaveOptions }): JSX.Element => {
  // state
  const [formState, setFormState] = useState<gameListShort>({
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
  const onFormSubmit  = (event: any) => {
    event.preventDefault();

    onSaveOptions({
      name: formState.name,
      ordered: formState.ordered
    });

    setOptionFormOpen(false);
  };

  const onNameChange = (event: any) => {
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
        maxLength={20}//OC was previously maxlength="20"
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

export default Form;