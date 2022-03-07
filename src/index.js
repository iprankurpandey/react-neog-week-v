import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Components/Counter';
import ChangeBgColor from './Components/ChangeBgColor';
import TwitterCountApp from './Components/TwitterCountApp';

function App() {
  return (
    <div>
      <Counter />
      <ChangeBgColor />
      <TwitterCountApp />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
