import React from 'react';
import { useState } from 'react';
import { Home, Bat, Ball } from '/Components/Router';

function SwitchTabs() {
  const [home, setHome] = useState('home');
  const [bat, setbat] = useState();
  const [ball, setball] = useState();

  function getdata() {
    setHome(Home);
    setbat(Bat);
    setball(Ball);
  }

  return (
    <div>
      <button onClick={getdata}>{home}</button>
      <button onClick={getdata}>{bat}</button>
      <button onClick={getdata}>{ball}</button>
    </div>
  );
}

export default SwitchTabs;
