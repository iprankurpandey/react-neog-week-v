import React from 'react';
import { useState } from 'react';

function Todo() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleClick = () => {
    const task = {
      name: todo,
    };
    setTodoList([...todoList, task]);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setTodo(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="Add Activities" />
      <button onClick={handleClick}>Add task</button>

      <ul>
        {todoList.map((todo) => {
          return <li> {todo.name} </li>;
        })}
      </ul>
    </div>
  );
}
export default Todo;
