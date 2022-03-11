import React from 'react';
import { useState } from 'react';

function PasswordMacther() {
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();

  function validate() {
    if (input1 !== '' && input2 !== '' && input1 === input2) {
      return 'password matched';
    } else {
      return 'password dont matched';
    }
  }

  return (
    <div>
      <span> {validate()}</span>
      <h5>Password matcher</h5>

      <input
        value={input1}
        onChange={(e) => {
          setInput1(e.target.value);
        }}
      />
      <input
        value={input2}
        onChange={(e) => {
          setInput2(e.target.value);
        }}
      />
      <div> {validate()}</div>
    </div>
  );
}

export default PasswordMacther;
