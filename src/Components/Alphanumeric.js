import React from 'react';
import { useState } from 'react';

function Alphanumeric(event) {
  const [input5, setInput5Value] = useState('');

  function textPassword() {
    let alphabetPattern = /[a-zA-Z]+/;
    if (input5 !== '') {
      if (alphabetPattern.test(input5)) {
        return 'strong password';
      }
      return 'please include at least one number and alphabets';
    }
  }
  return (
    <div>
      <h5> Alpha Numeric Password</h5>
      <h2>Password : {} </h2>
      <input onChange={(e) => setInput5Value(e.target.value)} value={input5} />
      <div> {textPassword()}</div>
    </div>
  );
}

export default Alphanumeric;
