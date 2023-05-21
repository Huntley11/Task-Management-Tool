import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import HomePage from './components/HomePage';
import About from './components/About';
import NormalTemplate from './components/NormalTemplate';
import ErrorPage from './components/ErrorPage';


//Style
import './App.css';
function App() {
  return (
      
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} /> { /*Default Main page when users first see our site*/ }
        <Route path="/about" element={<About/>} /> { /*Default Main page when users first see our site*/ }
        <Route path="/home" element={<NormalTemplate/>} /> { /* Normal website with features to be built in*/ }
        <Route path="*" element={ <ErrorPage/> } /> { /* The Error page when user types unknown parameters */ }
      </Routes>
    </Router>
  );
}

export default App;