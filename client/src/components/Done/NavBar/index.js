// styles
import styles from './Navbar.module.css';

// libraries
import { Link } from 'react-router-dom';

// components
import Heading1 from '../Heading1';

export default function NavBar() {
  return (
    <NavBackground>
      <NavContainer>
        <Heading1>GIST</Heading1>
          <NavLinks>
            <NavLink to="/">My Lists</NavLink>
            <NavLink to="/friends">Friends</NavLink>
            <NavLink to="/">Logout</NavLink>
          </NavLinks>

      </NavContainer>
    </NavBackground>
  );
}

// helper functions
function NavBackground({ children }) {
  return <div className={styles.background}>{children}</div>;
}

function NavContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}

function NavLinks({ children }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navLinks}>{children}</ul>
    </nav>
  );
}

function NavLink({ to, children }) {
  return (
    <li className={styles.navLink}>
      <Link className={styles.link} to={to}>{children}</Link>
    </li>
  );
}