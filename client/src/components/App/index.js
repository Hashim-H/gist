// styles
import './App.module.css';

// libraries
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Banner from '../features/Banner';
import MyListsView from '../views/MyListsView';
import GameList from '../views/ListView';
import ListEditor from '../ListEditor';

export default function App() {
  return (
    <Router>
      <Banner />
      <Routes>
        <Route path="/" exact element={<MyListsView />} />
        <Route path="/list/:id" element={<GameList />} />
        <Route path="/listeditor/" element={<ListEditor />} />
        <Route path="/listeditor/:id" element={<ListEditor />} />
      </Routes>
    </Router>
  );
}