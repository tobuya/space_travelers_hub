import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Dragon from './components/Dragons';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/dragons" element={<Dragon />} />
          <Route />
          <Route />
          <Route />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
