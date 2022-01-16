// style
import styles from './ListEditor.module.css';

// libraries
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IoTrashBin, IoCaretDown, IoCaretUp } from 'react-icons/io5';
import { IoIosAddCircle } from 'react-icons/io';

// api
import APIService from '../../../APIService';

// components
import Container from '../../containers/Container';
import ListContainer from '../../containers/ListContainer';
import ListItem from '../../containers/ListItem';
import GameImage from '../../features/GameImage';
import Spinner from '../../features/Spinner';
import GamePicker from '../../features/GamePicker';

export default function ListEditor() {
  // state
  const [list, setList] = useState({});
  const [fetched, setFetched] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      // fetch list and update state
      (async () => {
        const apiList = await APIService.getListById(id);
        setList(apiList);
        setFetched(true);
      })();
    } else {
      // set state to empty values
      setList({
        _id: '',
        name: '',
        games: [],
        ordered: false
      });
    }
  }, [id]);

  const addGame = (game) => {
    setList({
      ...list,
      games: [...list.games, game]
    });
  }

  const deleteGame = (targetGame) => {
    const newList = [...list.games].filter(game => {
      return game.appid !== targetGame.appid;
    });

    setList({
      ...list,
      games: newList
    });
  };


  // render helper functions
  const renderGamePicker = () => {
    if (modalOpen) {
      return (
        <GamePicker
          setModalOpen={setModalOpen}

          addGame={addGame} />
      );
    }
  };

  const renderRankButtons = () => {
    if (list.ordered) {
      return (
        <div className={styles.buttonContainer}>
          <IoCaretUp className={styles.arrowButton} />
          <IoCaretDown className={styles.arrowButton} />
        </div>
      );
    }
  };

  const renderListItems = () => {
    return list.games.map(game => {
      return (
        <ListItem uniqueKey={game.appid}>
          <div className={styles.flexContainer}>
            {renderRankButtons()}
            <GameImage
              appid={game.appid}
              hash={game.img_logo_url} />
            <h4 className={styles.name}>{game.name}</h4>
            <IoTrashBin
              className={styles.deleteButton}
              onClick={() => deleteGame(game)} />
          </div>
        </ListItem>
      );
    });
  };

  const renderListName = () => list.name ? list.name : 'Unnamed List';

  const renderBody = () => {
    if (!fetched) return <Spinner />;

    return (
      <>
        <div className={styles.listHeader}>
          <div>
            <span className={styles.listNameLabel}>List Name:</span>
            <h3 className={styles.listName}>{renderListName()}</h3>
          </div>
          <IoIosAddCircle
            className={styles.addGameButton}
            onClick={() => setModalOpen(true)} />
        </div>
        <ListContainer
          ordered={list.ordered}>
          {renderListItems()}
        </ListContainer>
        {renderGamePicker()}
      </>
    );
  };


  // render
  return (
    <Container>
      <div className={styles.header}>
        <h2>List Editor</h2>
      </div>
      {renderBody()}
    </Container>
  );
}




/*
  // add list button
  // ?list options button - opens modal to show list options

  // change list name button - change the state of the list name input to not disabled
  // add game button - opens modal to choose game
  // modal has list of games - clicking any will add them to the list
  // modal has done button

  // ?each game has move up and down buttons
  // ?if list option is set to ranked, rank will show
  // each game has remove button

*/