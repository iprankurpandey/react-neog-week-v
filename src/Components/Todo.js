import React from 'react';
import { useState } from 'react';

function Todo() {
  const [input5, setTodoList] = useState();
  const [message, setMessage] = useState([]);

  function getvalue() {
    const update = [...message, input5];
    setMessage(update);
  }
  return (
    <div>
      <input value={input5} onChange={(e) => setTodoList(e.target.value)} />
      <button onClick={getvalue}> add to do list</button>

      {message}
    </div>
  );
}
export default Todo;
