// styles
import styles from './App.module.css';

// libraries
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// store
import { getLists } from '../../redux/slices/lists';

// components
import Header from '../structural/Header';
import UserLists from '../view/UserLists';
import GameList from '../view/GameList';
import ListEditor from '../view/ListEditor';

export default function App() {

  const dispatch = useDispatch();

  useEffect(() => dispatch(getLists()), [dispatch]);

  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<UserLists />} />
          <Route path="/gamelist/:id" element={<GameList />} />
          <Route path="/listeditor/" element={<ListEditor />} />
          <Route path="/listeditor/:id" element={<ListEditor />} />
        </Routes>
      </Router>
    </div>
  );
}