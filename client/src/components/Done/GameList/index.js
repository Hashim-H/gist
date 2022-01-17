// style
import styles from './GameList.module.css';

// libraries
import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { IoPencil } from 'react-icons/io5';

// api
import APIService from '../../../APIService';

// components
import ViewContainer from '../../containers/ViewContainer';
import Banner from '../../containers/ViewHeaderContainer';
import CustomIconLink from '../../containers/IconLinkContainer';
import ListContainer from '../../containers/ListContainer';
import ListItem from '../../containers/ListItemContainer';
import GameImage from '../GameImage';
import Spinner from '../Spinner';

export default function GameList() {
  // state
  const { id } = useParams();
  const [list, setList] = useState({});

  useEffect(() => {
    (async () => {
      const data = await APIService.getListById(id);
      setList(data);
    })();
  }, [id]);

  // render
  if (!list.name) return <ViewContainer><Spinner /></ViewContainer>;

  return (
    <ViewContainer>
      <Banner>
        <h2>{list.name}</h2>
          {list.name ?
          <CustomIconLink to={`/listeditor/${list._id}`}>
            <IoPencil className={styles.editButton} />
          </CustomIconLink> :
          null}
      </Banner>
      <ListContainer>
        {list.games.map((game, index) => {
          return (
            <Fragment key={game.appid}>
              <SteamLink appid={game.appid}>
                <ListItem>
                  <FlexContainer>
                    <GameImage appid={game.appid} hash={game.img_logo_url} />
                    <h3>
                      {list.ordered ? <GameRank index={index} /> : null}
                      {game.name}
                    </h3>
                  </FlexContainer>
                </ListItem>
              </SteamLink>
            </Fragment>
          );
        })}
      </ListContainer>
    </ViewContainer>
  );
}

function SteamLink({ appid, children }) {
  const url = APIService.constructStoreURL(appid);
  return <a className={styles.steamLink} href={url} target={'_blank'} rel="noreferrer">{children}</a>;
}

function FlexContainer({ children }) {
  return <div className={styles.flexContainer}>{children}</div>
}

function GameRank({ index }) {
  return <span className={styles.gameRank}>{`#${index + 1}`}</span>
}