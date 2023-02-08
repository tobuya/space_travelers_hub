import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import './App.css';
import Navigation from './components/Navigation';
import Rockets from './components/Rockets';
import Missions from './pages/Missions';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route />
          <Route />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
