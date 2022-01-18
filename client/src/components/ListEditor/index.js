// style
import styles from './ListEditor.module.css';

// libraries
import { useState, useEffect, Fragment } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoTrashBin, IoCaretDown, IoCaretUp, IoEllipsisHorizontalCircleSharp, IoSave } from 'react-icons/io5';
import { IoIosAddCircle } from 'react-icons/io';
import { useDispatch } from 'react-redux';

// store

// api
import APIService from '../../APIService';

// components
import ViewContainer from '../containers/views/ViewContainer';
import Banner from '../containers/views/ViewHeaderContainer';
import Toolbar from '../Toolbar';

import ListContainer from '../containers/lists/ListContainer';
import ListItem from '../containers/lists/ListItemContainer';
import GameImage from '../GameImage';
import Spinner from '../Spinner';
import GamePicker from '../GamePicker';
import ListOptionForm from '../ListOptionForm';

export default function ListEditor() {
  // state
  const [list, setList] = useState({
    _id: '',
    name: '',
    games: [],
    ordered: false
  });
  const [fetched, setFetched] = useState(false);
  const [gamePickerOpen, setGamePickerOpen] = useState(false);
  const [listOptionFormOpen, setListOptionFormOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      // fetch list and update state
      (async () => {
        const apiList = await APIService.getListById(id);
        const { _id, name, games, ordered } = apiList;
        setList(prev => {
          return {
            ...prev,
            _id: _id,
            name: name,
            games: games,
            ordered: ordered
          }
        });
        setFetched(true);
      })();
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

  const saveList = async () => {
    await APIService.putList(list);
    navigate('/');
  };

  const deleteList = async () => {
    await APIService.deleteList(list._id);
    navigate('/');
  }

  // render helper functions
  const ListName = ({ children }) => {
    return (
      <h3 className={styles.listName}>
        List Name: <span className={styles.listNameSpan}>{children}</span>
      </h3>
    );
  };

  const ToolButton = ({ children }) => {
    return <div className={styles.toolButton}>{children}</div>;
  }

  const FlexContainer = ({ children }) => {
    return <div className={styles.flexContainer}>{children}</div>;
  }

  const RankButtonContainer = ({ children }) => {
    return <div className={styles.rankButtonContainer}>{children}</div>;
  }

  const RankButton = ({ children }) => {
    return <div className={styles.rankButton}>{children}</div>;
  }

  const DeleteButton= ({ children }) => {
    return <div className={styles.deleteButton}>{children}</div>
  }

  const RankButtons = ({ index }) => {
    switch (index) {
      case 0:
        return <RankButton><IoCaretDown onClick={() => downRankGame(index)} /></RankButton>;
      case list.games.length:
        return <RankButton><IoCaretUp onClick={() => upRankGame(index)} /></RankButton>;
      default:
        return (
          <>
            <RankButton><IoCaretUp onClick={() => upRankGame(index)} /></RankButton>
            <RankButton><IoCaretDown onClick={() => downRankGame(index)} /></RankButton>
          </>
        );
    }
  };

  const GameRank = ({ index }) => {
    return <span className={styles.gameRank}>{`#${index + 1}`}</span>;
  }

  const GameName = ({ children }) => {
    return (
      <div className={styles.gameName}>
        <h3>{children}</h3>
      </div>
    );
  };


  // render
  if (id && !fetched) return <ViewContainer><Spinner /></ViewContainer>;

  return (
    <ViewContainer>
      <Banner>
        <h2>List Editor</h2>
      </Banner>
      <Banner>
        <ListName>{list.name ? list.name : 'Unnamed List'}</ListName>
        <Toolbar>
          {list._id ? <ToolButton><IoTrashBin onClick={deleteList}/></ToolButton> : null}
          <ToolButton><IoSave onClick={saveList} /></ToolButton>
          <ToolButton><IoEllipsisHorizontalCircleSharp onClick={() => setListOptionFormOpen(true)} /></ToolButton>
          <ToolButton><IoIosAddCircle onClick={() => setGamePickerOpen(true)} /></ToolButton>
        </Toolbar>
      </Banner>
        <ListContainer ordered={list.ordered}>
          {list.games.map((game, index) => {
            return (
              <Fragment key={game.appid}>
                <ListItem>
                  <FlexContainer>
                    {list.ordered ? <RankButtonContainer><RankButtons index={index} /></RankButtonContainer> : null}
                    <GameImage appid={game.appid} hash={game.img_logo_url} />
                    <GameName>
                      {list.ordered ? <GameRank index={index} /> : null}
                      {game.name}
                    </GameName>
                    <DeleteButton><IoTrashBin onClick={() => deleteGame(game)} /></DeleteButton>
                  </FlexContainer>
                </ListItem>
              </Fragment>
            );
          })}
        </ListContainer>
        {gamePickerOpen ?
        <GamePicker
          setGamePickerOpen={setGamePickerOpen}
          listGames={list.games}
          addGame={addGame} /> :
        null}
        {listOptionFormOpen ?
        <ListOptionForm
          setListOptionFormOpen={setListOptionFormOpen}
          list={list}
          saveListOptions={saveListOptions} /> :
        null}
    </ViewContainer>
  );
}

