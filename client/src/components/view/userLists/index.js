// style
import './UserLists.css';

// state
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLists, getLists } from '../../../redux/slices/lists';

// components
import Main from '../../structural/main';

export default function UserLists() {
  // state
  const listsState = useSelector(selectLists);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLists());

  }, [dispatch]);

  // render
  if (listsState.loading) {
    return (
      <Main>
        Loading...
      </Main>
    );
  } else {
    return (
      <>
        <Main>
          Hello
        </Main>
      </>

      // <ul>
      //   {listsState.lists.map(list => <li key={list._id}>{list._id}</li>)}
      // </ul>
    );



  }


  // header
    // navbar
  // main
    // vertical container
      // list

}