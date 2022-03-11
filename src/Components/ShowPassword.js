import React from 'react';
import { useState } from 'react';

function ShowPassword() {
  const [pwd, setPwd] = useState('show password');

  function visiblePassword(event) {
    let input6 = document.querySelector('.input6');
    if (input6.type === 'password') {
      setPwd('hide password');
      input6.type = 'text';
    } else {
      input6.type = 'password';
      setPwd('show password');
    }
  }

  return (
    <div>
      
      <h5>show password </h5>
      <input type="password" className="input6" />
      <button onClick={visiblePassword}>{pwd}</button>
    </div>
  );
}

export default ShowPassword;
