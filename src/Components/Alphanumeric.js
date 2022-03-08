import React from 'react';
import { useState } from 'react';

function Alphanumeric(event) {
  const [value, setValue] = useState('enter Alpha password ');
  let input5 = document.querySelector('.input5');
  input5 = event.target.value;
  let combination = /[A-Z]/g;
  let result = input5.includes(combination);
  console.log(result);
  function textPassword() {
    if (result) {
      console.log('matched');
    } else {
      console.log('no match');
    }
  }

  return (
    <div>
      <h2>Password : {value} </h2>
      <input onChange={textPassword} className="input5" />
    </div>
  );
}

export default Alphanumeric;
