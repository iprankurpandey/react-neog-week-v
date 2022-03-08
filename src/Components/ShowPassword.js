import React from 'react';
import { useState } from 'react';

function ShowPassword() {
  const [pwd, setPwd] = useState('show password');

  function visiblePassword(event) {
    let input6 = document.querySelector('.input6').value;
    if (input6.length > 3) {
      setPwd('hide password');
    } else {
      setPwd('show password');
    }
  }

  return (
    <div>
      <input type="password" className="input6" />
      <button onClick={visiblePassword}>{pwd}</button>
    </div>
  );
}

export default ShowPassword;