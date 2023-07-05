import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';
import Dragons from './pages/Dragons';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/dragons" element={<Dragons />} />
          <Route path="/my_profile" element={<MyProfile />} />
        </Routes>
        <Footer />
      </Provider>
    </Router>
  );
}

export default App;
