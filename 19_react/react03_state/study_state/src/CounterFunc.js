import { useState } from "react"

const CounterFunc = (props) => {
  const [number, setNumber] = useState(0);

  const plusOne = () => setNumber(number+1);

  //props 받아오기
  console.log(props);
  const {value} = props;

  return (
    <>
    <h1>{number}</h1>
    <button onClick={plusOne}>
      {/* props = value */}
      {value}
    </button>
    </>
  )
}

export default CounterFunc;