import React from 'react';
import { useState } from 'react';

function ShowPassword() {
  const [inputValue, setInputValue] = useState('password');

  function visiblePassword() {
    if (inputValue === 'text') {
      setInputValue('password');
    } else {
      setInputValue('text');
    }
  }

  return (
    <div>
      <h5>show password </h5>
      <input type={inputValue} />
      <button onClick={visiblePassword}>show password </button>
    </div>
  );
}

export default ShowPassword;
