import { useState } from "react";

const NumberTest = () => {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number+1)
  }

  const alertMsg = (msg) => {
    alert(msg);
  }

  const alertMsg2 = (evt, msg) => {
    console.log(evt.target);
    alert(msg);
  }
  return (
  <div>
    <h1>Counter</h1>
    <h2>{number}</h2>

    <button onClick={onIncrease}>더하기</button>

    <h1>Alert</h1> 
    {/* 함수에 인자를 보내줌*/}
    <button onClick={() => alertMsg('hello!')}>메세지 띄우기</button>

    <button onClick={(e) => alertMsg2(e, 'Bye!')}>메세지 띄우기</button>
  </div>
  )
}

export default NumberTest;