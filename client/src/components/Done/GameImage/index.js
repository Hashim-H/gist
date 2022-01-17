// styles
import styles from './GameImage.module.css';

// api
import APIService from "../../../APIService";

export default function GameImage({ appid, hash }) {
  const url = APIService.constructImageURL(appid, hash);

  return (
    <div className={styles.gameImage}
      style={{ backgroundImage: `url(${url})` }} />
  );
}
