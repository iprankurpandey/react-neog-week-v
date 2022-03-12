import React from 'react';
import { useState } from 'react';

function Todo() {
  const [todolist, setTodoList] = useState();
  const [message, setMessage] = useState();
  

  return (
    <div>
      <input />
      <button> add to do list</button>
    </div>
  );
}
export default Todo;
