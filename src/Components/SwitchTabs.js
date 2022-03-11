import React from 'react';
import { useState } from 'react';
import Home from './Home';
import Profile from './Profile';
import About from './About';

function SwitchTabs() {
  const [home1, setHome1] = useState('none');
  const [Profile1, setProfile1] = useState('none');
  const [About1, setAbout1] = useState('none');

  function getHome() {
    setHome1('block');
    setProfile1('none');
    setAbout1('none');
  }

  function getProfile() {
    setProfile1('block');
    setAbout1('none');
    setHome1('none');
  }

  function getAbout() {
    setAbout1('block');
    setHome1('none');
    setProfile1('none');
  }

  return (
    <div>
      <button onClick={getHome}>Home</button>
      <button onClick={getProfile}>Profile</button>
      <button onClick={getAbout}>About</button>
      <Home HomeValue={home1} />
      <Profile ProfileValue={Profile1} />
      <About AboutValue={About1} />
    </div>
  );
}

export default SwitchTabs;
