import React from 'react';
import './App.css';
import Header from './Components/Header/index.js';
import Nav from './Components/Navbar/index.js';
import Profile from './Components/Profile/index.js';



function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Profile />
    </div>);
}

export default App;
