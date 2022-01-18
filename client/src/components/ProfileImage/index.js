import styles from './ProfileImage.module.css';
import APIService from "../../APIService";

export default function GameImage({ url }) {
  return (
    <div className={styles.profileImage}
      style={{ backgroundImage: `url(${url})` }} />
  );
}