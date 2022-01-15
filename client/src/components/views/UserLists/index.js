// style
import styles from './UserLists.module.css';

// libraries
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoPencil } from 'react-icons/io5';

// store
import { selectLists } from '../../../redux/slices/lists';

// components
import Container from '../../containers/Container';
import ListContainer from '../../containers/ListContainer';
import ListItem from '../../containers/ListItem';
import Spinner from '../../features/Spinner';

export default function UserLists() {
  // state
  const listsState = useSelector(selectLists);


  // render helper functions
  const renderListItems = () => {
    return listsState.lists.map(list => {
      return (
        <Link className={styles.link}
          key={list._id}
          to={`/list/${list._id}`}>
            <ListItem>{list.name}</ListItem>
        </Link>
      );
    })
  };

  const renderBody = () => {
    if (listsState.loading) return <Spinner />;
    return <ListContainer>{renderListItems()}</ListContainer>;
  };

  
  // render
  return (
    <Container>
      <div className={styles.header}>
        <h2>My Lists</h2>
        <IoPencil className={styles.editButton} />
      </div>
      {renderBody()}
    </Container>
  );
}