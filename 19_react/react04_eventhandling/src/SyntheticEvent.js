import {useState} from 'react';

const SyntheticEvent = () => {
  const [text, setText] =useState('초기값');

  const printSyntheticEvent = (e) => console.log(e);

  const setSInputValue =(e) => setText(e.target.value);

  //alert 창 띄우기
  const showAlert = () => {
    alert(`input 입력값은 ${text}!!!`)
    //초기화
    setText('');
  }

  //엔터키 눌러도 alert 창 띄워주는것
  const onKeyPress = (e) => {
    if(e.key === 'Enter') {
      showAlert();
    }
  }

  return (
    <div>
      <button onClick={printSyntheticEvent}>
        SyntheticEvent 확인
        </button>
        <br />
        <br />

        <input
          type="text" 
          placeholder="입력하세요" 
          onChange={setSInputValue}
          onKeyPress={onKeyPress}
          value={text} />

        <button onClick={showAlert}>버튼</button>
    </div>
  );
}


// function App() {
//   const printSynthenticEvent = (e) => console.log(e);
//   return (
//     <div>
//       <button onClick={printSynthenticEvent}>
//         SyntheticEvent 확인
//       </button>
//     </div>
//   );
// }
export default SyntheticEvent;