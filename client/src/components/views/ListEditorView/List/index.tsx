// styles
import styles from './List.module.css';
import * as React from 'react';
// libararies
import { Fragment } from 'react';
import { IoCaretDown, IoCaretUp, IoTrashBin } from 'react-icons/io5';

// components
import ListContainer from '../../../containers/lists/ListContainer';
import ListItem from '../../../containers/lists/ListItemContainer';
import GameImage from '../../../features/GameImage';



interface ListProps {
  list: gameList;
  onIncrementRank: Function;
  onDecrementRank: Function;
  onRemoveGame: Function;
}

interface rankProps {
  index: number
}

const List: React.FC<ListProps> = ({ list, onIncrementRank, onDecrementRank, onRemoveGame }): JSX.Element => {
  // render helper functions
  const RankButtons: React.FC<rankProps> = ({ index }): JSX.Element => {
    return (
      <ul className={styles.rankButtons}>
        {index > 0 ?
          <li className={styles.rankButton}><IoCaretUp onClick={() => onIncrementRank(index)} /></li> :
          null}
        {index < list.games.length ?
          <li className={styles.rankButton}><IoCaretDown onClick={() => onDecrementRank(index)} /></li> :
          null}
      </ul>
    );
  };

  // render
  return (
    <ListContainer ordered={list.ordered}>
      {list.games.map((game, index) => {
        return (
          <Fragment key={game.appid}>
            <ListItem>
              <div className={styles.flexContainer}>
                {list.ordered ? <RankButtons index={index} /> : null}
                <GameImage appid={game.appid} hash={game.img_logo_url} />
                <h3 className={styles.gameName}>
                  {list.ordered ? <span className={styles.gameRank}>{`#${index + 1}`}</span> : null}
                  {game.name}
                </h3>
                <IoTrashBin className={styles.deleteButton} onClick={() => onRemoveGame(game.appid)} />
              </div>
            </ListItem>
          </Fragment>
        );
      })}
    </ListContainer>
  );
}

export default List;