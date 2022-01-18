// styles
import styles from './OwnedGameList.module.css';

// libraries
import { IoCheckmark } from 'react-icons/io5';

// components
import List from '../../../../containers/lists/ListContainer';
import ListItem from '../../../../containers/lists/ListItemContainer';
import GameImage from '../../../../features/GameImage';

export default function OwnedGameList({ ownedGames, listGames, onAddGame }) {

  // render helper functions
  const Container = ({ children }) => {
    return (
      <div className={styles.containerOuter}>
        <div className={styles.containerInner}>
          { children }
        </div>
      </div>
    );
  };

  const ListItems = () => {
    return ownedGames.map(game => {
      const added = listGames.find(listGame => listGame.appid === game.appid);

      return (
        <div
          key={game.appid}
          className={added ? styles.notAllowed : styles.allowed}
          onClick={added ? null : () => onAddGame(game)}>
          <ListItem>
            <div className={styles.flexContainer}>
              <GameImage appid={game.appid} hash={game.img_logo_url} />
              <h4 className={styles.gameName}>{game.name}</h4>
              {added ? <IoCheckmark className={styles.added} /> : null}
            </div>
          </ListItem>
        </div>
      );
    });
  };

  // render
  return (
    <Container>
      {/* <List> */}
        <ListItems />
      {/* </List> */}
    </Container>
  );
}

