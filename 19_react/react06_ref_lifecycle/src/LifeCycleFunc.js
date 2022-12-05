import { useState, useEffect } from "react"

//원래 컴포넌트는 하나인게 더 낫지만 헷갈릴까봐 두개로 만듦
// 자식 컴포넌트
const MyComponent = (props) => {
  const {number} = props;
  const [text, setText] = useState('');

  useEffect(()=> {
    //Mount 시점에 실행
    console.log('mount')

    return () => {
      //Unmount 시점에 실행
      //Effect
      console.log('Unmount')
    }
  }, []);

  //Mount & Unmount 시점에 실행
  //PLUS 버튼 누르면 리렌더링 되며 update log 한번 더 찍히고 숫자 올라감!
useEffect(()=>{
  console.log('update')
})

useEffect(()=> {
  console.log('only text state update')
}, [text])


  return(
    <>
    <p>MyComponent {number}</p>
    <input 
    type="text" 
    value={text} 
    onChange={(e)=>setText(e.target.value)}/>
    </>
  )
}

// 부모 컴포넌트
const LifeCycleFunc = () => {
  const [number, setNumber] = useState(3);
  const [visible, setVisible] = useState(true);

  const changeNumberState = () => {
    setNumber(number + 1)
  }

  const changeVisible =  () => {
    setVisible(!visible)
  }

  return(
    <>
    <h1>함수형 컴포넌트에서 LifeCycle 이해하기</h1>
    <button onClick={changeNumberState}>PLUS</button>
    <button onClick={changeVisible}>ON / OFF</button>

    {visible && <MyComponent number={number}/>}
    {/* <MyComponent number={number}/> */}
    </>
  )
}

export default LifeCycleFunc;