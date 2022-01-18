// styles
import styles from './Toolbar.module.css';

// libraries
import { useNavigate } from 'react-router-dom';
import { IoEllipsisHorizontalCircleSharp, IoSave, IoTrashBin } from 'react-icons/io5';
import { IoIosAddCircle } from 'react-icons/io';

// api
import APIService from '../../../../APIService';

// components
import ViewSection from '../../../containers/views/ViewSectionContainer';


export default function Toolbar({ list, setOptionFormOpen, setGamePickerOpen }) {
  // button functions
  const navigate = useNavigate();

  const saveList = async () => {
    await APIService.putList(list);
    // add function to display message to screen
    navigate('/');
  };

  const deleteList = async () => {
    await APIService.deleteList(list._id);
    // add function to display to the screen
    navigate('/');
  };

  const openOptions = () => {
    setOptionFormOpen(true);
  };

  const openGamePicker = () => {
    setGamePickerOpen(true);
  };

  // render helper functions
  const ListName = ({ children }) => {
    return (
      <h3 className={styles.listName}>
        List Name: <span className={styles.listNameSpan}>{children}</span>
      </h3>
    );
  };

  const IconButtons = ({ children }) => {
    return <div className={styles.iconLinks}>{children}</div>;
  };

  const IconButton = ({ children }) => {
    return <div className={styles.toolButton}>{children}</div>;
  };

  // render
  return (
    <ViewSection>
      <ListName>{list.name ? list.name : 'Unnamed List'}</ListName>
      <IconButtons>
        {list._id ? <IconButton><IoTrashBin onClick={deleteList}/></IconButton> : null}
        <IconButton><IoSave onClick={saveList} /></IconButton>
        <IconButton><IoEllipsisHorizontalCircleSharp onClick={openOptions} /></IconButton>
        <IconButton><IoIosAddCircle onClick={openGamePicker} /></IconButton>
      </IconButtons>
    </ViewSection>
  );
}

