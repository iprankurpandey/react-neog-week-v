import React from 'react';
import { useState } from 'react';

function DanishTask() {
  const [displayValue, setDisplayValue] = useState('none');
  const [text, setTextValue] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  function showform() {
    if (displayValue == 'block') {
      setDisplayValue('none');
    } else {
      setDisplayValue('block');
    }
  }
  function onSubmitgetValue() {
    let name = text;
    console.log(name);
    let password = { password };
    let email = { email };
    // return name, email, password;
  }
  return (
    <div>
      <button onClick={showform}> Click me </button>
      <form style={{ display: displayValue }}>
        <input
          value={text}
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
        <button onChange={onSubmitgetValue}> submit</button>
      </form>
      {/* <div> name is : {text} </div>
      <div> password is : {password} </div>
      <div> email is : {email} </div> */}
    </div>
  );
}
export default DanishTask;
