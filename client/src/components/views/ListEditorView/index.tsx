// libraries
import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// api
import APIService from '../../../APIService';

// components
import View from '../../containers/views/ViewContainer';
import Header from './Header';
import Toolbar from './Toolbar';
import List from './List';
import Spinner from '../../features/Spinner';
import GamePicker from './GamePicker';
import ListOptionForm from './ListOptionForm';

interface Game {
  appid: number;
  name: string;
  img_logo_url: string;
}

const ListEditor: FC = () => {
  // state
  const [list, setList] = useState<gameList>({
    _id: '',
    name: '',
    games: [],
    ordered: false
  });

  const [gamePickerOpen, setGamePickerOpen] = useState<boolean>(false);
  const [optionFormOpen, setOptionFormOpen] = useState<boolean>(false);
  const { id } = useParams<string>();

  useEffect(() => {
    if (id) {
      // fetch list and update state
      (async () => {
        const fetchedList = await APIService.getListById(id);
        setList(list => list = { ...list, ...fetchedList });
      })();
    }
  }, [id]);


  // button click handler functions
  const onIncrementRank = (rank: number) => {
    const newList = [...list.games];
    [newList[rank - 1], newList[rank]] = [newList[rank], newList[rank - 1]]; // swap adjacent games

    setList({ ...list, games: newList });
  };

  const onDecrementRank = (rank: number) => {
    const newList = [...list.games];
    [newList[rank + 1], newList[rank]] = [newList[rank], newList[rank + 1]]; // swap adjacent games

    setList({ ...list, games: newList });
  };

  const onRemoveGame = (appid: number): void => {
    const newList = [...list.games].filter(game => game.appid !== appid);
    setList({ ...list, games: newList });
  };

  const onAddGame = (game: Game): void => {
    const newGame = {
      appid: game.appid,
      name: game.name,
      img_logo_url: game.img_logo_url
    };

    setList({ ...list, games: [...list.games, newGame] });
  };

  const onSaveOptions = ({ name, ordered }) => {
    setList({
      ...list,
      name: name,
      ordered: ordered
    });
  };


  // render
  if (id && !list._id) return <View><Spinner /></View>;

  return (
    <>
      <View>
        <Header />
        <Toolbar
          list={list}
          setOptionFormOpen={setOptionFormOpen}
          setGamePickerOpen={setGamePickerOpen} />
        <List
          list={list}
          onIncrementRank={onIncrementRank}
          onDecrementRank={onDecrementRank}
          onRemoveGame={onRemoveGame} />
        {gamePickerOpen ?
          <GamePicker
            setGamePickerOpen={setGamePickerOpen}
            listGames={list.games}
            onAddGame={onAddGame} /> :
          null}
        {optionFormOpen ?
          <ListOptionForm
            setOptionFormOpen={setOptionFormOpen}
            list={list}
            onSaveOptions={onSaveOptions} /> :
          null}
      </View>
    </>
  );
}

export default ListEditor;