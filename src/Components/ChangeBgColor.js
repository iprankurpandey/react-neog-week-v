import { useState } from 'react';
import React from 'react';
function ChangeBgColor() {
  const [color, setColor] = useState('red');
  const changeColor = () =>
    setColor('red') ? setColor('green') : setColor('red');

  return (
    <div style={{ backgroundColor: color }}>
      <h1>This is the paragraph we are changing.</h1>
      <button onClick={changeColor}> change color</button>
    </div>
  );
}
export default ChangeBgColor;
