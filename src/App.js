import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Rockets from './components/Rockets';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route />
          <Route />
          <Route />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
