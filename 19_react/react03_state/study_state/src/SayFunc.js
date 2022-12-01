// 함수형 component
import { useState } from "react";

const SayFunc = () => {
  const [ message, setMessage ] = useState('welcome!');
  // 'welcome' = 상태 초기값

  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히가세요!');

  return (
    <>
    <h1>{message}</h1>
    <button onClick={onClickEnter}>입장</button>
    <button onClick={onClickLeave}>퇴장</button>
    </>
  )
}

export default SayFunc;