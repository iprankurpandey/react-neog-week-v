import React from 'react';
import { useState } from 'react';

function Alphanumeric(event) {
  const [value, setValue] = useState('alpha password ');

  function textPassword(event) {
    let input5 = document.querySelector('.input5');
    input5 = event.target.value;
    let alphabetPattern = '^[a-zA-Z]*$';
    // let resultMatch = input5.match(alphabetPattern);
    if (input5.includes(alphabetPattern)) {
      setValue('macthed');
    } else {
      setValue('should include alphabets');
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
