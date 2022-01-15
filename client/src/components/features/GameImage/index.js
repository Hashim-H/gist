import styles from './GameImage.module.css';
import APIService from "../../../APIService";

export default function GameImage({ appid, hash }) {
  const imageURL = APIService.constructImageURL(appid, hash);

  return (
    <div className={styles.gameImage}
      style={{ backgroundImage: `url(${imageURL})` }} />
  );
}
