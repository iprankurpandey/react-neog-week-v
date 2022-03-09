import React from 'react';
import { useState } from 'react';

function DarkMode() {
  const [colorMode, setLightMode] = useState('Dark Mode');
  const [bgcolor, setBgColor] = useState();
  const [textColor, setTextColor] = useState();

  function lightColor() {
    setLightMode(colorMode === 'Light Mode' ? 'Dark Mode' : 'Light Mode');
    setBgColor(bgcolor === 'white' ? 'black' : 'white');
    setTextColor(textColor === 'black' ? 'white' : 'black');
  }

  return (
    <div style={{ backgroundColor: bgcolor, color: textColor }}>
      <p>
        The BJP is set for a massive victory in Uttar Pradesh and the Congress
        will be routed in Punjab, a new post poll survey has predicted just a
        day before the counting of votes cast in five state elections tomorrow.
      </p>
      <button onClick={lightColor}> {colorMode}</button>
    </div>
  );
}

export default DarkMode;
