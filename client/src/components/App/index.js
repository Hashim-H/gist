// styles
import styles from './App.module.css';

// libraries
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// store
import { selectAuthenticated } from '../../redux/slices/authenticated';
import { getLists } from '../../redux/slices/lists';

// components
import Nav from '../features/Nav';
import UserLists from '../views/UserLists';
import GameList from '../views/GameList';
import ListEditor from '../views/ListEditor';

export default function App() {

  const authenticated = useSelector(selectAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => dispatch(getLists()), [dispatch]);

  // render helper function
  const renderNavbar = () => {
    if (authenticated) return <Nav />
  }

  // render
  return (
    <Router>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <h1>GIST</h1>
          {renderNavbar()}
        </div>
      </header>
      <Routes>
        <Route path="/" exact element={<UserLists />} />
        <Route path="/list/:id" element={<GameList />} />
        <Route path="/listeditor/" element={<ListEditor />} />
        <Route path="/listeditor/:id" element={<ListEditor />} />
      </Routes>
    </Router>
  );
}