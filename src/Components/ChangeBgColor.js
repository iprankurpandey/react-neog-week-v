import { useState } from 'react';
import React from 'react';
function ChangeBgColor() {
  const [color, setColor] = useState('white');
  const changeColor = () => setColor(color === 'red' ? 'green' : 'red');

  return (
    <div style={{ backgroundColor: color }}>
      <h1>This is the paragraph we are changing.</h1>
      <button onClick={changeColor}> change color</button>
    </div>
  );
}
export default ChangeBgColor;
