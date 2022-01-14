// style
import './App.css';

// libraries
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// api
import { getLists } from '../../redux/slices/lists';

// components
import Header from '../structural/Header';
import UserLists from '../view/UserLists';
import GameList from '../view/GameList';

export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLists());
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<UserLists />} />
          <Route path="/gamelist/:id" element={<GameList />} />
        </Routes>
      </Router>
    </div>
  );
}