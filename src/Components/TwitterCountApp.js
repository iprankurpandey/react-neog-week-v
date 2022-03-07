import React from 'react';
import { useState } from 'react';

function TwitterCountApp() {
  const [counter, setCounter] = useState(0);

  function charCounter(event) {
    let input = event.target.value;
    let leftChar = 280 - input.length;
    setCounter(leftChar);
  }

  return (
    <div>
      <h3> Tweet CharCount is : {counter} </h3>
      <input onChange={charCounter} />
    </div>
  );
}

export default TwitterCountApp;
