import {useRef} from 'react';
//ref는 값을 변경되지만 화면에 바로 렌더되지 않음
//state는 바로 변경됨

const RefSample2 = () => {
  // 1. ref 객체 만들기
  const id = useRef(1); //기본값 1 설정

  const plusId = () =>  {
    // 2. ref.current를 로컬 변수로 사용
    id.current += 1;
    console.log(id.current);
  };

  return (
    <>
    <h1>Ref Sample 로컬변수</h1>
    <h2>{id.current}</h2>
    <button onClick={plusId}>Plus Ref</button>
    </>
  );
};

export default RefSample2;