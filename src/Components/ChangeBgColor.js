import { useState } from 'react';
import React from 'react';
function ChangeBgColor() {
  const [color, setColor] = useState('red');
  const Newcolor = setColor('red') ? 'Green' : 'red';

  return (
    <div style={{ backgroundColor: color }}>
      <h1>This is the paragraph we are changing.</h1>
      <button onClick={ChangeBgColor}> change color</button>
    </div>
  );
}
export default ChangeBgColor;
