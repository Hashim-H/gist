// style
import './UserLists.css';

// libraries
import { Link } from 'react-router-dom';

// state
import { useSelector } from 'react-redux';
import { selectLists } from '../../../redux/slices/lists';

// components
import Main from '../../structural/Main';
import List from '../../structural/List';
import Spinner from '../../feature/Spinner';

export default function UserLists() {
  // STATE
  const listsState = useSelector(selectLists);

  // RENDER

  // TODO: create button components array

  // create list item components array
  const createListComponents = list => {
    return list.map(listItem => {
      return (
        <li className="list__item" key={listItem._id}>
          <Link className="list__item__link" to={`/gamelist/${listItem._id}`}>
            {listItem.name}
          </Link>
        </li>
      );
    })
  };

  // render
  if (listsState.loading) {
    return (
      <Spinner />
    );
  } else {
    return (
      <Main>
        <List heading="My Lists"
          listComponents={createListComponents(listsState.lists)} />
      </Main>
    );
  }
}