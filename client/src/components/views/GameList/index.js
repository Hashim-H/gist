// style
import styles from './GameList.module.css';

// libraries
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoPencil } from 'react-icons/io5';

// api
import APIService, { getListById } from '../../../APIService';

// components
import Container from '../../Done/ViewContainer';
import ListContainer from '../../Done/ListContainer';
import ListItem from '../../Done/ListItem';
import GameImage from '../../features/GameImage';
import Spinner from '../../Done/Spinner';
// import Modal from '../../containers/Modal';

export default function GameList() {
  // state
  const { id } = useParams();
  const [list, setList] = useState({});
  // const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await getListById(id);
      setList(data);
    })();
  }, [id]);

  const openStorePage = (appid) => {
    const url = APIService.constructStoreURL(appid);
    window.open(url, '_blank').focus();
  };


  // render helper functions
  const renderListItems = () => {
    return list.games.map((game, index) => {
      return (
        <div className={styles.wrapper}
          key={game.appid}>
          <ListItem onClick={() => openStorePage(game.appid)}>
          {/* <ListItem onClick={() => setModalOpen(true)}> */}
            <div className={styles.flexContainer}>
              <GameImage
                appid={game.appid}
                hash={game.img_logo_url} />
              <h3 className={styles.gameName}>
                <span className={styles.rank}>{list.ordered ? `#${index + 1} ` : null}</span>
                {game.name}
              </h3>
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

  // const renderModal = () => {
  //   if (modalOpen) return <Modal setModalOpen={setModalOpen}></Modal>
  // };


  // render
  return (
    <Container>
      <div className={styles.header}>
        <h2>{list.name}</h2>
        <Link to={`/listeditor/${list._id}`}>
          {list.name ? <IoPencil className={styles.editButton} /> : null}
        </Link>
      </div>
      {renderBody()}
      {/* {renderModal()} */}
    </Container>
  );
}