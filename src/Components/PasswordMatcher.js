import React from 'react';
import { useState } from 'react';

function PasswordMacther() {
  const [value, setValue] = useState('enter password ');
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();

  function matchPassword1(event) {
    let text1 = event.target.value;
    setInput1(text1);
  }

  function matchPassword2(event) {
    let text2 = event.target.value;
    setInput2(text2);
    validate(input1, input2);
  }
  function validate(input1, input2) {
    if (input1 !== input2) {
      setValue('no match');
    } else {
      setValue(' match');
    }
  }

  return (
    <div>
      <h2> Password : {value} </h2>
      <input value={input1} onChange={matchPassword1} />
      <input value={input2} onChange={matchPassword2} />
    </div>
  );
}

export default PasswordMacther;
