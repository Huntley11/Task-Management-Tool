import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import NormalTemplate from './components/NormalTemplate';

function App() {
  return (
      
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<NormalTemplate/>} />
      </Routes>
    </Router>
  );
}

export default App;