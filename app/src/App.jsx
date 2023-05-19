import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import HomePage from './components/HomePage';
import NormalTemplate from './components/NormalTemplate';
import ErrorPage from './components/ErrorPage';

//Style
import './App.css';
function App() {
  return (
      
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<NormalTemplate/>} />
        <Route path="*" element={ <ErrorPage/> } />
      </Routes>
    </Router>
  );
}

export default App;