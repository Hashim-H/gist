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


  // render
  if (id && !list._id) return <View><Spinner /></View>;

  return (
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
  );



  // const saveListOptions = ({ name, ordered }) => {
  //   setList({
  //     ...list,
  //     name: name,
  //     ordered: ordered
  //   });
  // };






  // const RankButtonContainer = ({ children }) => {
  //   return <div className={styles.rankButtonContainer}>{children}</div>;
  // }

  //   const RankButton = ({ children }) => {
  //   return <div className={styles.rankButton}>{children}</div>;
  // }











}

{/* <ListContainer ordered={list.ordered}>
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
null} */}



