// style
import styles from './GameList.module.css';

// libraries
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoPencil } from 'react-icons/io5';

// api
import { getListById } from '../../../APIService';

// components
import Container from '../../containers/Container';
import ListContainer from '../../containers/ListContainer';
import ListItem from '../../containers/ListItem';
import GameImage from '../../features/GameImage';
import Spinner from '../../features/Spinner';
import Modal from '../../containers/Modal';

export default function GameList() {
  // state
  const { id } = useParams();
  const [list, setList] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await getListById(id);
      setList(data);
    })();
  }, [id]);


  // render helper functions
  const renderListItems = () => {
    return list.games.map(game => {
      return (
        <div className={styles.wrapper}
          key={game.appid}>
          <ListItem onClick={() => setModalOpen(true)}>
            <div className={styles.flexContainer}>
              <GameImage
                appid={game.appid}
                hash={game.img_logo_url} />
              <h3 className={styles.gameName}>{game.name}</h3>
            </div>
          </ListItem>
        </div>
      );
    });
  };

  const renderBody = () => {
    if (!list.name) return <Spinner />;
    return <ListContainer>{renderListItems()}</ListContainer>;
  };

  const renderModal = () => {
    if (modalOpen) return <Modal setModalOpen={setModalOpen}></Modal>
  };


  // render
  return (
    <Container>
      <div className={styles.header}>
        <h2>{list.name}</h2>
        <Link to={`/listeditor/${list._id}`}>
          <IoPencil className={styles.editButton} />
        </Link>
      </div>
      {renderBody()}
      {renderModal()}
    </Container>
  );
}