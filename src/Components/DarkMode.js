import React from 'react';
import { useState } from 'react';

function DarkMode() {
  const [colorMode, setLightMode] = useState('LightMode');
  const [bgcolor, setBgColor] = useState();
  const [textColor, setTextColor] = useState();

  function lightColor() {
    if ((document.body.style.backgroundColor = 'white')) {
      setBgColor('black');
      setTextColor('white');
      setLightMode('DarkMode');
    } else {
      setBgColor('white');
      setTextColor('black');
      setLightMode('whitemode');
    }
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
