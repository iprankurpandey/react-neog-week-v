import React from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div>
      <h1> counter : {count}</h1>
      <button onClick={increase}>++</button>
      <button onClick={decrease}>--</button>
    </div>
  );
}
