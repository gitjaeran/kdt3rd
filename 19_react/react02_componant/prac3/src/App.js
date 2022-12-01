import Props from './ClassComponent';
import React from 'react';
// import Props from './prac3/ClassComponent';
import './App.css';

const App =() => {
  const my_func = () => {
    console.log("콘솔 띄우기 성공");
  };

  return (
    <div>
      <Props text="App 컴포넌트에서 넘겨준 text props" valid={my_func}/>
    </div>
  );
}

export default App;
