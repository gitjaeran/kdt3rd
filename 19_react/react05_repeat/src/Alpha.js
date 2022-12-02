import {useState} from 'react';

const Alpha = () => {
  // const [alphabets, setAlphabets] = useState(['k','d','t','3','r','d']);

  //배열(state)에 고유 id를 갖도록 설정
  const [alphabets, setAlphabets] = useState([
    {id: 1, alpha: 'k'}, //첫 번째 반복에서의 (a)
    {id: 2, alpha: 'd'}, //두 번째 반복에서의 (a)
    {id: 3, alpha: 't'}, //세 번째 반복에서의 (a)
    {id: 4, alpha: '3'}, //네 번째 반복에서의 (a)
    {id: 5, alpha: 'r'}, //다섯 번째 반복에서의 (a)
    {id: 6, alpha: 'd'}, //여섯 번째 반복에서의 (a)
  ]);
  console.log(alphabets);

  const [inputAlpha, setInputAlpha] = useState('');
  const [nextId, setNextId] = useState(7); //새로운 항목 추가를 위한 id값

  const addAlpha = () => {
    //기존 alphabets state에 새로 입력된 input 추가
    const newAlpha = alphabets.concat(
      {id: alphabets.length+1, alpha:inputAlpha});
    setNextId(nextId +1)//다음항목 id를 위해 1 증가
    setAlphabets(newAlpha) // alphabets state에 newAlpha 추가
    setInputAlpha(''); // input 초기화
  }

  const deleteAlpha = (id)  =>  {
    console.log(id);
    //더블클릭된 id 빼고 살아남음
    // filter = 조건을 통과한 요소만 반환
    // a.id(더블클릭한id) !== id(기존에 있던 id)
    const result = alphabets.filter((a)=>a.id !== id);
    setAlphabets(result);
  }
  return (
    <div>
      <ul>
        <input type="text" value={inputAlpha} 
        onChange={(e) => setInputAlpha(e.target.value)}/>

        <button onClick={addAlpha}>ADD</button>

        {alphabets.map((a)=>{
          return (
          <li 
          key={a.id} 
          onDoubleClick={()=>{
            deleteAlpha(a.id)
          }}>{a.alpha}</li>)
        })}
      </ul>
    </div>
  )
}

export default Alpha;