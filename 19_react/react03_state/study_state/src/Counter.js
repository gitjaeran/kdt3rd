// 클래스명 컴포넌트에서 state 다루기
import React from "react";

class Counter extends React.Component {
  // 기존 버전
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     number: 0,
  //   };
  // }

  // 현재 버전
  state = {
    number: 5,
  };


  render() {
    //state 데이터는 this.state로 접근 가능
    const { number } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <button onClick={() => alert(number)}>alert</button>

        {/* this.setState를 이용해 state값 변경 가능 */}
        <button onClick={() => this.setState({ number: 7 })}>
          Set Number 7
        </button>

        <button onClick={() => this.setState({ number: number + 1 })}>
          +1
        </button>
      </div>
    );
  }
}

// export 네임은 class 네임과 동일해야함
export default Counter;