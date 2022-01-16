// style
import styles from './ListEditor.module.css';

// libraries
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IoTrashBin, IoCaretDown, IoCaretUp, IoEllipsisHorizontalCircleSharp } from 'react-icons/io5';
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
import ListOptionForm from '../../features/ListOptionForm';

export default function ListEditor() {
  // state
  const [list, setList] = useState({});
  const [fetched, setFetched] = useState(false);
  const [gamePickerOpen, setGamePickerOpen] = useState(false);
  const [listOptionFormOpen, setListOptionFormOpen] = useState(false);
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


  //button handler functions
  const addGame = game => {
    setList({
      ...list,
      games: [...list.games, game]
    });
  }

  const deleteGame = targetGame => {
    // filter games
    const newList = [...list.games].filter(game => {
      return game.appid !== targetGame.appid;
    });

    // update state
    setList({
      ...list,
      games: newList
    });
  };

  const upRankGame = rank => {
    // swap games
    const newList = [...list.games];
    [newList[rank - 1], newList[rank]] = [newList[rank], newList[rank - 1]];

    // update state
    setList({
      ...list,
      games: newList
    });
  };

  const downRankGame = rank => {
    // swap games
    const newList = [...list.games];
    [newList[rank + 1], newList[rank]] = [newList[rank], newList[rank + 1]];

    // update state
    setList({
      ...list,
      games: newList
    });
  };

  const saveListOptions = ({ name, ordered }) => {
    setList({
      ...list,
      name: name,
      ordered: ordered
    });
  };


  // render helper functions
  const renderGamePicker = () => {
    if (gamePickerOpen) {
      return (
        <GamePicker
          setGamePickerOpen={setGamePickerOpen}
          listGames={list.games}
          addGame={addGame} />
      );
    }
  };

  const renderListOptionForm = () => {
    if (listOptionFormOpen) {
      return (
        <ListOptionForm
          setListOptionFormOpen={setListOptionFormOpen}
          list={list}
          saveListOptions={saveListOptions} />
      );
    }
  };

  const renderRankButtons = game => {
    if (!list.ordered) return null;

    const rank = list.games.findIndex(listGame => listGame.appid === game.appid);

    switch (rank) {
      case 0:
        return (
          <div className={styles.buttonContainer}>
            <IoCaretDown
              className={styles.arrowButton}
              onClick={() => downRankGame(rank)} />
          </div>
        );

      case list.games.length - 1:
        return (
          <div className={styles.buttonContainer}>
            <IoCaretUp
              className={styles.arrowButton}
              onClick={() => upRankGame(rank)} />
          </div>
        );

      default:
        return (
          <div className={styles.buttonContainer}>
            <IoCaretUp
              className={styles.arrowButton}
              onClick={() => upRankGame(rank)} />
            <IoCaretDown
              className={styles.arrowButton}
              onClick={() => downRankGame(rank)} />
          </div>
        );
    }
  };

  const renderListItems = () => {
    return list.games.map(game => {
      return (
        <ListItem uniqueKey={game.appid}>
          <div className={styles.flexContainer}>
            {renderRankButtons(game)}
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
          <h3 className={styles.listName}>
            List Name: <span className={styles.listNameSpan}>{renderListName()}</span>
          </h3>
          <IoIosAddCircle
            className={styles.optionButton}
            onClick={() => setGamePickerOpen(true)} />
          <IoEllipsisHorizontalCircleSharp
            className={styles.optionButton}
            onClick={() => setListOptionFormOpen(true)}/>
        </div>
        <ListContainer
          ordered={list.ordered}>
          {renderListItems()}
        </ListContainer>
        {renderGamePicker()}
        {renderListOptionForm()}
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