import React from 'react';
import { useState } from 'react';

function Todo() {
  const [todolist, setTodoList] = useState();
  const [message, setMessage] = useState();

  function onChangeInput(e) {
    let text = e.target.value;
    setMessage(text);
  }

  function onClickEvent() {
    setTodoList();
  }
  return (
    <div>
      <input onChange={onChangeInput} />
      <button onClick={addFunction}> add to do list</button>
    </div>
  );
}
export default Todo;
