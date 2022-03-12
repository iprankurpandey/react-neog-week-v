import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Components/Counter';
import ChangeBgColor from './Components/ChangeBgColor';
import TwitterCountApp from './Components/TwitterCountApp';
import PasswordMatcher from './Components/PasswordMatcher';
import DisableBtnPasswordMatch from './Components/DisableBtnPasswordMatch';
import Alphanumeric from './Components/Alphanumeric';
import ShowPassword from './Components/ShowPassword';
import MiniFigma from './Components/MiniFigma';
import AddtoCart from './Components/AddtoCart';
import LikeinList from './Components/LikeinList';
import OutofStockItem from './Components/OutofStockItem';
import DarkMode from './Components/DarkMode';
import Todo from './Components/Todo';
import Toast from './Components/Toast';
import SwitchTabs from './Components/SwitchTabs';
import UserNameandPasswordMatch from './Components/UserNameandPasswordMatch';
import DanishTask from './Components/DanishTask';

function App() {
  return (
    <div>
      {/* <Counter />
      <ChangeBgColor />
      <TwitterCountApp />
      <PasswordMatcher />
      <DisableBtnPasswordMatch />
      <Alphanumeric />
      <ShowPassword />
      <MiniFigma />
      <LikeinList />
      <OutofStockItem />
      <AddtoCart />
      <DarkMode /> */}
      {/* <Todo /> */}
      {/* <Toast /> */}
      {/* <SwitchTabs /> */}
      {/* <UserNameandPasswordMatch /> */}
      <DanishTask />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
