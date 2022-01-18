// libraries
import { useState, useEffect } from 'react';
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

export default function ListEditor() {
  // state
  const [list, setList] = useState({
    _id: '',
    name: '',
    games: [],
    ordered: false
  });

  const [gamePickerOpen, setGamePickerOpen] = useState(false);
  const [optionFormOpen, setOptionFormOpen] = useState(false);
  const { id } = useParams();

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
  const onOptionFormOpen = () => setOptionFormOpen(true);
  const onGamePickerOpen = () => setGamePickerOpen(true);

  const onIncrementRank = rank => {
    const newList = [...list.games];
    [newList[rank - 1], newList[rank]] = [newList[rank], newList[rank - 1]]; // swap adjacent games

    setList({ ...list, games: newList });
  };

  const onDecrementRank = rank => {
    const newList = [...list.games];
    [newList[rank + 1], newList[rank]] = [newList[rank], newList[rank + 1]]; // swap adjacent games

    setList({ ...list, games: newList });
  };

  const onRemoveGame = appid => {
    const newList = [...list.games].filter(game => game.appid !== appid);
    setList({ ...list, games: newList });
  };

  const onAddGame = game => {
    setList({ ...list, games: [...list.games, game] });
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
          onOptionFormOpen={onOptionFormOpen}
          onGamePickerOpen={onGamePickerOpen} />
        <List
          list={list}
          onIncrementRank={onIncrementRank}
          onDecrementRank={onDecrementRank}
          onRemoveGame={onRemoveGame} />
      </View>
      {gamePickerOpen ?
        <GamePicker
          setGamePickerOpen={setGamePickerOpen}
          listGames={list.games}
          onAddGame={onAddGame} /> :
        null}
      {optionFormOpen ?
        <ListOptionForm
          setListOptionFormOpen={setOptionFormOpen}
          list={list}
          saveListOptions={onSaveOptions} /> :
        null}
    </>
  );
}