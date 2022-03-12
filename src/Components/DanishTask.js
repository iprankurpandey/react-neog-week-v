import React from 'react';
import { useState } from 'react';

function DanishTask() {
  const [displayValue, setDisplayValue] = useState('none');
  const [username, setTextValue] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [displaydata, setDisplaydata] = useState();

  function showform() {
    if (displayValue == 'block') {
      setDisplayValue('none');
    } else {
      setDisplayValue('block');
    }
  }

  function onSubmitgetValue(e) {
    e.preventDefault();
    setDisplaydata([username, email, password]);
  }

  return (
    <div>
      <button onClick={showform}> Click me </button>
      <form
        style={{ display: displayValue }}
        onSubmit={(e) => onSubmitgetValue(e)}
      >
        <input
          value={username}
          type="text"
          placeholder="name"
          onChange={(e) => setTextValue(e.target.value)}
        />
        <input
          value={email}
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button> submit</button>
      </form>

      {displaydata}
    </div>
  );
}
export default DanishTask;
