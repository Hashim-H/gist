// styles
import styles from './FriendsList.module.css';

// libraries
import { useState, useEffect } from 'react';

// components
import Container from '../../containers/Container';
import APIService from '../../../APIService';

export default function FriendsList() {

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    (async () => {
      const apiData = await APIService.getFriends();
      setFriends(apiData);
    })();
  });


    //   (async () => {
    //   const data = await getListById(id);
    //   console.log(data);
    //   setList(data);
    // })();
  // request friend data
  // create list of friends
  //

  const renderBody = () => null;



  return (
    <Container>
      <h2>Friends</h2>
      {renderBody()}
    </Container>
);
}


    // <Container>
    //   <div className={styles.header}>
    //     <h2>My Lists</h2>
    //     <Link
    //       to={'/listeditor'}>
    //       <IoIosAddCircle className={styles.addButton} />
    //     </Link>
    //   </div>
    //   {renderBody()}
    // </Container>

    // state
  // const listsState = useSelector(selectLists);


  // // render helper functions
  // const renderListItems = () => {
  //   return listsState.lists.map(list => {
  //     return (
  //       <Link
  //         className={styles.link}
  //         key={list._id}
  //         to={`/list/${list._id}`}>
  //           <ListItem>{list.name}</ListItem>
  //       </Link>
  //     );
  //   })
  // };

  // const renderBody = () => {
  //   if (listsState.loading) return <Spinner />;
  //   return <ListContainer>{renderListItems()}</ListContainer>;
  // };
