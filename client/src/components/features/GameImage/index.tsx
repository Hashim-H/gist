// styles
import styles from './GameImage.module.css';

// api
import APIService from '../../../APIService';

interface Props {
  appid: number;
  hash: string;
}

const GameImage: React.FC<Props> = ({ appid, hash }): JSX.Element => {
  const url: string = APIService.constructImageURL(appid, hash);

  return (
    <div className={styles.gameImage}
      style={{ backgroundImage: `url(${url})` }} />
  );
}
 
export default GameImage;