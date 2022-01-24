// libraries
import { useState, useEffect } from 'react';


// api
import APIService from '../../../../APIService';

// components
import Modal from '../../../features/Modal';
import Header from './Header';
import OwnedGameList from './OwnedGameList';


export default function GamePicker({ setGamePickerOpen, listGames, onAddGame }) {
  // state
  const [ownedGames, setOwnedGames] = useState([]);

  useEffect(() => {
    // fetch owned games
    (async () => {
      const apiGames = await APIService.getOwnedGames();
      setOwnedGames(apiGames);
    })();
  }, []);


  // render
  return (
    <Modal setModalOpen={setGamePickerOpen}>
      <Header setGamePickerOpen={setGamePickerOpen} />
      <OwnedGameList ownedGames={ownedGames} listGames={listGames} onAddGame={onAddGame} />
    </Modal>
  );
}