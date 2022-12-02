import {useState} from 'react';

const RemoveText  = () =>{
  const [visible, setVisible] =useState(true);

  const ChangeVis=()=>{
    setVisible((check) => !check)
  };

  return(
    <div>
      <button onClick={ChangeVis}>{visible ? '사라져라' : '보여라'}</button>
      <h1>{visible ? '안녕하세요' : ''}</h1>
    </div>
  )
}

export default RemoveText;
// https://kyounghwan01.github.io/blog/React/boolean-useState-not-working/



// import { useState } from 'react';
// const Prob50 = () => {
//   const [visible, setVisible] = useState(true);

//   return (
//     <div>
//       {/* <h1>{visible ? '안녕하세요' : ''}</h1> */}
//       <h1>{visible && '안녕하세요'}</h1>
//       <button onClick={() => setVisible(!visible)}>
//         {visible ? '사라져라' : '보여라'}
//       </button>
//     </div>
//   );
// };

// export default Prob50;