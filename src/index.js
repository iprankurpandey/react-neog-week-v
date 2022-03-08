import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Components/Counter';
import ChangeBgColor from './Components/ChangeBgColor';
import TwitterCountApp from './Components/TwitterCountApp';
import PasswordMatcher from './Components/PasswordMatcher';
import DisableBtnPasswordMatch from './Components/DisableBtnPasswordMatch';
import Alphanumeric from './Components/Alphanumeric';

function App() {
  return (
    <div>
      <Counter />
      <ChangeBgColor />
      <TwitterCountApp />
      <PasswordMatcher />
      <DisableBtnPasswordMatch />
      <Alphanumeric />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
