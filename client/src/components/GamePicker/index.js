// style
import styles from './GamePicker.module.css';

// libraries
import { useState, useEffect } from 'react';
import { IoCheckmark } from 'react-icons/io5';

// api
import APIService from '../../APIService';

// components
import Modal from '../Modal';
import ListContainer from '../containers/lists/ListContainer';
import ListItem from '../containers/lists/ListItemContainer';
import GameImage from '../GameImage';

export default function GamePicker({ setGamePickerOpen, listGames, addGame }) {
  // state
  const [ownedGames, setOwnedGames] = useState([]);

  useEffect(() => {
    // fetch owned games
    (async () => {
      const apiGames = await APIService.getOwnedGames();
      setOwnedGames(apiGames);
    })();
  }, []);

  const handleClick = (game) => {
    addGame({
      appid: game.appid,
      name: game.name,
      img_logo_url: game.img_logo_url
    });
  };

  // render helper functions
  const renderListItem = () => {
    return ownedGames.map(game => {
      if (listGames.find(listGame => listGame.appid === game.appid)) {
        return (
          <div className={styles.notAllowed}>
            <ListItem uniqueKey={game.appid}>
              <div className={styles.flexContainer}>
                <GameImage appid={game.appid} hash={game.img_logo_url} />
                <h4 className={styles.name}>{game.name}</h4>
                <IoCheckmark className={styles.added} />
              </div>
            </ListItem>
          </div>
        );
      } else {
        return (
          <div className={styles.allowed}>
            <ListItem uniqueKey={game.appid} onClick={() => handleClick(game)}>
              <div className={styles.flexContainer}>
                <GameImage appid={game.appid} hash={game.img_logo_url} />
                <h4 className={styles.name}>{game.name}</h4>
              </div>
            </ListItem>
          </div>
        );
      }
    });
  };

  // render
  return (
    <Modal setModalOpen={setGamePickerOpen}>
      <div className={styles.modalHeader}>
        <h3 className={styles.heading}>Pick games</h3>
        <button className={styles.doneButton}
          onClick={() => setGamePickerOpen(false)}>Done</button>
      </div>
      <div className={styles.listOuter}>
        <div className={styles.listInner}>
          <ListContainer>
            {renderListItem()}
          </ListContainer>
        </div>
      </div>
    </Modal>
  );
}