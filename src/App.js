import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import './App.css';
import Navigation from './components/Navigation';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';

import Dragon from './components/Dragons';


function App() {
  return (
    <Router>
      <Provider store={store}>
        <Navigation />
        <Routes>
          <Route />
          <Route />
          <Route path="/dragons" element={<Dragon />} />
          <Route />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
