import {useState} from 'react';

const HandlerEx = () => {
  const [text, setText] =useState('HELLO WORLD');

  const textChange = () => {
    setText('GoodBye!')
  }

  return(
    <div>
      <h1>{text}</h1>

      <button onClick={textChange}>Click</button>
    </div>
  )
}

export default HandlerEx;