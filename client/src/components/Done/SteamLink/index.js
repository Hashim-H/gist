// styles
import styles from './SteamLink.module.css';

// api
import APIService from '../../../APIService';

export default function SteamLink({ appid, children }) {
  const url = APIService.constructStoreURL(appid);
  return <a className={styles.steamLink} href={url} target={'_blank'} rel="noreferrer">{children}</a>
}