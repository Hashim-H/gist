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

interface Props {
  list: gameList;
}

export const List: React.FC<Props> = ({ list }) => {
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


interface children {
  appid?: number;
  children?: any;
  index?: number;
}
// helper functions
const SteamLink: React.FC<children> = ({ appid, children }) => {
  const url = APIService.constructStoreURL(appid);
  return <a
    className={styles.steamLink}
    href={url}
    target={'_blank'}
    rel="noreferrer">
    {children}
    </a>;
}

const FlexContainer: React.FC<children> = ({ children }) => {
  return <div className={styles.flexContainer}>{children}</div>
}

const GameRank: React.FC<children> = ({ index }) => {
  return <span className={styles.gameRank}>{`#${index + 1}`}</span>
}
