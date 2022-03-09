import React from 'react';
import { useState } from 'react';

function Todo() {
  const [state, setState] = useState();
  function renderText(event) {
    let dom = text.map((e) => <li> {e} </li>);
    console.log(dom);
  }

  return (
    <div>
      <input onChange={renderText} />
    </div>
  );
}
export default Todo;
