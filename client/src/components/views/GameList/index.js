// style
import styles from './GameList.module.css';

// libraries
import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { IoPencil } from 'react-icons/io5';

// api
import APIService from '../../../APIService';

// components
import ViewContainer from '../../Done/ViewContainer';
import Banner from '../../Done/Banner';
import Heading2 from '../../Done/Heading2';
import Heading3 from '../../Done/Heading3';
import CustomIconLink from '../../Done/CustomIconLink';
import ListContainer from '../../Done/ListContainer';
import ListItem from '../../Done/ListItem';
import GameImage from '../../Done/GameImage';
import Spinner from '../../Done/Spinner';

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
  if (!list.name) return <Spinner />;

  return (
    <ViewContainer>
      <Banner>
        <Heading2>{list.name}</Heading2>
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
                    <Heading3>
                      {list.ordered ? <GameRank index={index} /> : null}
                      {game.name}
                    </Heading3>
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