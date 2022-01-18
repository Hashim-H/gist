// styles
import styles from './ListView.module.css';

// libraries
import { Fragment } from 'react';
import { IoPencil } from 'react-icons/io5';

// api
import APIService from '../../../APIService';

// components
import IconLink from '../../containers/links/IconLinkContainer';
import ListContainer from '../../containers/lists/ListContainer';
import ListItem from '../../containers/lists/ListItemContainer';
import GameImage from '../../features/GameImage';

export function EditListButton({ id }) {
  return (
    <IconLink to={`/listeditor/${id}`}>
      <IoPencil />
    </IconLink>
  );
}

export function List({ list }) {
  return (
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
  );
}

// helper functions
function SteamLink({ appid, children }) {
  const url = APIService.constructStoreURL(appid);
  return <a
    className={styles.steamLink}
    href={url}
    target={'_blank'}
    rel="noreferrer">
    {children}
    </a>;
}

function FlexContainer({ children }) {
  return <div className={styles.flexContainer}>{children}</div>
}

function GameRank({ index }) {
  return <span className={styles.gameRank}>{`#${index + 1}`}</span>
}