import React from 'react';
import { useState } from 'react';

function Alphanumeric(event) {
  const [value, setValue] = useState('enter password ');

  function textPassword(event) {
    let input5 = document.querySelector('.input5');
    input5 = event.target.value;
    let alphabetPattern = /[a-zA-Z]/;
    let resultMatch = input5.match(alphabetPattern);
    if (resultMatch === null) {
      setValue('should include alphabets');
    } else {
      setValue('alphbets and numbers are there');
    }
  }
  return (
    <div>
      <h5> Alpha Numeric Password</h5>
      <h2>Password : {value} </h2>
      <input onChange={textPassword} className="input5" />
    </div>
  );
}

export default Alphanumeric;
