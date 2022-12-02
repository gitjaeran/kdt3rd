import {useState} from 'react';

const ChangeColor = () => {
  const [text, setMessage] =useState('검정색 글씨');
  const [color, setColor] =useState('black');



  return(
    <div>
      <h1 style={{color : color}}>{text}</h1>

      <button onClick={()=>{
        setMessage("빨간색 글씨"); 
        setColor("red")}}>
          red
      </button>

      <button onClick={()=>{
        setMessage("파란색 글씨"); 
        setColor("blue")}}>
          blue
      </button>
    </div>
  )
}

export default ChangeColor;


// const Prob49 = () => {
//   const [color, setColor] = useState('black');
//   const [text, setText] = useState('검정');

//   const onClickRed = () => {
//     setText('빨간');
//     setColor('red');
//   };
//   const onClickBlue = () => {
//     setText('파란');
//     setColor('blue');
//   };

//   return (
//     <div>
//       <h1 style={{ color: color }}>{text}색 글씨</h1>
//       <button onClick={onClickRed}>빨간색</button>
//       <button onClick={onClickBlue}>파란색</button>
//     </div>
//   );
// };