import React from 'react';
import { useState } from 'react';

function DisableBtnPasswordMatch() {
  const [newvalue, setValue] = useState('enter password ');
  function matchPassword(event) {
    let input3 = document.querySelector('.input3');
    let input4 = document.querySelector('.input4');
    let btn = document.querySelector('.btn');

    if (input3.value.length === input4.value.length) {
      setValue('password matched');
      btn.disabled = false;
    } else {
      setValue('password not macthed');
      btn.disabled = true;
    }
  }
  return (
    <div>
      <h2>Password : {newvalue} </h2>
      <input onChange={matchPassword} className="input3" />
      <input onChange={matchPassword} className="input4" />
      <button className="btn">watch me </button>
    </div>
  );
}

export default DisableBtnPasswordMatch;
