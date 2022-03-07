import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Components/Counter';
import ChangeBgColor from './Components/ChangeBgColor';
import TwitterCountApp from './Components/TwitterCountApp';
import PasswordMatcher from './Components/PasswordMatcher';

function App() {
  return (
    <div>
      <Counter />
      <ChangeBgColor />
      <TwitterCountApp />
      <PasswordMatcher />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
