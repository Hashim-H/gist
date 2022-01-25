// styles
import styles from './OwnedGameList.module.css';

// libraries
import { IoCheckmark } from 'react-icons/io5';
import * as React from 'react'
// components
import List from '../../../../containers/lists/ListContainer';
import ListItem from '../../../../containers/lists/ListItemContainer';
import GameImage from '../../../../features/GameImage';


interface Props {
  ownedGames: Game[];
  listGames: Game[];
  onAddGame: Function;
}


interface children {
  children: any
}
const OwnedGameList: React.FC<Props> = ({ ownedGames, listGames, onAddGame }): JSX.Element => {
  // render
  return (
    <Container>
      <List>
        <ListItems ownedGames={ownedGames} listGames={listGames} onAddGame={onAddGame} />
      </List>
    </Container>
  );
}



// render helper functions
const Container: React.FC<children> = ({ children }): JSX.Element => {
  return (
    <div className={styles.containerOuter}>
      <div className={styles.containerInner}>
        { children }
      </div>
    </div>
  );
};

const ListItems: React.FC<Props> = ({ ownedGames, listGames, onAddGame }): JSX.Element => {
  const mappedGames = ownedGames.map(game => {
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
  return(
    // OC added this bit of code from:
    //https://stackoverflow.com/questions/57651621/type-props-props-element-is-not-assignable-to-type-functioncomponent
    <React.Fragment>
     { mappedGames }
    </React.Fragment>
  )
};

export default OwnedGameList;
