// styles
import styles from './FriendsList.module.css';

// libraries
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// api
import APIService from '../../../APIService';

// components
import Container from '../../Done/ViewContainer';
import Spinner from '../../Done/Spinner';
import ListContainer from '../../Done/ListContainer';
import ListItem from '../../Done/ListItem';
import ProfileImage from '../../features/ProfileImage';

export default function FriendsList() {

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    (async () => {
      const apiData = await APIService.getFriends();
      setFriends(apiData);
    })();
  },[]);

  const renderBody = () => {
    if (!friends.length) return <Spinner />;

    return (
      <ListContainer>
        {
          friends.map(friend => {
            return (
              <Link
                className={styles.listItem}
                to={`/friends/${friend.steamid}`}>
                <ListItem uniqueKey={friend.steamid}>
                  <div className={styles.flexContainer}>
                    <ProfileImage url={friend.avatarmedium} />
                    <h3 className={styles.name}>{friend.personaname}</h3>
                  </div>
                </ListItem>
              </Link>
            );
          })
        }
      </ListContainer>
    );
  };

  return (
    <Container>
      <h2 className={styles.header}>Friends</h2>
      {renderBody()}
    </Container>
  );
}
