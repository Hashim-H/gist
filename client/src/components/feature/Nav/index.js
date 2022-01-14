// style
import './Nav.css';

// libraries
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="nav__container">
      <ul className="nav">
        <li className="nav__link__container">
          <Link to={"/"}
            className="nav__link">
            My Lists
          </Link>
        </li>
        <li className="nav__link__container">
          <Link to={"/"}
            className="nav__link">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}