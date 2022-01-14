import './Header.css';
import { useSelector } from 'react-redux';
import { selectAuthenticated } from '../../../redux/slices/authenticated';
import Nav from '../../feature/nav';

export default function Header() {
  const authenticated = useSelector(selectAuthenticated);

  return (
    <header className="header">
      <div className="header__content__container">
        <div className="header__content">
          <h1>GIST</h1>
          {authenticated ? <Nav />: null}
        </div>
      </div>
    </header>
  );
}