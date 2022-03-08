import React from 'react';
import { useState } from 'react';

function PasswordMacther() {
  const [value, setValue] = useState('enter password ');
  function matchPassword(event) {
    let input1 = document.querySelector('.input1');
    let input2 = document.querySelector('.input2');
    if (input1.value.length === input2.value.length) {
      setValue('matched');
    } else {
      setValue('not macthed');
    }
  }
  return (
    <div>
      <h2>Password : {value} </h2>
      <input onChange={matchPassword} className="input1" />
      <input onChange={matchPassword} className="input2" />
    </div>
  );
}

export default PasswordMacther;
