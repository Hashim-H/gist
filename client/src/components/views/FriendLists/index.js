// styles
import styles from './FriendLists.module.css';

// libraries
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// api
import APIService from '../../../APIService';

// components
import Container from '../../containers/Container';
import ListContainer from '../../containers/ListContainer';
import ListItem from '../../containers/ListItem';

export default function FriendLists() {
  // state
  const [lists, setLists] = useState([]);
  const [friend, setFriend] = useState({});
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const apiLists = await APIService.getFriendListsByUserId(id);
      setLists(apiLists);
      const friendData = await APIService.getUserData(id);
      setFriend({
        ...friend,
        ...friendData
      });
    })();
  }, [id, friend]);

  return (
    <Container>
      <h2 className={styles.header}>{friend.personaname}'s Lists</h2>
      <ListContainer>
        {lists.map(list => {
          return (
            <Link
              className={styles.link}
              to={`/list/${list._id}`}>
              <ListItem>{list.name}</ListItem>
            </Link>
          );
        })}

      </ListContainer>
    </Container>
  );
}