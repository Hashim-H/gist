// styles
import './App.module.css'

// libraries
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// components
import Banner from '../features/Banner'
import MyListsView from '../views/MyListsView'
import ListView from '../views/ListView'
import ListEditorView from '../views/ListEditorView'
import React from 'react'

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Banner />
      <Routes>
        <Route path='/' element={<MyListsView />} />
        <Route path='/list/:id' element={<ListView />} />
        <Route path='/listeditor/' element={<ListEditorView />} />
        <Route path='/listeditor/:id' element={<ListEditorView />} />
      </Routes>
    </Router>
  )
}

export default App
