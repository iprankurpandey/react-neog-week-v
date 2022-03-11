import React from 'react';
import { useState } from 'react';

function DisableBtnPasswordMatch() {
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();

  function validate() {
    if (input1 !== '' && input2 !== '' && input1 === input2) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <div>
      <span> {validate()}</span>
      <h5>Password button disabled matcher</h5>

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
      <button disabled={validate()}> watch me </button>
      {/* <div> {validate()}</div> */}
    </div>
  );
}
export default DisableBtnPasswordMatch;
