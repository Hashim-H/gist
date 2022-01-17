// styles
import './App.module.css';

// libraries
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// store
import { selectAuthenticated } from '../../redux/slices/authenticated';
import { getLists } from '../../redux/slices/lists';

// components
import UserLists from '../views/UserLists';
import GameList from '../views/GameList';
import ListEditor from '../views/ListEditor';
import FriendsList from '../views/FriendsList';
import FriendLists from '../views/FriendLists';
import NavBar from '../features/NavBar';

export default function App() {
  // state
  const authenticated = useSelector(selectAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => dispatch(getLists()), [dispatch]);

  // render
  return (
    <Router>
      {authenticated ? <NavBar /> : null}
      <Routes>
        <Route path="/" exact element={<UserLists />} />
        <Route path="/list/:id" element={<GameList />} />
        <Route path="/listeditor/" element={<ListEditor />} />
        <Route path="/listeditor/:id" element={<ListEditor />} />
        <Route path="/friends" element={<FriendsList />} />
        <Route path="/friends/:id" element={<FriendLists />} />
      </Routes>
    </Router>
  );
}