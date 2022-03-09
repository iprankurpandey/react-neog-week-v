import React from 'react';
import { useState } from 'react';

function LikeinList() {
  const [list, setList] = useState('click to render list');
  function ListLikes() {
    const listItem = ['Apple', 'Mango', 'Banana', 'Pappu'];
    const mapItem = listItem.map((e) => <li> {e + '❤️️'} </li>);
    setList(mapItem);
  }
  return (
    <div>
      <ul> {list}</ul>
      <button onClick={ListLikes}>render</button>
    </div>
  );
}
export default LikeinList;
