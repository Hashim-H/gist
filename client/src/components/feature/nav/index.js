import './Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__ul">
        <li className="nav__ul__li">
          <a className="nav__ul__li__a" href="/#">My Lists</a>
        </li>
        <li className="nav__ul__li">
          <a className="nav__ul__li__a" href="/#">Logout</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;