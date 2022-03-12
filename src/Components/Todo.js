import React from 'react';
import { useState } from 'react';

function Todo() {
  const [tasks, setTasks] = useState('');
  const [list, setList] = useState([]);

  const handleClick = () => {
    const todo = {
      id: Math.random(),
      name: tasks,
      complete: false,
    };

    setList(list.concat(todo));
  };
  const handleStrike = ({ id, complete }) => {
    const todo = [...list];
    setList(
      list.map((it) => {
        if (it.id === id) {
          it.complete = !complete;
        }
        return it;
      })
    );
    return todo;
  };

  const handleChange = (e) => {
    e.preventDefault();
    setTasks(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="Add Activities" />
      <button onClick={handleClick}>Add task</button>

      <ul>
        {list.map((task) => {
          return (
            <li
              style={{ textDecoration: task.complete ? 'line-through' : '' }}
              key={task.id}
              onClick={() => handleStrike(task)}
            >
              {task.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Todo;
