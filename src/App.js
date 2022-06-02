import React from 'react';
import './App.css';



function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src={require('./logo192.png')} />
      </header>
      <nav className='nav'>
        <div><a href='#'>Profile</a></div>
        <div><a href='#'>Messages</a></div>
        <div><a href='#'>News</a></div>
        <div><a href='#'>Music</a></div>
        <div><a href='#'>Settings</a></div>
      </nav>
      <div className='content'>
        <img src={require('./profilePhoto.png')} />
        <div>
        ava + description
      </div>
      <div>
        My posts
        <div>
          New post
        </div>
        <div>
          <div>Post 1</div>
          <div>Post 2</div>
        </div>
      </div>
      </div>
    </div>);}

export default App;
