import React from 'react';
import { useState } from 'react';

function UserNameandPasswordMatch() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [value, setValue] = useState('enter value');

  function validate() {
    if (input1 !== '' && (input2 !== '') & (input1 === input2)) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <div>
      <h5> password and user name disable button</h5>
      <span> passwors is : {value}</span>
      <input
        type="text"
        value={input1}
        onChange={(e) => {
          setInput1(e.target.value);
        }}
      />
      <input
        type="text"
        value={input2}
        onChange={(e) => {
          setInput2(e.target.value);
        }}
      />
      <button type="submit" disabled={validate()}>
        click
      </button>
    </div>
  );
}

export default UserNameandPasswordMatch;
