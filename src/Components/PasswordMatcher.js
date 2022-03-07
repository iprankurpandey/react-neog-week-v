import React from 'react';
import { useState } from 'react';

function PasswordMacther() {
  const [value, setValue] = useState('enter password ');
  function matchPassword(event) {
    let input1 = document.getElementsByClassName('input1');
    input1 = event.target;
    let input2 = document.getElementsByClassName('input2');
    input2 = event.target;
    if (input1.value.length && input1.value.length === 8) {
      setValue('matched');
      return true;
    } else {
      setValue('not matched');
      return false;
    }
  }
  return (
    <div>
      <h2>Password : {value} </h2>
      <input onChange={matchPassword} className="input1" />
      <input onChange={matchPassword} className="input1" />
    </div>
  );
}

export default PasswordMacther;
