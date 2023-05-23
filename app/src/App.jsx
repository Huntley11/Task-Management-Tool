import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import HomePage from './components/HomePage';
import About from './components/About';
import NormalTemplate from './components/NormalTemplate';
import ErrorPage from './components/ErrorPage';
import LogIn from './components/LogIn';


//Style
import './App.css';
import GetStarted from './components/GetStarted';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} /> { /*Default Main page when users first see our site*/ }
        <Route path="/login" element={<LogIn/>} /> { /*Login page*/ }
        <Route path="/about" element={<About/>} /> { /*About  page*/ }
        <Route path="/get_started" element={<GetStarted/>} />  { /* shows what the app can do */ }
        <Route path="/home" element={<NormalTemplate/>} /> { /* Normal website with features to be built in*/ }
        <Route path="*" element={ <ErrorPage/> } /> { /* The Error page when user types unknown parameters */ }
      </Routes>
    </Router>
  );
}

export default App;