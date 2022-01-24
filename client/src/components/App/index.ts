// styles
import './App.module.css';

// libraries
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Banner from '../features/Banner';
import MyListsView from '../views/MyListsView';
import ListView from '../views/ListView';
import ListEditorView from '../views/ListEditorView';

export default function App() {
  return (
    <Router>
      <Banner />
      <Routes>
        <Route path="/" exact element={<MyListsView />} />
        <Route path="/list/:id" element={<ListView />} />
        <Route path="/listeditor/" element={<ListEditorView />} />
        <Route path="/listeditor/:id" element={<ListEditorView />} />
      </Routes>
    </Router>
  );
}