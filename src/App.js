import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.css';
import Dialogs from './Components/Dialogs';
import Header from './Components/Header/index.js';
import Nav from './Components/Navbar/index.js';
import Profile from './Components/Profile/index.js';



function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div class='app-wrapper-content'>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogs" element={<Dialogs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
