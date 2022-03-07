import React from 'react';
import { useState } from 'react';

function PasswordMacther() {
  const [value, setValue] = useState('enter password ');
  function matchPassword(event) {
    let input1 = document.getElementsByClassName('input1');
    input1 = event.target.value.length;
    console.log(input1);
    let input2 = document.getElementsByClassName('input2').value;
    input2 = event.target.value.length;

    if (input1 && input2 > 8) {
      setValue('matched');
    } else {
      setValue('not macthed');
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
