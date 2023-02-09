import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import './App.css';
import Navigation from './components/Navigation';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';
import Dragon from './components/Dragons';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/dragons" element={<Dragon />} />
          <Route path="/my_profile" element={<MyProfile />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
