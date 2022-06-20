import React from 'react';
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
      {/* <Profile /> */}
      <div class='app-wrapper-content'>
        <Dialogs />
      </div>
    </div>);
}

export default App;
