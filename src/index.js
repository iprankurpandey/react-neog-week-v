import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Components/Counter';
import ChangeBgColor from './Components/ChangeBgColor';

function App() {
  return (
    <div>
      <ChangeBgColor />
      <Counter />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
