import React from 'react';
import { useState } from 'react';

function MiniFigma() {
  const [count, setCount] = useState();

  function increaseFont() {
    setCount('30px');
  }
  function decreaseFont() {
    setCount('8px');
  }

  return (
    <div>
      <h4 style={{ fontSize: count }}> Mini Figma </h4>
      <button onClick={increaseFont}>++</button>
      <button onClick={decreaseFont}>--</button>
    </div>
  );
}
export default MiniFigma;
